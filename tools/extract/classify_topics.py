# -*- coding: utf-8 -*-
"""Gán mỗi câu hỏi vào một chủ đề trong đề cương AZ-900.

Cách làm: chấm điểm theo từ khoá. Mỗi chủ đề có một danh sách (regex, điểm);
chủ đề nào tổng điểm cao nhất thì thắng. Đề bài và ĐÁP ÁN ĐÚNG được nhân trọng số
cao hơn các đáp án sai — nếu chấm đều nhau thì câu kiểu "Office 365 là ví dụ của?"
(có đủ IaaS/PaaS/SaaS trong danh sách chọn) sẽ rơi vào nhầm chủ đề.
"""
import json
import re
import collections

# (topic, domain, [(regex, weight)])
RULES = [
    # ---------------- d1: Cloud concepts ----------------
    ('cc-shared', 'd1', [
        (r'shared responsibility', 12),
        (r'responsib\w+ (?:of|for) (?:the )?(?:customer|cloud provider)', 8),
        (r'who is responsible', 7),
        (r'responsibility (?:always )?(?:retained|of the customer)', 8),
        (r'customer.{0,20}responsib', 5),
        (r'provider.{0,20}responsib', 5),
    ]),
    ('cc-models', 'd1', [
        (r'\bhybrid cloud\b', 9), (r'\bprivate cloud\b', 7), (r'\bpublic cloud\b', 7),
        (r'\bcloud (?:deployment )?model', 6), (r'\bmulti-?cloud\b', 6),
        (r'\bcommunity cloud\b', 6), (r'azure stack', 5),
    ]),
    ('cc-usecase', 'd1', [
        (r'which cloud (?:deployment )?model should', 9),
        (r'which (?:type of )?cloud (?:model|deployment).{0,20}(?:use|recommend)', 8),
    ]),
    ('cc-consumption', 'd1', [
        (r'consumption[- ]based', 12), (r'pay[- ]as[- ]you[- ]go', 6),
        (r'pay only for what', 8), (r'\bmetered\b', 5),
        (r'monthly usage cost', 9),
    ]),
    ('cc-pricing', 'd1', [
        (r'\bcapex\b', 12), (r'\bopex\b', 12), (r'capital expenditure', 12),
        (r'operational expenditure', 12), (r'operating expenditure', 12),
        (r'expenditure model', 10),
    ]),
    ('cc-define', 'd1', [
        (r'what is cloud computing', 12), (r'define cloud computing', 12),
        (r'\bcloud computing\b', 3), (r'\bagility\b', 5), (r'\belasticity\b', 6),
        (r'\belastic\b', 4), (r'\bfault tolerance\b', 4), (r'\bdisaster recovery\b', 4),
        (r'\bvirtuali[sz]ation\b', 7), (r'features? of cloud computing', 12),
        (r'characteristics? of (?:the )?cloud', 10),
    ]),
    ('cb-ha-scale', 'd1', [
        (r'\bhigh availability\b', 7), (r'\bscalability\b', 7), (r'scale (?:up|out|down|in)\b', 7),
        (r'\bvertical scaling\b', 8), (r'\bhorizontal scaling\b', 8), (r'\bautoscal', 5),
        (r'\bservice level agreement\b', 6), (r'\bslas?\b', 6), (r'composite sla', 9),
        (r'\buptime\b', 8), (r'resize\b.{0,25}on demand', 9),
        (r'application availability', 9),
        (r'(?:increase|grow).{0,30}(?:capacity|storage|disk)', 5),
    ]),
    ('cb-reliability', 'd1', [
        (r'\breliability\b', 6), (r'\bpredictab', 8), (r'well[- ]architected', 8),
    ]),
    ('cb-security', 'd1', [
        (r'benefits? of .{0,20}(?:security|governance)', 8),
    ]),
    ('cb-manage', 'd1', [
        (r'manageability', 10), (r'management of the cloud', 8), (r'management in the cloud', 8),
    ]),
    ('cs-iaas', 'd1', [
        (r'\biaas\b', 10), (r'infrastructure[- ]as[- ]a[- ]service', 12),
        (r'\blaas\b', 9), (r'eliminate the cost of having it staff', 10),
        (r'most user management', 9),
    ]),
    ('cs-paas', 'd1', [
        (r'\bpaas\b', 10), (r'platform[- ]as[- ]a[- ]service', 12),
    ]),
    ('cs-saas', 'd1', [
        (r'\bsaas\b', 10), (r'software[- ]as[- ]a[- ]service', 12),
        (r'office 365', 8), (r'\bdynamics 365\b', 7),
    ]),
    ('cs-usecase', 'd1', [
        (r'which cloud service (?:type|model) should', 9),
        (r'serverless computing', 4),
    ]),

    # ---------------- d2: Azure architecture and services ----------------
    ('ar-regions', 'd2', [
        (r'\bregion pair', 12), (r'\bpaired region', 12), (r'\bazure region', 7),
        (r'\bregions?\b', 3), (r'\bgeograph', 6), (r'azure government', 9),
        (r'\bsovereign\b', 9), (r'21vianet', 9), (r'azure china', 9), (r'azure germany', 10),
        (r'\bregion\b.{0,30}\bselect', 4),
    ]),
    ('ar-az', 'd2', [
        (r'availability zone', 13),
    ]),
    ('ar-dc', 'd2', [
        (r'\bdatacent(?:er|re)s?\b', 6),
    ]),
    ('ar-resources', 'd2', [
        (r'\bresource group', 10), (r'\bresource manager\b', -6),
    ]),
    ('ar-subscription', 'd2', [
        (r'\bsubscriptions?\b', 5), (r'\bfree account\b', 8), (r'\bazure free\b', 8),
        (r'\benterprise agreement\b', 6), (r'\bcredit\b', 6), (r'\bmarketplace\b', 6),
        (r'\blicen[sc]es?\b', 6), (r'\btenants?\b', 5), (r'\bspending limit', 7),
    ]),
    ('ar-mgmtgroup', 'd2', [
        (r'management group', 13),
    ]),
    ('ar-hierarchy', 'd2', [
        (r'hierarch', 9), (r'correct order.{0,40}(?:resource|subscription|management)', 10),
        (r'scope.{0,30}(?:management group|subscription|resource group)', 5),
    ]),
    ('cn-compute', 'd2', [
        (r'azure functions?\b', 10), (r'\bserverless\b', 7), (r'container instance', 10),
        (r'\bkubernetes\b', 10), (r'\baks\b', 8), (r'\bcontainers?\b', 5),
        (r'\blogic apps?\b', 7), (r'azure batch', 8), (r'service fabric', 8),
    ]),
    ('cn-vm', 'd2', [
        (r'scale sets?\b', 12), (r'availability sets?\b', 12), (r'virtual desktop', 12),
        (r'\bwvd\b', 9), (r'fault domain', 10), (r'update domain', 10),
        (r'\bdedicated host', 9), (r'\bspot (?:vm|virtual)', 8),
    ]),
    ('cn-vmres', 'd2', [
        (r'virtual machines?\b', 4), (r'\bvms?\b', 3), (r'managed disk', 8),
        (r'unmanaged disk', 8), (r'\bos disk\b', 8), (r'\bdata disk', 7),
    ]),
    ('cn-hosting', 'd2', [
        (r'app service', 11), (r'\bweb apps?\b', 8), (r'web tier plan', 12),
        (r'\bapp service plan', 12), (r'\bstaging slot', 9), (r'deployment slot', 9),
    ]),
    ('cn-vnet', 'd2', [
        (r'virtual network', 10), (r'\bvnet', 10), (r'\bsubnet', 8), (r'\bpeering\b', 11),
        (r'\bexpressroute\b', 13), (r'vpn gateway', 12), (r'\bvpn\b', 7), (r'azure dns', 10),
        (r'network security group', 11), (r'\bnsg\b', 10), (r'load balancer', 8),
        (r'traffic manager', 8), (r'application gateway', 8), (r'azure firewall', 9),
        (r'ddos', 9), (r'\bcdn\b', 6), (r'\bports?\b.{0,25}(?:access|open|control)', 5),
        (r'connection types? between', 8), (r'\bconnectivity\b', 5), (r'\bfront door\b', 7),
    ]),
    ('cn-endpoint', 'd2', [
        (r'private endpoint', 13), (r'public endpoint', 13), (r'private link', 12),
    ]),
    ('st-services', 'd2', [
        (r'\bblob\b', 8), (r'azure files?\b', 9), (r'\bfile shares?\b', 8),
        (r'\bqueue storage\b', 10), (r'\btable storage\b', 10), (r'\bqueues?\b', 5),
        (r'\btables?\b', 3), (r'azure storage', 5), (r'data lake', 6),
        (r'service bus', 11), (r'enterprise messaging', 10), (r'messaging solution', 8),
    ]),
    ('st-tiers', 'd2', [
        (r'\baccess tier', 12), (r'\bhot\b.{0,20}\bcool\b', 10),
        (r'\barchive (?:tier|access|storage)', 11), (r'\bcool (?:tier|access)', 11),
        (r'\bstorage tier', 12), (r'\brehydrat', 10),
    ]),
    ('st-redundancy', 'd2', [
        (r'\blrs\b', 12), (r'\bzrs\b', 12), (r'\bgrs\b', 12), (r'\bra-grs\b', 13),
        (r'\bgzrs\b', 12), (r'locally[- ]redundant', 13), (r'zone[- ]redundant', 13),
        (r'geo[- ]redundant', 13), (r'\bredundancy\b', 8),
        (r'replicat\w+.{0,30}(?:secondary|region)', 6),
    ]),
    ('st-account', 'd2', [
        (r'storage account', 8), (r'\bcors\b', 11), (r'cross-origin resource sharing', 12),
    ]),
    ('st-move', 'd2', [
        (r'\bazcopy\b', 13), (r'storage explorer', 13), (r'file sync', 13),
    ]),
    ('st-migrate', 'd2', [
        (r'azure migrate', 13), (r'data box', 13), (r'\bmigration (?:tool|option)', 6),
        (r'site recovery', 9),
    ]),
    ('id-directory', 'd2', [
        (r'azure active directory', 8), (r'\bazure ad\b', 8), (r'microsoft entra', 9),
        (r'\bentra id\b', 10), (r'domain services', 11), (r'\bad connect\b', 11),
        (r'domain controller', 9), (r'\bldap\b', 8), (r'\bkerberos\b', 8), (r'group polic', 7),
    ]),
    ('id-auth', 'd2', [
        (r'multi-?factor', 13), (r'\bmfa\b', 13), (r'single sign-?on', 13), (r'\bsso\b', 12),
        (r'passwordless', 13), (r'windows hello', 11), (r'\bfido2?\b', 11),
        (r'\bauthenticat', 5), (r'\bbiometric', 9), (r'facial recognition', 8),
        (r'\bfingerprint', 8), (r'\bauthenticator app', 10),
    ]),
    ('id-external', 'd2', [
        (r'\bb2b\b', 13), (r'\bb2c\b', 13),
        (r'business-to-(?:business|consumer|customer)', 13),
        (r'\bguest users?\b', 10), (r'external identit', 12),
    ]),
    ('id-conditional', 'd2', [
        (r'conditional access', 14),
    ]),
    ('id-rbac', 'd2', [
        (r'\brbac\b', 13), (r'role-?based access', 13), (r'\brole assignment', 10),
        (r'\b(?:owner|contributor|reader) role', 9), (r'\bbuilt-in roles?\b', 10),
        (r'\bauthoriz', 6), (r'access control \(iam\)', 10), (r'\bcustom role', 9),
    ]),
    ('id-zerotrust', 'd2', [
        (r'zero trust', 14), (r'least privilege', 8), (r'assume breach', 10),
        (r'verify explicitly', 10),
    ]),
    ('id-defense', 'd2', [
        (r'defen[cs]e[ -]in[ -]depth', 14), (r'layered (?:security|defen)', 9),
    ]),
    ('id-defender', 'd2', [
        (r'defender for cloud', 14), (r'security cent(?:er|re)', 12), (r'\bsentinel\b', 13),
        (r'secure score', 12), (r'\bsiem\b', 10), (r'\bsoar\b', 10), (r'threat protection', 8),
        (r'key vault', 9), (r'\bencrypt', 5), (r'azure information protection', 9),
        (r'\bdisk encryption\b', 8),
    ]),

    # ---------------- d3: Management and governance ----------------
    ('cm-factors', 'd3', [
        (r'reserved (?:vm )?instances?', 13), (r'\breservations?\b', 8),
        (r'hybrid benefit', 13), (r'affect.{0,20}cost', 10), (r'reduce.{0,20}cost', 6),
        (r'\bbandwidth\b.{0,25}cost', 8), (r'\bingress\b', 8), (r'\begress\b', 8),
        (r'data transfer.{0,20}(?:cost|free|charge)', 8),
        (r'\bcost.{0,20}(?:minimi[sz]|lower|saving)', 6),
        (r'\bspot\b.{0,15}(?:price|discount)', 7),
    ]),
    ('cm-calculators', 'd3', [
        (r'pricing calculator', 14), (r'\btco\b', 14), (r'total cost of ownership', 14),
        (r'estimate.{0,30}cost', 8), (r'\bcalculator\b', 8), (r'idea on the cost', 10),
        (r'cost that will be incurred', 10),
        (r'compare.{0,25}cost.{0,25}on-?premises', 10),
    ]),
    ('cm-tools', 'd3', [
        (r'cost management', 13), (r'\bbudgets?\b', 9), (r'cost analysis', 12),
        (r'\bspending\b.{0,20}(?:alert|report)', 8), (r'\bbilling\b', 5), (r'\binvoice', 6),
    ]),
    ('cm-tags', 'd3', [
        (r'\btags?\b', 10), (r'\btagging\b', 11),
    ]),
    ('gc-purview', 'd3', [
        (r'\bpurview\b', 14), (r'data catalog', 10), (r'data lineage', 10),
    ]),
    ('gc-policy', 'd3', [
        (r'azure polic', 13), (r'\bpolicies\b', 6), (r'\bblueprints?\b', 13),
        (r'\binitiative', 9), (r'\bcompliance\b.{0,25}(?:polic|rule)', 6),
    ]),
    ('gc-locks', 'd3', [
        (r'\bresource lock', 14), (r'\bcannotdelete\b', 13), (r'\bread-?only lock', 13),
        (r'\blocks?\b', 7),
    ]),
    ('gc-trust', 'd3', [
        (r'trust cent(?:er|re)', 13), (r'service trust portal', 14), (r'compliance manager', 13),
        (r'\bgdpr\b', 9), (r'\biso\b', 7), (r'\bregulatory\b', 8), (r'\bcompliance\b', 4),
        (r'\baudit reports?\b', 9), (r'knowledge cent(?:er|re)', 9),
        (r'personal data', 9), (r'\bprivacy\b', 8), (r'data protection', 7),
    ]),
    ('mg-portal', 'd3', [
        (r'azure portal', 9), (r'\bdashboard', 8), (r'\bblades?\b', 7), (r'mobile app', 8),
    ]),
    ('mg-shell', 'd3', [
        (r'cloud shell', 14), (r'azure cli', 13), (r'azure powershell', 13),
        (r'\bpowershell\b', 9), (r'\bbash\b', 9), (r'\bcli\b', 8), (r'command-?line', 7),
    ]),
    ('mg-arc', 'd3', [
        (r'azure arc', 14),
    ]),
    ('mg-arm', 'd3', [
        (r'\barm template', 14), (r'resource manager template', 14),
        (r'azure resource manager', 12), (r'\bbicep\b', 13), (r'infrastructure as code', 12),
        (r'\bjson\b.{0,25}template', 9), (r'\btemplates?\b.{0,30}deploy', 7),
        (r'automat\w+.{0,25}deploy', 6), (r'create azure resources automatically', 12),
        (r'resources? .{0,20}(?:identical|are identical)', 8),
    ]),
    ('mo-advisor', 'd3', [
        (r'azure advisor', 14), (r'\badvisor\b', 12),
    ]),
    ('mo-servicehealth', 'd3', [
        (r'service health', 13), (r'resource health', 13), (r'azure status', 12),
        (r'health of azure services', 11), (r'planned maintenance', 9), (r'known issues', 7),
    ]),
    ('mo-monitor', 'd3', [
        (r'azure monitor', 13), (r'log analytics', 13), (r'application insights', 13),
        (r'\balerts?\b', 7), (r'\bkql\b', 11), (r'\bmetrics?\b', 5), (r'activity log', 8),
        (r'\bdiagnostics?\b', 6),
    ]),

    # ---------------- d4: ngoài đề cương hiện hành ----------------
    ('ex-support', 'd4', [
        (r'support plans?\b', 14), (r'support requests?\b', 12), (r'professional direct', 14),
        (r'\bprodirect\b', 13), (r'support engineers?\b', 11), (r'support tickets?\b', 11),
        (r'(?:basic|developer|standard).{0,20}support', 8),
        (r'architecture (?:review|support|guidance)', 9), (r'technical support', 10),
    ]),
    ('ex-lifecycle', 'd4', [
        (r'public preview', 14), (r'private preview', 14), (r'general availability', 13),
        (r'\bpreview\b', 8), (r'modern lifecycle', 14),
        (r'end support for an azure service', 12),
        (r'releasing a feature to all azure customers', 13), (r'\bdeprecat', 8),
    ]),
    ('ex-caf', 'd4', [
        (r'cloud adoption framework', 14), (r'\bcaf\b', 10),
    ]),
    ('ex-devops', 'd4', [
        (r'azure devops', 14), (r'\bci/?cd\b', 13), (r'continuous integration', 13),
        (r'continuous delivery', 13), (r'git repositor', 12), (r'azure repos', 13),
        (r'azure pipelines?', 13), (r'\bgithub\b', 9), (r'azure boards', 12),
    ]),
    ('ex-services', 'd4', [
        (r'\biot hub\b', 14), (r'iot central', 14), (r'azure sphere', 13), (r'\biot\b', 9),
        (r'hdinsight', 14), (r'databricks', 14), (r'data factory', 13),
        (r'stream analytics', 13), (r'machine learning', 12), (r'predictive analytics', 12),
        (r'cognitive services', 12), (r'bot service', 12), (r'artificial intelligence', 9),
        (r'\bai solution\b', 10), (r'key-?value and wide-?column', 12),
        (r'apache (?:spark|hadoop)', 12), (r'azure sql database', 4), (r'\bnosql\b', 7),
        (r'\bcosmos db\b', 8), (r'\bsynapse\b', 8), (r'search service', 8), (r'event hub', 10),
    ]),
]

COMPILED = [(t, d, [(re.compile(p, re.I), w) for p, w in ks]) for t, d, ks in RULES]


def text_of(rec):
    """Toàn bộ chữ của một câu — dùng để kiểm tra, không dùng để chấm điểm."""
    parts = list(rec['question'])
    parts += [o['t'] for o in rec['options']]
    for sub in rec['subs']:
        parts.append(sub['prompt'])
        parts += sub['options']
    for blk in rec['explanation']:
        parts += blk
    return ' '.join(parts)


def segments(rec):
    """Chia câu hỏi thành các mảnh kèm trọng số.

    Đề bài và ĐÁP ÁN ĐÚNG mới nói lên chủ đề thật sự; các đáp án sai chỉ là nhiễu.
    """
    stem = ' '.join(rec['question'])
    right, wrong = [], []
    for o in rec['options']:
        (right if o['c'] else wrong).append(o['t'])
    for sub in rec['subs']:
        stem += ' ' + sub['prompt']
    expl = ' '.join(' '.join(b) for b in rec['explanation'])
    return [(stem, 2.0), (' '.join(right), 2.0), (' '.join(wrong), 0.6), (expl, 1.0)]


def classify(rec):
    segs = segments(rec)
    best, bestscore, scores = None, 0.0, {}
    for topic, dom, keys in COMPILED:
        total = 0.0
        for text, mult in segs:
            if not text:
                continue
            for rx, w in keys:
                if rx.search(text):
                    total += w * mult
        if total:
            scores[topic] = round(total, 1)
        if total > bestscore:
            best, bestscore = (topic, dom), total
    return best, bestscore, scores


if __name__ == '__main__':
    recs = json.load(open('built.json', encoding='utf8'))
    unmatched = []
    dist = collections.Counter()
    for r in recs:
        best, score, _ = classify(r)
        if best is None or score < 6:
            unmatched.append(r)
            r['topic'], r['domain'] = None, None
        else:
            r['topic'], r['domain'] = best
            dist[best[0]] += 1
    print('classified:', len(recs) - len(unmatched), '/ unmatched:', len(unmatched))
    print('domains:', collections.Counter(r['domain'] for r in recs if r['domain']))
    print('topics with 0:', [t for t, d, _ in RULES if dist[t] == 0])
    for t, d, _ in RULES:
        print('  %-18s %-4s %d' % (t, d, dist[t]))
    json.dump(recs, open('classified.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    json.dump([{'qn': r['qn'], 'q': ' '.join(r['question'])[:160]} for r in unmatched],
              open('unmatched.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)

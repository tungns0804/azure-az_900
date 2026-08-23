"""Đối chiếu đáp án rút từ slide với bộ đề CertyIQ (nguồn độc lập)."""
import json, re, difflib

def norm(s):
    s = s.lower().replace('\u2011', '-')
    s = re.sub(r'[^a-z0-9 ]+', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

# ---- CertyIQ ----
cq = []
for row in json.load(open('xlsx.json', encoding='utf8')):
    a = row['a'].strip()
    if not re.fullmatch(r'[A-E]', a):
        continue
    lines = [l.strip() for l in row['q'].split('\n')]
    opts, stem = {}, []
    for l in lines:
        m = re.match(r'^([A-E])\.\s+(.*)$', l)
        if m:
            opts[m.group(1)] = m.group(2).strip()
        elif not opts:
            stem.append(l)
    if a in opts and len(opts) >= 2:
        cq.append({'n': row['n'], 'stem': ' '.join(stem), 'opts': opts, 'a': a})
print('CertyIQ usable:', len(cq))

# ---- bản rút từ slide ----
mine = [r for r in json.load(open('built.json', encoding='utf8'))
        if r['type'] in ('single', 'multi') and r['options']]
print('slide MCQ:', len(mine))
idx = [(norm(' '.join(r['question'])), r) for r in mine]

agree = disagree = nomatch = 0
bad = []
for c in cq:
    key = norm(c['stem'])
    if len(key) < 30:
        continue
    best, bs = None, 0.0
    for k, r in idx:
        s = difflib.SequenceMatcher(None, key, k).ratio()
        if s > bs:
            bs, best = s, r
    if bs < 0.80:
        nomatch += 1
        continue
    want = norm(c['opts'][c['a']])
    got = [norm(o['t']) for o in best['options'] if o['c']]
    hit = any(difflib.SequenceMatcher(None, want, g).ratio() > 0.72 or want in g or g in want
              for g in got)
    if hit:
        agree += 1
    else:
        disagree += 1
        bad.append({'certy': c['n'], 'sim': round(bs, 2), 'qn': best['qn'],
                    'stem': c['stem'][:150], 'want': c['opts'][c['a']],
                    'got': [o['t'] for o in best['options'] if o['c']],
                    'all': [o['t'] for o in best['options']]})
print('matched & agree   :', agree)
print('matched & DISAGREE:', disagree)
print('no match          :', nomatch)
json.dump(bad, open('disagree.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)

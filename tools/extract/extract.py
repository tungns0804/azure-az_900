"""Rút câu hỏi AZ-900 từ bộ slide PDF của The Tech BlackBoard.

Đáp án đúng trong slide được đánh dấu bằng hình vẽ vector, không phải chữ:
  * ô viền nét đứt màu hổ phách (1, .753, 0)  -> bọc đáp án đúng của câu trắc nghiệm
  * dấu tích tô màu xanh lá (0, .69, .314)    -> ô Yes/No được chọn trong câu dạng bảng
Nhờ vậy đáp án đọc được bằng máy, không phải đoán từ phần giải thích.
"""
import fitz, re, json, collections
from lib import SRC, amber, green, lines_of, part_of, callouts

doc = fitz.open(SRC)
QMARK = re.compile(r'^Q(\d+)\s*:\s*(.*)$', re.S)
LETTER_ONLY = re.compile(r'^([a-h])\)\s*$')
LETTER_TEXT = re.compile(r'^([a-h])\)\s+(\S.*)$', re.S)

def mid(b):        return ((b[0]+b[2])/2, (b[1]+b[3])/2)
def inside(b, r):  # tâm dòng chữ nằm trong ô đánh dấu
    cx, cy = mid(b)
    return r.x0-2 <= cx <= r.x1+2 and r.y0-2 <= cy <= r.y1+2

def build_options(ls, region):
    """Ghép chữ cái 'a)' với phần chữ đi kèm -> [(letter, text, bbox)].

    Phần chữ của đáp án nằm ở dòng riêng, ngay bên phải chữ cái, và đáy của nó
    thường trùng đúng đỉnh của chữ cái kế tiếp — nên phải so theo TÂM dòng chứ
    không so theo đáy, nếu không mọi đáp án đều bị loại.
    """
    letters = []
    for l in ls:
        s = l['t'].strip()
        m = LETTER_ONLY.match(s)
        if m:
            letters.append([m.group(1), l, None])
            continue
        m = LETTER_TEXT.match(s)
        if m:
            letters.append([m.group(1), l, m.group(2)])
    if not letters:
        return []
    letters.sort(key=lambda x: x[1]['bbox'][1])
    used = {id(x[1]) for x in letters}
    out = []
    for i, (ch, lin, inline) in enumerate(letters):
        lb = lin['bbox']
        band0 = lb[1] - 8
        if i + 1 < len(letters):
            band1 = letters[i + 1][1]['bbox'][1] - 8
        else:
            band1 = lb[3] + (lb[3] - lb[1]) * 1.6
        txt = [inline] if inline is not None else []
        bb = list(lb)
        for l in ls:
            if id(l) in used:
                continue
            b = l['bbox']
            cy = (b[1] + b[3]) / 2
            if not (band0 <= cy < band1):
                continue
            if b[0] < (lb[0] - 4 if inline is not None else lb[0] + 8):
                continue
            if abs(l['sz'] - lin['sz']) > 1.2:
                continue
            txt.append(l['t'])
            bb = [min(bb[0], b[0]), min(bb[1], b[1]), max(bb[2], b[2]), max(bb[3], b[3])]
        if txt:
            out.append((ch, collapse(' '.join(txt)), tuple(bb)))
    return out

def collapse(s):
    return re.sub(r'\s+', ' ', s).strip()

records, problems = [], []
for pno in range(doc.page_count):
    page = doc[pno]
    ls = lines_of(page)
    dr = page.get_drawings()
    ambers = [d['rect'] for d in dr if amber(d)]
    cos = callouts(page)
    greens = [d['rect'] for d in dr if green(d)]
    part = part_of(page)

    marks = []
    for l in ls:
        m = QMARK.match(l['t'].strip())
        if m: marks.append((int(m.group(1)), l, m.group(2)))
    if not marks: continue
    marks.sort(key=lambda x: x[1]['bbox'][1])

    for i, (qn, lin, rest) in enumerate(marks):
        top = lin['bbox'][1] - 4
        bot = marks[i+1][1]['bbox'][1] - 4 if i+1 < len(marks) else 1e9
        region = [l for l in ls if l['bbox'][1] >= top and l['bbox'][3] <= bot + 30
                  and not (l is not lin and QMARK.match(l['t'].strip()))]
        ram = [r for r in ambers if top <= (r.y0+r.y1)/2 <= bot]
        rgr = [r for r in greens if top <= (r.y0+r.y1)/2 <= bot]
        records.append(dict(pno=pno, qn=qn, part=part, head=rest, headbox=lin['bbox'],
                            callouts=[c for c in cos if top <= (c.y0+c.y1)/2 <= bot],
                            lines=region, ambers=ram, greens=rgr, top=top, bot=bot))

print('regions:', len(records))
qs = collections.Counter(r['qn'] for r in records)
print('duplicate q numbers:', [k for k, v in qs.items() if v > 1][:20])
print('distinct:', len(qs), 'range', min(qs), max(qs))
missing = [n for n in range(1, max(qs)+1) if n not in qs]
print('missing:', len(missing), missing)
json.dump({'n': len(records)}, open('_x.json', 'w'))

# ---------------------------------------------------------------- phân loại
def classify(r):
    ls, ram, rgr = r['lines'], r['ambers'], r['greens']
    opts = build_options([l for l in ls if l is not None], r)
    tf  = [l for l in ls if collapse(l['t']) in ('True', 'False')]
    yn  = [l for l in ls if collapse(l['t']) in ('Yes', 'No')]
    ynhdr = [l for l in ls if collapse(l['t']) in ('Yes', 'No') and l['bbox'][1] < r['top'] + 40]
    if rgr and opts:                       return 'table', opts, tf, yn
    if opts and ram:                       return 'mcq', opts, tf, yn
    if len(tf) >= 2 and ram:               return 'tf', opts, tf, yn
    if len(yn) >= 2 and ram:               return 'yn', opts, tf, yn
    return 'other', opts, tf, yn

kinds = collections.Counter()
for r in records:
    k, opts, tf, yn = classify(r)
    r['kind'], r['opts'], r['tf'], r['yn'] = k, opts, tf, yn
    kinds[k] += 1
print(kinds)
print('other pages:', [r['pno'] for r in records if r['kind'] == 'other'][:40])

# ---------------------------------------------------------------- đáp án
def hit(bbox, rects):
    return any(inside(bbox, r) for r in rects)


def split_groups(opts, ambers):
    """Vài slide xếp hai danh sách a)-e) chồng lên nhau (danh sách nêu trong đề rồi
    mới tới danh sách đáp án). Tách theo chỗ chữ cái quay lại 'a)', chỉ giữ nhóm có
    ô đánh dấu; nếu ô đánh dấu nằm rải ở nhiều nhóm thì bỏ câu cho chắc."""
    groups, cur = [], []
    for o in opts:
        if cur and o[0] <= cur[-1][0]:
            groups.append(cur); cur = []
        cur.append(o)
    if cur:
        groups.append(cur)
    if len(groups) == 1:
        return groups[0]
    hits = [g for g in groups if any(hit(o[2], ambers) for o in g)]
    return hits[0] if len(hits) == 1 else None

def question_text(r, cut_y):
    out = []
    for l in r['lines']:
        if l['bbox'][3] <= cut_y + 2:
            t = collapse(l['t'])
            if t: out.append(t)
    if out: out[0] = re.sub(r'^Q\d+\s*:\s*', '', out[0])
    return out

def explain_text(r, from_y):
    """Gom chữ còn lại thành các đoạn.

    Slide hay xếp phần giải thích thành nhiều cột / nhiều khung. Nếu chỉ sắp xếp
    theo trục y thì chữ của hai cột cạnh nhau sẽ đan xen nhau, nên trước hết gom
    theo khung viền có sẵn trên slide, phần còn lại mới gom theo khoảng cách.
    """
    rows = [l for l in r['lines'] if l['bbox'][1] >= from_y - 2]
    boxes = [b for b in r.get('callouts', []) if b.y1 >= from_y - 2]
    blocks, taken = [], set()
    for b in sorted(boxes, key=lambda b: (round(b.y0), b.x0)):
        got = []
        for l in rows:
            if id(l) in taken:
                continue
            cx = (l['bbox'][0] + l['bbox'][2]) / 2
            cy = (l['bbox'][1] + l['bbox'][3]) / 2
            if b.x0 - 3 <= cx <= b.x1 + 3 and b.y0 - 3 <= cy <= b.y1 + 3:
                got.append(l)
        if len(got) >= 2:
            got.sort(key=lambda l: (round(l['bbox'][1], 1), l['bbox'][0]))
            for l in got:
                taken.add(id(l))
            blocks.append((min(l['bbox'][1] for l in got), [collapse(l['t']) for l in got]))

    rest = [l for l in rows if id(l) not in taken]
    rest.sort(key=lambda l: (round(l['bbox'][1], 1), l['bbox'][0]))
    cur, lasty, lastx, lastsz, top = [], None, None, None, None
    for l in rest:
        t = collapse(l['t'])
        if not t:
            continue
        if lasty is not None and (l['bbox'][1] - lasty > lastsz * 1.9
                                  or abs(l['bbox'][0] - lastx) > 130
                                  or abs(l['sz'] - lastsz) > 3):
            if cur:
                blocks.append((top, cur))
                cur = []
        if not cur:
            top = l['bbox'][1]
        cur.append(t)
        lasty, lastx, lastsz = l['bbox'][1], l['bbox'][0], l['sz']
    if cur:
        blocks.append((top, cur))
    blocks.sort(key=lambda x: x[0])
    return [b for _, b in blocks]

built, bad = [], []
for r in records:
    k = r['kind']
    rec = dict(qn=r['qn'], pno=r['pno'], part=r['part'], type=None,
               question=[], options=[], subs=[], explanation=[])
    if k == 'mcq':
        opts = split_groups(r['opts'], r['ambers'])
        if opts is None:
            bad.append((r['qn'], r['pno'], 'mcq-multi-group')); continue
        corr = [o for o in opts if hit(o[2], r['ambers'])]
        if not corr: bad.append((r['qn'], r['pno'], 'mcq-no-correct')); continue
        first_y = min(o[2][1] for o in opts); last_y = max(o[2][3] for o in opts)
        rec['type'] = 'multi' if len(corr) > 1 else 'single'
        rec['question'] = question_text(r, first_y)
        rec['options'] = [dict(k=o[0], t=o[1], c=o in corr) for o in opts]
        rec['explanation'] = explain_text(r, last_y)
    elif k in ('tf', 'yn'):
        pool = r['tf'] if k == 'tf' else r['yn']
        labels = ('True', 'False') if k == 'tf' else ('Yes', 'No')
        pool = [l for l in pool if collapse(l['t']) in labels]
        if len(pool) != 2: bad.append((r['qn'], r['pno'], k+'-pool%d' % len(pool))); continue
        pool.sort(key=lambda l: l['bbox'][0])
        corr = [i for i, l in enumerate(pool) if hit(l['bbox'], r['ambers'])]
        if len(corr) != 1: bad.append((r['qn'], r['pno'], k+'-corr%d' % len(corr))); continue
        first_y = min(l['bbox'][1] for l in pool); last_y = max(l['bbox'][3] for l in pool)
        rec['type'] = 'yesno'
        rec['question'] = question_text(r, first_y)
        rec['subs'] = [dict(prompt='', options=[collapse(l['t']) for l in pool], a=corr[0])]
        rec['explanation'] = explain_text(r, last_y)
    elif k == 'table':
        opts = r['opts']
        cols = sorted([l for l in r['lines'] if collapse(l['t']) in ('Yes', 'No')],
                      key=lambda l: l['bbox'][0])
        if len(cols) != 2: bad.append((r['qn'], r['pno'], 'table-cols')); continue
        subs, okk = [], True
        for o in opts:
            y0, y1 = o[2][1], o[2][3]
            picks = [g for g in r['greens'] if y0 - 22 <= (g.y0+g.y1)/2 <= y1 + 22]
            if len(picks) != 1: okk = False; break
            gx = (picks[0].x0 + picks[0].x1) / 2
            a = min(range(2), key=lambda i: abs(gx - (cols[i]['bbox'][0]+cols[i]['bbox'][2])/2))
            subs.append(dict(prompt=o[1], options=['Yes', 'No'], a=a))
        if not okk or not subs: bad.append((r['qn'], r['pno'], 'table-marks')); continue
        rec['type'] = 'yesno_table'
        qt = [t for t in question_text(r, min(o[2][1] for o in opts))
              if t and t not in ('Statement', 'Yes', 'No', 'Statements')]
        rec['question'] = qt or ['For each of the following statements, select Yes if the statement is true. '
                                 'Otherwise, select No.']
        rec['subs'] = subs
        rec['explanation'] = explain_text(r, max(o[2][3] for o in opts))
    else:
        bad.append((r['qn'], r['pno'], 'unsupported')); continue
    built.append(rec)

print('built:', len(built))
print('bad:', len(bad))
print(collections.Counter(b[2] for b in bad))
print(collections.Counter(b['type'] for b in built))
json.dump(built, open('built.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
json.dump(bad, open('bad.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)

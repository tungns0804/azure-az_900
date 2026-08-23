# -*- coding: utf-8 -*-
"""Chốt ngân hàng câu hỏi AZ-900: bỏ câu trùng, nhúng ảnh minh hoạ, xuất JSON cho app."""
import base64
import collections
import io
import json
import re

import fitz

from lib import SRC, lines_of

doc = fitz.open(SRC)
recs = json.load(open('classified.json', encoding='utf8'))

# ---------------------------------------------------------------- bỏ câu trùng
def dedupe_key(r):
    q = re.sub(r'[^a-z0-9]+', ' ', ' '.join(r['question']).lower()).strip()
    o = '|'.join(sorted(re.sub(r'[^a-z0-9]+', ' ', x['t'].lower()).strip() for x in r['options']))
    s = '|'.join(sorted(re.sub(r'[^a-z0-9]+', ' ', x['prompt'].lower()).strip() for x in r['subs']))
    return q + '##' + o + '##' + s


seen, kept, dropped = {}, [], 0
for r in sorted(recs, key=lambda x: x['qn']):
    k = dedupe_key(r)
    if k in seen:
        # giữ bản có phần giải thích, vì bản trùng thường là slide nhắc lại không kèm giải thích
        first = seen[k]
        if len(r['explanation']) > len(first['explanation']):
            kept[kept.index(first)] = r
            seen[k] = r
        dropped += 1
        continue
    seen[k] = r
    kept.append(r)
print('kept:', len(kept), 'dropped duplicates:', dropped)

# ---------------------------------------------------------------- ảnh minh hoạ
allb = collections.Counter()
for i in range(doc.page_count):
    for blk in doc[i].get_text('dict')['blocks']:
        if blk['type'] == 1:
            allb[tuple(round(v) for v in blk['bbox'])] += 1
deco = {k for k, v in allb.items() if v > 50}


def exhibit(pno):
    """Cắt vùng ảnh nội dung lớn nhất trên slide, trả về JPEG base64."""
    page = doc[pno]
    best = None
    for blk in page.get_text('dict')['blocks']:
        if blk['type'] != 1:
            continue
        bb = tuple(round(v) for v in blk['bbox'])
        if bb in deco:
            continue
        area = (bb[2] - bb[0]) * (bb[3] - bb[1])
        if area > 40000 and (best is None or area > best[0]):
            best = (area, bb)
    if not best:
        return None
    r = fitz.Rect(*best[1])
    pix = page.get_pixmap(clip=r, dpi=115)
    return base64.b64encode(pix.tobytes('jpeg', jpg_quality=72)).decode('ascii')


IMG_QNS = {91, 227, 369, 370, 621, 685, 692}


DEFAULT_TABLE_STEM = ('For each of the following statements, select Yes if the statement is true. '
                      'Otherwise, select No.')


def clean_stem(lines, qtype):
    """Bỏ những dòng chỉ chứa số hiệu câu.

    Vài slide dạng bảng đặt "Q189:" vào ô tiêu đề của bảng, và ô đó không phải lúc nào
    cũng là dòng đầu tiên theo thứ tự đọc, nên bước cắt tiền tố ở extract.py bỏ sót.
    Bỏ xong mà không còn dòng nào thì dùng câu dẫn chuẩn của dạng bảng Yes/No.
    """
    out = [t for t in lines if t.strip() and not re.fullmatch(r'Q\d+\s*:?', t.strip())]
    if not out and qtype in ('yesno_table', 'match'):
        return [DEFAULT_TABLE_STEM]
    return out


def merge_blocks(blocks):
    """Nối lại câu bị tách đôi thành hai khối.

    Slide xếp chữ theo khung, nên một câu dài đôi khi rơi vào hai khung khác nhau và
    bị tách thành hai khối. Dấu hiệu chắc chắn: khối trước không kết thúc bằng dấu câu
    và khối sau mở đầu bằng chữ thường — khi đó chúng vốn là một câu.
    """
    out = []
    for blk in blocks:
        text = ' '.join(blk).strip()
        if out and text[:1].islower():
            prev = ' '.join(out[-1]).strip()
            if prev and not re.search(r'[.?!:;]$', prev):
                out[-1] = out[-1] + blk
                continue
        out.append(list(blk))
    return out

# ---------------------------------------------------------------- xuất
out = []
for r in kept:
    q = {
        'id': r['qn'],
        'page': r['pno'] + 1,
        'part': r['part'],
        'type': r['type'],
        'question': clean_stem(r['question'], r['type']),
        'options': r['options'],
        'subs': r['subs'],
        'explanation': merge_blocks(r['explanation']),
        'img': None,
        'imgq': exhibit(r['pno']) if r['qn'] in IMG_QNS else None,
        'topic': r['topic'],
        'domain': r['domain'],
    }
    out.append(q)

out.sort(key=lambda x: x['id'])
json.dump(out, io.open('az900-data.json', 'w', encoding='utf8'), ensure_ascii=False)

print('types  :', collections.Counter(x['type'] for x in out))
print('domains:', collections.Counter(x['domain'] for x in out))
print('with exhibit image:', sum(1 for x in out if x['imgq']))
print('with explanation  :', sum(1 for x in out if x['explanation']))
print('id range:', out[0]['id'], '-', out[-1]['id'])

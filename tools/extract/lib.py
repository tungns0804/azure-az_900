import fitz, re
SRC = r'C:/Users/Admin/Downloads/AZ-900/TheTechBlackBoard-AZ-900_Latest-765Questions (1).pdf'

def amber(d):
    c = d.get('color')
    return bool(d.get('dashes') and d['dashes'].strip() not in ('[] 0', '') and c
                and abs(c[0]-1.0) < .08 and abs(c[1]-0.753) < .12 and c[2] < .15)

def green(d):
    f = d.get('fill')
    return bool(d['type'] == 'f' and f and f[0] < .25 and .55 < f[1] < .85 and f[2] < .45
                and (d['rect'].width < 90 and d['rect'].height < 60))

def lines_of(page):
    """text lines with bbox/size/colour, title + watermark removed"""
    out = []
    for b in page.get_text('dict')['blocks']:
        if b['type'] != 0:
            continue
        for l in b['lines']:
            t = ''.join(s['text'] for s in l['spans'])
            if not t.strip():
                continue
            x0, y0, x1, y1 = l['bbox']
            sp = l['spans'][0]
            if y1 < 36:                      # slide title bar
                continue
            if 'The Tech BlackBoard' in t or t.strip() in ('Blackboard', 'The Tech'):
                continue
            out.append({'t': t, 'bbox': (x0, y0, x1, y1), 'sz': sp['size'],
                        'col': sp['color'], 'font': sp['font']})
    out.sort(key=lambda r: (round(r['bbox'][1], 1), r['bbox'][0]))
    return out

def part_of(page):
    m = re.search(r'Part\s+(\d+)', page.get_text())
    return int(m.group(1)) if m else 0


def callouts(page):
    """Khung viền bao quanh một khối giải thích trên slide (xanh dương / trắng / xám)."""
    out = []
    for d in page.get_drawings():
        r = d['rect']
        if d['type'] == 'f' or r.width < 60 or r.height < 24:
            continue
        c = d.get('color')
        if not c:
            continue
        if amber(d):
            continue
        blueish = c[0] < .3 and c[1] > .5 and c[2] > .7
        pale = min(c) > .55
        if blueish or pale:
            out.append(r)
    return out

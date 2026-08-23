# AZ-900 Practice — Angular

Ứng dụng luyện thi **AZ-900: Microsoft Azure Fundamentals**. Cùng cấu trúc và cách triển khai với
bản [AI-900 Practice](https://tungns0804.github.io/azure-ai_900/): hai màn hình **Luyện thi** và
**Học kiến thức**, giao diện **song ngữ Việt / Anh**, lưu tiến độ ngay trên trình duyệt.

**Bản chạy trực tiếp:** https://tungns0804.github.io/azure-az_900/

## Chạy

```bash
npm install
npm start            # http://localhost:4200
npm run build        # bản production -> dist/az900-app
npm run build:data   # sinh lại public/az900-extra.json và public/az900-vi.json từ data/
```

## Hai màn hình

| Màn hình | Nội dung |
|---|---|
| **Luyện thi** | Làm bài, chấm điểm, ⭐ yêu thích, lịch sử phiên, xuất/nhập JSON, phím tắt |
| **Học kiến thức** | 4 phần × 15 nhóm × 61 chủ đề theo đề cương chính thức, mỗi chủ đề có mô tả tổng quan + link Microsoft Learn và nút **Thi phần này / Thi chủ đề này** |

Chuyển màn hình bằng hai tab ở thanh trên. Ô **Phạm vi ôn tập** ở thanh bên lọc câu hỏi theo phần
thi hoặc theo chủ đề; bộ lọc này kết hợp được với các chế độ **Toàn bộ / Yêu thích / Cần ôn lại /
Chưa làm**.

## Ngân hàng câu hỏi

Nguồn gốc: bộ slide PDF **The Tech BlackBoard — AZ-900, 765 câu**.

### Cách rút dữ liệu từ PDF

Slide **không ghi đáp án bằng chữ** — đáp án đúng được đánh dấu bằng hình vẽ vector:

* ô viền **nét đứt màu hổ phách** `(1, 0.753, 0)` bọc quanh đáp án đúng của câu trắc nghiệm;
* **dấu tích màu xanh lá** `(0, 0.69, 0.314)` nằm trong cột Yes hoặc No của câu dạng bảng.

Vì vậy đáp án đọc được **bằng máy** thay vì phải đoán từ phần giải thích. Toàn bộ pipeline nằm
trong [`tools/extract/`](tools/extract/) (Python + PyMuPDF):

| File | Việc |
|---|---|
| `lib.py` | nhận diện ô đánh dấu, đọc dòng chữ kèm toạ độ |
| `extract.py` | cắt slide thành từng câu, ghép chữ cái `a)` với nội dung đáp án, dò ô đánh dấu, gom phần giải thích theo khung trên slide |
| `classify_topics.py` | gán mỗi câu vào một chủ đề trong đề cương (chấm điểm theo từ khoá, đề bài và đáp án đúng có trọng số cao hơn đáp án sai) |
| `finalize.py` | bỏ câu trùng, nối lại câu bị tách đôi, nhúng ảnh minh hoạ, xuất `public/az900-data.json` |
| `crosscheck.py` | đối chiếu đáp án với bộ đề CertyIQ (nguồn độc lập) để kiểm tra chéo |

Kết quả: **765 câu trên slide → 729 câu đọc được đáp án → 662 câu sau khi bỏ trùng.**

36 câu bị bỏ là dạng slide không đọc được bằng máy (đáp án nằm trong ảnh chụp màn hình, hoặc một
slide chứa nhiều bảng đáp án chồng nhau) — bỏ hẳn còn hơn đưa vào một đáp án đoán sai.

### Kiểm tra chéo đáp án

`crosscheck.py` ghép câu hỏi với bộ đề CertyIQ 474 câu bằng độ tương đồng văn bản rồi so đáp án:
**61 câu khớp và trùng đáp án, 9 câu lệch**. Cả 9 câu lệch đã mở slide gốc xem lại bằng mắt —
bản rút dữ liệu **đúng với slide** trong cả 9 trường hợp; chênh lệch là do hai bộ đề vốn khác nhau
(khác danh sách đáp án, hoặc chính slide gốc chọn đáp án gây tranh cãi).

> **Lưu ý:** đây là bộ đề luyện tập của bên thứ ba, không phải đề thi thật. Vài câu trong slide có
> đáp án đáng ngờ. Ứng dụng cố tình giữ **đúng nguyên đáp án của slide** thay vì tự sửa; hãy đối
> chiếu với tài liệu Microsoft Learn trong màn hình **Học kiến thức** khi thấy nghi ngờ.

### Câu hỏi bổ sung

12 chủ đề trong đề cương chính thức **không có câu nào** trong bộ slide gốc (Zero Trust, defense in
depth, Microsoft Purview, private endpoint, AzCopy / File Sync, hệ thống phân cấp tài nguyên…).
Ứng dụng biên soạn thêm **66 câu bổ sung** bám sát **Skills measured**, mỗi câu đều có giải thích
và bản dịch tiếng Việt. Sau khi bổ sung, **mọi chủ đề trong đề cương đều có câu hỏi**.

#### Dấu hiệu nhận biết câu bổ sung

| Nơi hiển thị | Dấu hiệu |
|---|---|
| Số hiệu câu | Câu gốc **1–765**, câu bổ sung **từ 1001 trở lên** |
| Thẻ câu hỏi | Nhãn tím **★ BỔ SUNG** cạnh số câu, viền trái tím, kèm ghi chú nguồn gốc |
| Lưới câu hỏi ở thanh bên | Ô viền **nét đứt** tím + góc tam giác tím (có mục trong chú thích) |
| Phạm vi ôn tập | Mục riêng **★ Chỉ câu bổ sung (66 câu)** và **Chỉ câu gốc từ PDF (662 câu)** |
| Màn hình Học kiến thức | Nhãn `★n` ở mỗi chủ đề, nhãn `n BỔ SUNG` ở mỗi phần thi |
| Dữ liệu | Trường `extra: true`, nằm ở file riêng `public/az900-extra.json` |

### Phân bố

| Phần thi | Tỉ trọng đề thi | Câu gốc | Bổ sung | Tổng |
|---|---|---|---|---|
| d1 — Khái niệm điện toán đám mây | 25–30% | 142 | 21 | 163 |
| d2 — Kiến trúc và dịch vụ Azure | 35–40% | 341 | 29 | 370 |
| d3 — Quản lý và quản trị Azure | 30–35% | 122 | 13 | 135 |
| d4 — Chủ đề mở rộng *(ngoài đề cương)* | — | 57 | 3 | 60 |
| **Tổng** | | **662** | **66** | **728** |

**d4 không nằm trong đề thi hiện hành.** Bộ slide ra đời trước bản cập nhật đề cương nên còn giữ
gói hỗ trợ (support plan), vòng đời preview/GA, Cloud Adoption Framework, Azure DevOps và một nhóm
câu điểm danh dịch vụ Azure khác. Giữ lại vì vẫn giúp hiểu bức tranh chung, nhưng hãy ưu tiên ba
phần đầu.

Dạng câu: `single` 332 · `yesno` 336 · `multi` 37 · `yesno_table` 18 · `match` 5.

## Đa ngôn ngữ (Việt / Anh)

Hai công tắc độc lập ở thanh trên:

* **VI / EN** — đổi ngôn ngữ của *toàn bộ giao diện*: nút, nhãn, thông báo, tên chủ đề và mô tả
  trong màn hình Học kiến thức. Lựa chọn được lưu cùng các thiết lập khác.
* **Song ngữ: Bật / Tắt** — hiện bản dịch tiếng Việt của *nội dung câu hỏi* ngay dưới bản tiếng Anh
  (đề thi thật ra đề bằng tiếng Anh nên phần câu hỏi luôn giữ nguyên bản gốc).

Bản dịch tiếng Việt của **cả 728 câu** (đề bài, đáp án, các dòng con và phần giải thích) được đóng gói
sẵn trong `public/az900-vi.json` nên chạy **hoàn toàn offline**, không cần mạng và
không cần API key. Đường gọi API dịch vẫn còn nhưng **mặc định tắt**; ai muốn cắm proxy backend
riêng thì đặt `window.AZ900_TRANSLATE_ENDPOINT` trước khi ứng dụng khởi động. **Đừng** đặt API key
trong mã chạy ở trình duyệt.

## Giao diện nền sáng

Mặc định là **nền sáng**, bảng màu dựng lại cho dễ đọc lâu:

* nền xanh-xám rất nhạt `#eef3f8` thay cho trắng tinh — bớt chói khi đọc nhiều câu liên tục;
* màu chữ đạt tương phản **AA** của WCAG: `--ink` 15.8:1, `--ink2` 8.2:1, `--ink3` 4.8:1 trên panel;
* màu nhấn đổi từ vàng hổ phách sang **xanh Azure** `#0f6cbd` — vàng trên nền trắng gần như không
  đọc được, còn xanh vừa rõ vừa đúng tinh thần Azure;
* thêm viền và nền hover riêng cho nền sáng, vì panel trắng nằm trên nền trắng ngà sẽ mất đường
  phân cách nếu chỉ dựa vào bóng đổ.

Nút **Nền tối** ở thanh trên đổi sang bảng màu tối; lựa chọn được ghi nhớ.

## Cấu trúc

```
public/az900-data.json      662 câu gốc rút từ PDF — KHÔNG chỉnh tay, sinh lại bằng tools/extract/
public/az900-extra.json     66 câu bổ sung          } sinh ra từ data/, đừng sửa trực tiếp
public/az900-vi.json        bản dịch tiếng Việt      }
data/extra-*.mjs            NGUỒN song ngữ của câu bổ sung (Anh + Việt cạnh nhau)
data/vi-original-*.mjs      NGUỒN bản dịch tiếng Việt cho 662 câu gốc (12 file)
tools/build-data.mjs        kiểm tra tính hợp lệ rồi sinh hai file JSON trong public/
tools/extract/              pipeline Python rút câu hỏi từ PDF (xem bảng ở trên)
src/app/core/categories.ts  danh mục 4 phần / 15 nhóm / 61 chủ đề + mô tả + link Microsoft Learn
src/app/core/categories.en.ts  bản tiếng Anh của tiêu đề và mô tả chủ đề
src/fonts.css               @font-face nhúng base64 (InterVar, PlexMono)
src/base.css                CSS gốc + bảng màu nền sáng đã dựng lại
src/app/core/
  i18n.ts                   từ điển [tiếng Việt, tiếng Anh] cho toàn bộ giao diện
  i18n.service.ts           signal ngôn ngữ + hàm t() thay thế {tham số}
  models.ts                 kiểu dữ liệu câu hỏi, tiến độ, phiên, lịch sử
  text.util.ts              flow() nối dòng ngắt từ PDF, shuffle(), fmtDate()
  storage.service.ts        lưu trữ 3 tầng: window.storage (Claude) -> localStorage -> bộ nhớ tạm
  quiz.service.ts           toàn bộ trạng thái + chấm điểm + phiên + xuất/nhập (signals)
  translate.service.ts      tra bản dịch kèm sẵn, tuỳ chọn gọi API nếu có endpoint
  toast.service.ts          thông báo nổi
src/app/components/
  sidebar.ts                phạm vi ôn tập, chế độ, tuỳ chọn, lưới câu hỏi, lịch sử, nút dữ liệu
  question-card.ts          thẻ câu hỏi cho cả 5 dạng + giải thích + ảnh + nhãn BỔ SUNG
  study.ts                  màn hình Học kiến thức
  vi-box.ts                 khối bản dịch tiếng Việt
src/app/app.ts / app.html   khung ứng dụng: thanh trên, thanh dưới, hộp thoại, phím tắt
```

### Thêm câu hỏi mới

1. Mở một file trong `data/` (hoặc tạo `data/extra-<tên>.mjs` mới, export default một mảng).
2. Thêm câu hỏi theo mẫu song ngữ: `q/o/e` là tiếng Anh, `vq/vo/ve` là bản dịch tiếng Việt;
   câu dạng bảng dùng `subs` / `vsubs`. `id` phải từ 1001 trở lên và không trùng.
3. Chạy `npm run build:data`. Script kiểm tra id trùng, chủ đề lạ, số đáp án đúng, và số phần tử
   giữa bản Anh với bản Việt — sai ở đâu là dừng và báo rõ, không ghi file hỏng vào `public/`.

### Sinh lại ngân hàng câu hỏi gốc

```bash
cd tools/extract
python extract.py          # -> built.json
python classify_topics.py  # -> classified.json
python finalize.py         # -> az900-data.json
```

Cần `pymupdf` và đường dẫn tới file PDF gốc trong `lib.py`.

## Phím tắt

| Phím | Việc |
|---|---|
| `1`–`9` | chọn đáp án |
| `Enter` | kiểm tra đáp án / sang câu sau khi đã chấm |
| `F` | đánh dấu ⭐ yêu thích |
| `←` `→` | chuyển câu |

## Lưu trữ

Tiến độ lưu dưới khoá `az900:data:v1`, bản dịch tải thêm lưu dưới `az900:vi:v1`. Ba tầng dự phòng:
`window.storage` (khi chạy trong Claude artifact) → `localStorage` → bộ nhớ tạm trong phiên.
Nút **Xuất JSON** tạo bản sao lưu mang theo được.

## Triển khai

Mỗi lần đẩy lên nhánh `main`, workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
sẽ chạy `npm ci` → `npm run build:data` → build production với
`--base-href /azure-az_900/` rồi đẩy thư mục `dist/az900-app/browser` sang nhánh `gh-pages` —
đây là nhánh GitHub Pages đang phục vụ. Không cần thao tác tay.

Lần đầu tiên cần bật Pages một lần trong repo:
**Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / `(root)`**.

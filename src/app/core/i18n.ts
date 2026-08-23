/**
 * Từ điển đa ngôn ngữ cho toàn bộ giao diện.
 * Mỗi khoá là một cặp [tiếng Việt, tiếng Anh]; chỗ cần chèn số/chữ dùng {tên}.
 *
 * Bilingual dictionary for the whole UI.
 * Every key holds a [Vietnamese, English] pair; placeholders use {name}.
 */
export type Lang = 'vi' | 'en';

export const STRINGS = {
  /* ---------- chung / common ---------- */
  'app.title': ['AZ-900 Practice', 'AZ-900 Practice'],
  'app.subtitle': ['{n} câu · The Tech BlackBoard', '{n} questions · The Tech BlackBoard'],
  'app.menu': ['☰ Danh sách', '☰ Menu'],
  'common.questions': ['{n} câu', '{n} questions'],
  'common.close': ['Đóng', 'Close'],
  'common.cancel': ['Huỷ', 'Cancel'],
  'common.clearFilter': ['Bỏ lọc', 'Clear filter'],
  'common.empty': ['Danh sách trống.', 'The list is empty.'],

  /* ---------- thanh trên / topbar ---------- */
  'view.group': ['Màn hình', 'Screen'],
  'view.practice': ['Luyện thi', 'Practice'],
  'view.study': ['Học kiến thức', 'Study'],
  'top.done': ['Đã làm', 'Answered'],
  'top.ok': ['Đúng', 'Correct'],
  'top.no': ['Sai', 'Wrong'],
  'top.rate': ['Tỉ lệ', 'Accuracy'],
  'top.sizeGroup': ['Cỡ chữ', 'Text size'],
  'top.sizeDown': ['Giảm cỡ chữ', 'Smaller text'],
  'top.sizeUp': ['Tăng cỡ chữ', 'Larger text'],
  'top.langGroup': ['Ngôn ngữ giao diện', 'Interface language'],
  'top.langHint': [
    'Đổi ngôn ngữ toàn bộ giao diện (Việt / Anh)',
    'Switch the whole interface language (Vietnamese / English)',
  ],
  'top.viOn': ['Song ngữ: Bật', 'Bilingual: On'],
  'top.viOff': ['Song ngữ: Tắt', 'Bilingual: Off'],
  'top.viHint': [
    'Hiện bản dịch tiếng Việt ngay dưới nội dung tiếng Anh',
    'Show the Vietnamese translation under the English text',
  ],
  'top.themeLight': ['Nền sáng', 'Light theme'],
  'top.themeDark': ['Nền tối', 'Dark theme'],

  /* ---------- phạm vi / scope ---------- */
  'nav.prev': ['Câu trước', 'Previous'],
  'nav.next': ['Câu sau', 'Next'],

  'scope.label': ['Phạm vi', 'Scope'],
  'scope.title': ['Phạm vi ôn tập', 'Study scope'],
  'scope.all': ['Toàn bộ đề thi ({n} câu)', 'Entire question bank ({n} questions)'],
  'scope.extra': ['★ Chỉ câu bổ sung', '★ Supplementary only'],
  'scope.extraOpt': ['★ Chỉ câu bổ sung ({n} câu)', '★ Supplementary only ({n} questions)'],
  'scope.origin': ['Ngân hàng gốc (PDF)', 'Original bank (PDF)'],
  'scope.originOpt': ['Chỉ câu gốc từ PDF ({n} câu)', 'Original PDF questions only ({n})'],
  'scope.wholeDomain': ['▸ Cả phần này ({n} câu)', '▸ This whole domain ({n} questions)'],
  'scope.set': ['Phạm vi: {name} · {n} câu', 'Scope: {name} · {n} questions'],
  'scope.cleared': [
    'Đã bỏ lọc — ôn toàn bộ {n} câu.',
    'Filter cleared — practising all {n} questions.',
  ],

  /* ---------- chế độ / modes ---------- */
  'mode.title': ['Chế độ luyện tập', 'Practice mode'],
  'mode.all': ['Toàn bộ', 'All'],
  'mode.fav': ['Yêu thích ⭐', 'Favourites ⭐'],
  'mode.favShort': ['Yêu thích', 'Favourites'],
  'mode.review': ['Cần ôn lại', 'Needs review'],
  'mode.todo': ['Chưa làm', 'Not attempted'],

  /* ---------- tuỳ chọn / options ---------- */
  'opt.title': ['Tuỳ chọn', 'Options'],
  'opt.shuffleQ': ['Trộn thứ tự câu hỏi', 'Shuffle question order'],
  'opt.shuffleO': ['Trộn thứ tự đáp án', 'Shuffle answer order'],
  'opt.autoNext': ['Tự sang câu sau khi trả lời đúng', 'Auto-advance after a correct answer'],

  /* ---------- danh sách câu / question list ---------- */
  'list.title': ['Danh sách câu hỏi', 'Question list'],
  'list.jumpPlaceholder': ['Tới câu số…', 'Go to question no.…'],
  'list.jump': ['Tới', 'Go'],
  'list.jumpAria': ['Tới câu số', 'Go to question number'],
  'list.cell': ['Câu {id}', 'Question {id}'],
  'list.cellExtra': ['Câu bổ sung {id}', 'Supplementary question {id}'],
  'legend.ok': ['Đúng', 'Correct'],
  'legend.no': ['Sai', 'Wrong'],
  'legend.sh': ['Đã xem đáp án', 'Answer revealed'],
  'legend.extra': ['Câu bổ sung', 'Supplementary'],

  /* ---------- lịch sử / history ---------- */
  'hist.title': ['Lịch sử luyện tập', 'Practice history'],
  'hist.running': ['Phiên đang chạy · {mode}', 'Session in progress · {mode}'],
  'hist.startedAt': ['Bắt đầu {time}', 'Started {time}'],
  'hist.detail': ['{time} · {ok}/{total} đúng', '{time} · {ok}/{total} correct'],
  'hist.shownExtra': [' · {n} xem đáp án', ' · {n} revealed'],
  'hist.none': [
    'Chưa có lịch sử. Kết thúc một phiên để lưu lại.',
    'No history yet. End a session to save one.',
  ],
  'hist.end': ['Kết thúc & lưu phiên', 'End & save session'],

  /* ---------- dữ liệu / data ---------- */
  'data.title': ['Dữ liệu', 'Data'],
  'data.export': ['Xuất JSON', 'Export JSON'],
  'data.import': ['Nhập JSON', 'Import JSON'],
  'data.reset': ['Xoá tiến độ', 'Reset progress'],
  /** phần đầu tên file khi bấm Xuất JSON — ngày tháng được nối vào sau */
  'data.exportName': ['az900-tien-do-', 'az900-progress-'],
  'data.status': ['Trạng thái: {mode}', 'Storage: {mode}'],
  'store.memory': ['Không lưu được (chỉ trong phiên này)', 'Not persisted (this session only)'],
  'store.artifact': ['Đã lưu trong Claude', 'Saved in Claude'],
  'store.local': ['Đã lưu trên trình duyệt', 'Saved in this browser'],

  /* ---------- thẻ câu hỏi / question card ---------- */
  'card.num': ['CÂU {id}', 'Q{id}'],
  'card.part': ['PART {n}', 'PART {n}'],
  'card.slide': ['SLIDE {n}', 'SLIDE {n}'],
  'card.extra': ['★ BỔ SUNG', '★ SUPPLEMENTARY'],
  'card.extraHint': [
    'Câu bổ sung do ứng dụng biên soạn theo đề cương chính thức — không có trong bộ slide PDF gốc.',
    'Supplementary question written for this app from the official study guide — not part of the original PDF deck.',
  ],
  'card.fav': ['Đánh dấu yêu thích (phím F)', 'Mark as favourite (key F)'],
  'card.multiHint': ['Câu này có {n} đáp án đúng.', 'This question has {n} correct answers.'],
  'card.subHint': ['Chọn đáp án cho từng dòng bên dưới.', 'Pick an answer for every row below.'],
  'card.markRightPicked': ['Đúng · bạn chọn', 'Correct · your pick'],
  'card.markRight': ['Đáp án đúng', 'Correct answer'],
  'card.markPicked': ['Bạn chọn', 'Your pick'],
  'card.verdictOk': ['✓ Chính xác', '✓ Correct'],
  'card.verdictNo': ['✕ Chưa đúng', '✕ Not correct'],
  'card.verdictSh': [
    '◆ Bạn đã xem đáp án — câu này được xếp vào nhóm cần ôn lại',
    '◆ You revealed the answer — this question goes to the review list',
  ],
  'card.explain': ['Giải thích', 'Explanation'],
  'card.noExplain': [
    'Slide gốc không kèm phần giải thích cho câu này.',
    'The original slide has no explanation for this question.',
  ],
  'card.zoomHint': ['Bấm để phóng to', 'Click to enlarge'],
  'card.imgCap': [
    'Hình đính kèm của câu hỏi — bấm để phóng to.',
    'Exhibit for this question — click to enlarge.',
  ],
  'card.slideCap': [
    'Slide gốc từ PDF (có sẵn đáp án) — bấm để phóng to.',
    'Original PDF slide (answer included) — click to enlarge.',
  ],
  'card.imgAlt': ['Hình đính kèm câu {id}', 'Exhibit for question {id}'],
  'card.slideAlt': ['Slide gốc câu {id}', 'Original slide for question {id}'],
  'card.check': ['Kiểm tra đáp án', 'Check answer'],
  'card.reveal': ['Xem đáp án', 'Reveal answer'],
  'card.retry': ['Làm lại câu này', 'Try this question again'],
  'card.next': ['Câu tiếp theo →', 'Next question →'],
  'card.keysPick': ['chọn', 'pick'],
  'card.keysCheck': ['kiểm tra', 'check'],
  'card.keysFav': ['yêu thích', 'favourite'],
  'card.keysNext': ['câu sau', 'next'],
  'card.keysMove': ['chuyển câu', 'move'],
  'card.emptyMode': ['Không có câu hỏi nào trong chế độ {mode}.', 'No questions in {mode} mode.'],
  'card.emptyHint': [
    'Chọn “Toàn bộ” ở thanh bên, hoặc đánh dấu ⭐ ở các câu bạn muốn ôn lại.',
    'Pick “All” in the sidebar, or star ⭐ the questions you want to review.',
  ],

  /* ---------- loại câu hỏi / question types ---------- */
  'type.single': ['CHỌN 1 ĐÁP ÁN', 'SINGLE CHOICE'],
  'type.multi': ['CHỌN NHIỀU ĐÁP ÁN', 'MULTIPLE CHOICE'],
  'type.yesno': ['ĐÚNG / SAI', 'TRUE / FALSE'],
  'type.yesno_table': ['BẢNG YES / NO', 'YES / NO TABLE'],
  'type.match': ['GHÉP NỐI', 'MATCHING'],

  /* ---------- hộp dịch / translation box ---------- */
  'vi.busy': ['Đang dịch…', 'Translating…'],
  'vi.error': [
    'Chưa có bản dịch cho phần này ({err}).',
    'No translation available for this section ({err}).',
  ],
  'vi.missing': [
    'Câu này chưa có bản dịch tiếng Việt kèm sẵn.',
    'This question has no bundled Vietnamese translation yet.',
  ],
  'vi.badge': ['TIẾNG VIỆT', 'VIETNAMESE'],

  /* ---------- màn hình học / study screen ---------- */
  'study.roadmap': ['LỘ TRÌNH', 'ROADMAP'],
  'study.domains': ['4 PHẦN THI', '4 DOMAINS'],
  'study.topics': ['{n} CHỦ ĐỀ', '{n} TOPICS'],
  'study.guideLink': ['Đề cương gốc ↗', 'Official study guide ↗'],
  'study.intro': [
    'Danh sách dưới đây bám theo đề cương Skills measured chính thức của Microsoft cho kỳ thi AZ-900. Mỗi chủ đề có phần mô tả tổng quan và link tài liệu Microsoft để đọc chi tiết. Bấm “Thi phần này” để luyện đúng nhóm câu hỏi tương ứng.',
    'The outline below follows Microsoft’s official Skills measured study guide for AZ-900. Every topic has an overview plus links to Microsoft Learn. Press “Practise this domain” to drill exactly that group of questions.',
  ],
  'study.noteLabel': ['Lưu ý:', 'Note:'],
  'study.noteBefore': [
    'Đề thi AZ-900 chấm theo thang 1000 điểm, cần',
    'AZ-900 is scored out of 1000 and you need',
  ],
  'study.noteAfter': [
    'để đạt. Ba phần đầu là đề cương chính thức; phần “Chủ đề mở rộng” gồm những nội dung Microsoft đã bỏ khỏi đề cương nhưng vẫn còn trong bộ slide gốc.',
    'to pass. The first three domains are the official outline; the “Extended topics” domain holds material Microsoft has dropped from the study guide but which is still in the source deck.',
  ],
  'study.passMark': ['700/1000 điểm', '700 out of 1000'],
  'study.extraLabel': ['Câu bổ sung:', 'Supplementary questions:'],
  'study.extraNote': [
    'bộ slide gốc không phủ hết đề cương, nên ứng dụng biên soạn thêm {n} câu cho những chủ đề còn trống. Câu bổ sung mang số hiệu từ 1001 trở lên và luôn kèm nhãn tím “★ BỔ SUNG”.',
    'the original deck does not cover the whole outline, so this app adds {n} hand-written questions for the uncovered topics. Supplementary questions are numbered from 1001 up and always carry the violet “★ SUPPLEMENTARY” badge.',
  ],
  'study.practiceDomain': ['Thi phần này', 'Practise this domain'],
  'study.practiceTopic': ['Thi chủ đề này ({n})', 'Practise this topic ({n})'],
  'study.count': ['{n} CÂU', '{n} QUESTIONS'],
  'study.doneCount': ['ĐÃ LÀM {done}/{total}', 'DONE {done}/{total}'],
  'study.extraCount': ['{n} BỔ SUNG', '{n} SUPPLEMENTARY'],
  'study.noQuestions': [
    'Ngân hàng câu hỏi hiện tại không có câu nào cho phần này — hãy học qua các link tài liệu bên dưới.',
    'The question bank has nothing for this domain — study it through the links below.',
  ],
  'study.covTitle': [
    'Đúng {ok} · Sai {no} · Đã xem đáp án {sh} · Chưa làm {todo}',
    'Correct {ok} · Wrong {no} · Revealed {sh} · Not attempted {todo}',
  ],
  'study.zeroTopic': ['0 câu', '0 questions'],

  /* ---------- hộp thoại / dialogs ---------- */
  'dlg.zoomTitle': ['Hình đính kèm', 'Exhibit'],
  'dlg.zoomAlt': ['Hình đính kèm phóng to', 'Exhibit enlarged'],
  'dlg.importTitle': ['Nhập dữ liệu tiến độ', 'Import progress data'],
  'dlg.importBody': [
    'Chọn file JSON đã xuất trước đó, hoặc dán nội dung vào ô bên dưới.',
    'Pick a previously exported JSON file, or paste its content below.',
  ],
  'dlg.importOk': ['Nhập dữ liệu', 'Import'],
  'dlg.resetTitle': ['Xoá toàn bộ tiến độ?', 'Reset all progress?'],
  'dlg.resetBody': [
    'Thao tác này xoá câu yêu thích, kết quả từng câu và toàn bộ lịch sử luyện tập. Không thể hoàn tác. Nên bấm “Xuất JSON” trước nếu bạn muốn giữ lại.',
    'This clears your favourites, per-question results and the whole practice history. It cannot be undone. Export JSON first if you want a backup.',
  ],
  'dlg.resetKeep': ['Giữ lại', 'Keep it'],
  'dlg.resetOk': ['Xoá tất cả', 'Delete everything'],

  /* ---------- thông báo / toasts ---------- */
  'toast.pickAnswer': ['Hãy chọn đáp án trước.', 'Pick an answer first.'],
  'toast.pickAll': ['Hãy chọn đủ tất cả các ô.', 'Answer every row first.'],
  'toast.correctNext': [
    'Chính xác — sang câu tiếp theo.',
    'Correct — moving to the next question.',
  ],
  'toast.noSession': ['Chưa có phiên luyện tập nào đang chạy.', 'No practice session is running.'],
  'toast.emptySession': ['Phiên trống đã được huỷ.', 'The empty session was discarded.'],
  'toast.sessionSaved': [
    'Đã lưu phiên: {ok}/{total} câu đúng.',
    'Session saved: {ok}/{total} correct.',
  ],
  'toast.filterDropped': [
    'Đã bỏ bộ lọc để mở câu {id}.',
    'Filters cleared so question {id} could open.',
  ],
  'toast.sizeChanged': ['Cỡ chữ: {size}', 'Text size: {size}'],
  'toast.exported': ['Đã tải file JSON tiến độ.', 'Progress JSON downloaded.'],
  'toast.badJson': ['File JSON không hợp lệ.', 'That JSON file is not valid.'],
  'toast.imported': ['Đã nhập dữ liệu.', 'Data imported.'],
  'toast.resetDone': ['Đã xoá toàn bộ tiến độ.', 'All progress deleted.'],
  'toast.jumpRange': [
    'Không có câu số {id}. Câu gốc đánh số tới {last}; câu bổ sung từ 1001 trở lên.',
    'There is no question {id}. Original questions run up to {last}; supplementary start at 1001.',
  ],
  'toast.langChanged': ['Đã chuyển giao diện sang tiếng Việt.', 'Interface switched to English.'],
  'size.md': ['Vừa', 'Medium'],
  'size.lg': ['Lớn', 'Large'],
  'size.xl': ['Rất lớn', 'Extra large'],
} as const satisfies Record<string, readonly [string, string]>;

export type I18nKey = keyof typeof STRINGS;

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Question, ViEntry } from './app/core/models';

/** Tải JSON, trả về `fallback` nếu file không có hoặc hỏng (để app vẫn chạy được). */
async function loadJson<T>(url: string, fallback: T, required = false): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return (await res.json()) as T;
  } catch (err) {
    if (required) throw err;
    console.warn('Không tải được ' + url + ' — bỏ qua.', err);
    return fallback;
  }
}

/**
 * Nạp ngân hàng câu hỏi trước khi khởi động, sau đó nạp tiến độ đã lưu.
 *
 *   az900-data.json  — 662 câu gốc trích từ bộ slide PDF (bắt buộc)
 *   az900-extra.json — câu BỔ SUNG do ứng dụng biên soạn (tuỳ chọn)
 *   az900-vi.json    — bản dịch tiếng Việt kèm sẵn (tuỳ chọn)
 */
async function main(): Promise<void> {
  const [base, extra, vi] = await Promise.all([
    loadJson<Question[]>('az900-data.json', [], true),
    loadJson<Question[]>('az900-extra.json', []),
    loadJson<Record<string, ViEntry>>('az900-vi.json', {}),
  ]);

  // câu bổ sung luôn mang cờ extra, kể cả khi file dữ liệu quên gắn
  const questions = base.concat(extra.map((q) => ({ ...q, extra: true })));

  const ref = await bootstrapApplication(App, appConfig);

  const { QuizService } = await import('./app/core/quiz.service');
  const { TranslateService } = await import('./app/core/translate.service');
  const tr = ref.injector.get(TranslateService);
  tr.setBuiltIn(vi);
  await tr.load();
  await ref.injector.get(QuizService).init(questions);
}

main().catch((err) => {
  console.error(err);
  document.body.innerHTML =
    '<p style="font-family:system-ui;padding:24px;color:#e8695e">' +
    'Không khởi động được ứng dụng / Could not start the app: ' +
    String(err instanceof Error ? err.message : err) +
    '</p>';
});

import { Injectable, inject, signal } from '@angular/core';
import { Question, ViEntry, ViPart } from './models';
import { StorageService } from './storage.service';

const K_VI = 'az900:vi:v1';

/**
 * Nguồn bản dịch, theo thứ tự ưu tiên:
 *
 *   1. bản dịch KÈM SẴN trong public/az900-vi.json — chạy offline, không cần mạng;
 *   2. bản dịch người dùng đã lấy về trước đó và lưu trong storage;
 *   3. gọi API dịch — chỉ khi trang được cấu hình sẵn một endpoint.
 *
 * Bản gốc luôn gọi thẳng api.anthropic.com nên trên GitHub Pages sẽ hỏng vì CORS và
 * vì không có API key. Endpoint mặc định vì thế để trống; ai muốn tự cắm proxy riêng
 * thì đặt `window.AZ900_TRANSLATE_ENDPOINT` trước khi ứng dụng khởi động.
 */
export const VI_API = {
  endpoint: '',
  model: 'claude-sonnet-4-6',
  maxTokens: 1000,
};

function configuredEndpoint(): string {
  const w = window as unknown as { AZ900_TRANSLATE_ENDPOINT?: string };
  return (w.AZ900_TRANSLATE_ENDPOINT || VI_API.endpoint || '').trim();
}

interface Payload {
  question?: string[];
  options?: string[];
  subs?: Array<{ prompt: string; options: string[] }>;
  explanation?: string[][];
}

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private readonly store = inject(StorageService);

  /** bản dịch kèm sẵn theo ứng dụng, khoá "<id>:<part>" */
  private readonly builtIn = signal<Record<string, ViEntry>>({});
  /** bản dịch lấy từ API và đã lưu lại, khoá "<id>:<part>" */
  readonly vi = signal<Record<string, ViEntry>>({});
  /** các khoá đang dịch */
  readonly busy = signal<Record<string, boolean>>({});

  setBuiltIn(v: Record<string, ViEntry> | null | undefined): void {
    if (v) this.builtIn.set(v);
  }

  async load(): Promise<void> {
    const v = await this.store.get<Record<string, ViEntry>>(K_VI);
    if (v) this.vi.set(v);
  }

  private saveT: ReturnType<typeof setTimeout> | null = null;
  private save(): void {
    if (this.saveT) clearTimeout(this.saveT);
    this.saveT = setTimeout(() => void this.store.set(K_VI, this.vi()), 800);
  }

  key(id: number, part: ViPart): string {
    return id + ':' + part;
  }

  entry(id: number, part: ViPart): ViEntry | undefined {
    const k = this.key(id, part);
    return this.builtIn()[k] ?? this.vi()[k];
  }

  isBusy(id: number, part: ViPart): boolean {
    return !!this.busy()[this.key(id, part)];
  }

  private payloadFor(q: Question, part: ViPart): Payload {
    if (part === 'q') {
      const o: Payload = { question: q.question };
      if (q.options && q.options.length) o.options = q.options.map((x) => x.t);
      if (q.subs && q.subs.length)
        o.subs = q.subs.map((s) => ({ prompt: s.prompt, options: s.options }));
      return o;
    }
    return { explanation: q.explanation };
  }

  /**
   * Bảo đảm có bản dịch cho một phần của câu hỏi.
   * Đã có sẵn thì không làm gì; chưa có và không cấu hình endpoint thì cũng không làm gì
   * (hộp dịch sẽ hiện thông báo "chưa có bản dịch" thay vì lỗi mạng).
   */
  translate(q: Question, part: ViPart): void {
    const key = this.key(q.id, part);
    if (this.entry(q.id, part) || this.busy()[key]) return;

    const endpoint = configuredEndpoint();
    if (!endpoint) return;

    this.busy.set({ ...this.busy(), [key]: true });

    const body = {
      model: VI_API.model,
      max_tokens: VI_API.maxTokens,
      messages: [
        {
          role: 'user',
          content:
            'Bạn là chuyên gia Microsoft Azure. Dịch nội dung câu hỏi chứng chỉ AZ-900 sau sang tiếng Việt tự nhiên, ' +
            'chính xác về kỹ thuật. GIỮ NGUYÊN tiếng Anh cho tên dịch vụ/sản phẩm/thuật ngữ riêng ' +
            '(ví dụ: Azure Virtual Machines, App Service, resource group, subscription, availability zone, ' +
            'ExpressRoute, RBAC, IaaS, PaaS, SaaS, CapEx, OpEx...).\n' +
            'Trả về DUY NHẤT một object JSON có đúng cùng cấu trúc và cùng số phần tử mảng như đầu vào. ' +
            'Không thêm markdown, không thêm giải thích.\n\nJSON đầu vào:\n' +
            JSON.stringify(this.payloadFor(q, part)),
        },
      ],
    };

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((d: { content?: Array<{ type: string; text: string }> }) => {
        let txt = (d.content || [])
          .filter((b) => b.type === 'text')
          .map((b) => b.text)
          .join('\n')
          .trim();
        txt = txt
          .replace(/^```(?:json)?/i, '')
          .replace(/```$/, '')
          .trim();
        this.vi.set({ ...this.vi(), [key]: JSON.parse(txt) as ViEntry });
        this.save();
      })
      .catch((e: unknown) => {
        const msg = e instanceof Error ? e.message : String(e);
        this.vi.set({ ...this.vi(), [key]: { __error: msg } });
      })
      .then(() => {
        const b = { ...this.busy() };
        delete b[key];
        this.busy.set(b);
      });
  }
}

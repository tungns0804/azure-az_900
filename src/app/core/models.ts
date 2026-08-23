import { Lang } from './i18n';

export type QuestionType = 'single' | 'multi' | 'yesno' | 'yesno_table' | 'match';
export type Mode = 'all' | 'fav' | 'review' | 'todo';
export type Size = 'md' | 'lg' | 'xl';
export type Theme = 'dark' | 'light';
/** màn hình chính: luyện thi hoặc học kiến thức */
export type View = 'practice' | 'study';

/** Trạng thái của một câu: đúng / sai / đã xem đáp án. */
export type Status = 'ok' | 'no' | 'sh';

export interface QOption {
  k: string;
  t: string;
  c: boolean;
}

export interface QSub {
  prompt: string;
  options: string[];
  /** chỉ số đáp án đúng trong options */
  a: number;
}

export interface Question {
  id: number;
  page: number;
  part: number;
  type: QuestionType;
  question: string[];
  options: QOption[];
  subs: QSub[];
  explanation: string[][];
  img: string | null;
  imgq: string | null;
  /** phần thi (d1–d4) — gán theo đề cương chính thức AZ-900 */
  domain: string;
  /** chủ đề chi tiết, khớp id trong categories.ts */
  topic: string;
  /**
   * true = câu hỏi BỔ SUNG do ứng dụng biên soạn theo đề cương chính thức
   * (không có trong bộ slide PDF gốc). Giao diện gắn nhãn tím "★ BỔ SUNG" cho các câu này.
   */
  extra?: boolean;
}

/**
 * Lựa chọn của người dùng cho một câu.
 * single/multi → mảng key ('a','b'…); yesno/yesno_table/match → mảng chỉ số theo từng sub.
 */
export type Pick = Array<string | number | null>;

export interface Progress {
  picked: Pick;
  ok: boolean;
  shown?: boolean;
  ts: number;
}

export interface SessionAnswer {
  ok: boolean;
  shown?: boolean;
  ts: number;
}

export interface Session {
  id: number;
  mode: Mode;
  startedAt: string;
  endedAt?: string;
  answers: Record<number, SessionAnswer>;
}

export interface HistoryEntry {
  id: number;
  mode: Mode;
  startedAt: string;
  endedAt: string;
  total: number;
  correct: number;
  wrong: number[];
  shown: number[];
}

export interface Settings {
  mode?: Mode | 'wrong';
  /** lọc theo phần thi (d1–d4) hoặc chủ đề; null = toàn bộ */
  category?: string | null;
  /** màn hình đang xem */
  view?: View;
  /** ngôn ngữ giao diện */
  lang?: Lang;
  shuffleQ?: boolean;
  shuffleO?: boolean;
  autoNext?: boolean;
  showVi?: boolean;
  theme?: Theme;
  size?: Size;
  idx?: number;
}

/** Payload lưu dưới khoá az900:data:v1 — giữ nguyên định dạng của bản HTML. */
export interface StoredData {
  fav?: Record<number, boolean>;
  prog?: Record<number, Progress>;
  history?: HistoryEntry[];
  session?: Session | null;
  pick?: Record<number, Pick>;
  revealed?: Record<number, boolean>;
  settings?: Settings;
}

/** Định dạng file xuất/nhập JSON. */
export interface ExportPayload {
  app: string;
  version: number;
  exportedAt: string;
  favorites: number[];
  progress: Record<number, Progress>;
  history: HistoryEntry[];
  settings: Settings;
}

/** Bản dịch tiếng Việt của phần câu hỏi. */
export interface ViQuestion {
  question?: string[];
  options?: string[];
  subs?: Array<{ prompt?: string; options?: string[] }>;
  __error?: string;
}

/** Bản dịch tiếng Việt của phần giải thích. */
export interface ViExplanation {
  explanation?: Array<string[] | string>;
  __error?: string;
}

export type ViEntry = ViQuestion & ViExplanation;
export type ViPart = 'q' | 'e';

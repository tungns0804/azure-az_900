import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { Mode } from '../core/models';
import { DOMAINS } from '../core/categories';
import { CAT_EXTRA, CAT_ORIGIN, QuizService } from '../core/quiz.service';
import { ToastService } from '../core/toast.service';
import { I18nService } from '../core/i18n.service';
import { I18nKey } from '../core/i18n';
import { fmtDate } from '../core/text.util';

const MODES: Array<{ key: Mode; label: I18nKey }> = [
  { key: 'all', label: 'mode.all' },
  { key: 'fav', label: 'mode.fav' },
  { key: 'review', label: 'mode.review' },
  { key: 'todo', label: 'mode.todo' },
];

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="side-head">
      <div class="brand">
        <div class="brand-mark">900</div>
        <div>
          <h1>{{ i18n.t('app.title') }}</h1>
          <p>{{ i18n.t('app.subtitle', { n: quiz.questions().length }) }}</p>
        </div>
      </div>
    </div>

    <div class="side-scroll">
      <p class="lbl">{{ i18n.t('scope.title') }}</p>
      <select
        class="catsel"
        [attr.aria-label]="i18n.t('scope.title')"
        [value]="quiz.category() ?? ''"
        (change)="pickCategory($event)"
      >
        <option value="">{{ i18n.t('scope.all', { n: quiz.questions().length }) }}</option>
        <option [value]="catExtra">
          {{ i18n.t('scope.extraOpt', { n: quiz.extraTotal() }) }}
        </option>
        <option [value]="catOrigin">
          {{ i18n.t('scope.originOpt', { n: quiz.originTotal() }) }}
        </option>
        @for (d of domains(); track d.id) {
          <optgroup [label]="d.weight + ' — ' + d.title">
            <option [value]="d.id">
              {{ i18n.t('scope.wholeDomain', { n: d.count }) }}
            </option>
            @for (t of d.topics; track t.id) {
              <option [value]="t.id" [disabled]="!t.count">
                &nbsp;&nbsp;{{ t.title }} ({{ t.count }}{{ t.extra ? ' ★' + t.extra : '' }})
              </option>
            }
          </optgroup>
        }
      </select>
      @if (quiz.categoryLabel(); as label) {
        <div class="catnow">
          <span>{{ label }}</span>
          <button
            class="catclear"
            [title]="i18n.t('common.clearFilter')"
            (click)="quiz.setCategory(null)"
          >
            ✕
          </button>
        </div>
      }

      <p class="lbl">{{ i18n.t('mode.title') }}</p>
      <div class="modes">
        @for (m of modes; track m.key) {
          <button
            class="mode"
            [attr.aria-pressed]="quiz.mode() === m.key"
            (click)="pickMode(m.key)"
          >
            <span class="dot"></span>{{ i18n.t(m.label) }}
            <span class="cnt">{{ quiz.modeCounts()[m.key] }}</span>
          </button>
        }
      </div>

      <p class="lbl">{{ i18n.t('opt.title') }}</p>
      <div class="sws">
        <label class="sw">
          <input
            type="checkbox"
            [checked]="quiz.shuffleQ()"
            (change)="quiz.setShuffleQ(checked($event))"
          />
          {{ i18n.t('opt.shuffleQ') }}
        </label>
        <label class="sw">
          <input
            type="checkbox"
            [checked]="quiz.shuffleO()"
            (change)="quiz.setShuffleO(checked($event))"
          />
          {{ i18n.t('opt.shuffleO') }}
        </label>
        <label class="sw">
          <input
            type="checkbox"
            [checked]="quiz.autoNext()"
            (change)="quiz.setAutoNext(checked($event))"
          />
          {{ i18n.t('opt.autoNext') }}
        </label>
      </div>

      <p class="lbl">{{ i18n.t('list.title') }}</p>
      <form class="jump" (submit)="jump($event)">
        <input
          type="text"
          inputmode="numeric"
          [value]="jumpValue()"
          (input)="jumpValue.set(value($event))"
          [placeholder]="i18n.t('list.jumpPlaceholder')"
          [attr.aria-label]="i18n.t('list.jumpAria')"
        />
        <button class="btn sm" type="submit">{{ i18n.t('list.jump') }}</button>
      </form>

      <div class="grid">
        @if (quiz.order().length) {
          @for (id of quiz.order(); track id; let i = $index) {
            <button
              class="cell"
              [class.cur]="i === quiz.idx()"
              [class.ok]="quiz.statusOf(id) === 'ok'"
              [class.no]="quiz.statusOf(id) === 'no'"
              [class.sh]="quiz.statusOf(id) === 'sh'"
              [class.fav]="quiz.fav()[id]"
              [class.xtra]="isExtra(id)"
              [title]="i18n.t(isExtra(id) ? 'list.cellExtra' : 'list.cell', { id })"
              (click)="pickCell(i)"
            >
              {{ id }}
            </button>
          }
        } @else {
          <p class="empty">{{ i18n.t('common.empty') }}</p>
        }
      </div>

      <div class="legend">
        <span><i class="lg-ok"></i>{{ i18n.t('legend.ok') }}</span>
        <span><i class="lg-no"></i>{{ i18n.t('legend.no') }}</span>
        <span><i class="lg-sh"></i>{{ i18n.t('legend.sh') }}</span>
        <span><i class="lg-xtra"></i>{{ i18n.t('legend.extra') }}</span>
      </div>

      <div class="hist">
        <p class="lbl">{{ i18n.t('hist.title') }}</p>
        <div>
          @if (quiz.session(); as s) {
            <div class="hrow">
              <div class="t">
                <span>{{ i18n.t('hist.running', { mode: quiz.modeName(s.mode) }) }}</span>
                <span class="pct y">{{ i18n.t('common.questions', { n: sessionCount() }) }}</span>
              </div>
              <div class="d">{{ i18n.t('hist.startedAt', { time: fmt(s.startedAt) }) }}</div>
            </div>
          }
          @for (row of historyRows(); track row.id) {
            <div class="hrow">
              <div class="t">
                <span>{{ row.mode }}</span>
                <span class="pct {{ row.cls }}">{{ row.pct }}</span>
              </div>
              <div class="d">{{ row.detail }}</div>
            </div>
          }
          @if (!quiz.session() && !historyRows().length) {
            <p class="empty">{{ i18n.t('hist.none') }}</p>
          }
        </div>
        <button
          class="btn sm"
          style="margin-top:9px;width:100%;justify-content:center"
          (click)="quiz.endSession(false)"
        >
          {{ i18n.t('hist.end') }}
        </button>
      </div>

      <div class="hist">
        <p class="lbl">{{ i18n.t('data.title') }}</p>
        <div style="display:flex;gap:7px;flex-wrap:wrap">
          <button class="btn sm" (click)="quiz.exportData()">{{ i18n.t('data.export') }}</button>
          <button class="btn sm" (click)="openImport.emit()">{{ i18n.t('data.import') }}</button>
          <button class="btn sm" (click)="openReset.emit()">{{ i18n.t('data.reset') }}</button>
        </div>
        <p class="empty" style="margin-top:9px">
          {{ i18n.t('data.status', { mode: quiz.storeModeLabel() }) }}
        </p>
      </div>
    </div>
  `,
  styles: `
    .catsel {
      width: 100%; background: var(--panel); border: 1px solid var(--line2);
      border-radius: 8px; padding: 7px 9px; font-size: 12.5px; margin-bottom: 8px;
      transition: border-color var(--t-fast), box-shadow var(--t-fast);
    }
    .catsel:hover { border-color: var(--amber); box-shadow: var(--shadow-sm); }
    .catnow {
      display: flex; align-items: center; gap: 8px; margin-bottom: 18px;
      background: color-mix(in srgb, var(--amber) 12%, var(--panel));
      border: 1px solid color-mix(in srgb, var(--amber) 45%, transparent);
      border-radius: 8px; padding: 6px 10px; font-size: 12px; color: var(--ink);
      animation: catIn .28s var(--ease) backwards;
    }
    .catnow span { flex: 1; min-width: 0; }
    .catclear {
      background: none; border: 0; color: var(--ink3); font-size: 13px;
      padding: 0 2px; line-height: 1; flex: 0 0 auto;
      transition: color var(--t-fast), transform var(--t-fast);
    }
    .catclear:hover { color: var(--bad); transform: rotate(90deg); }
    @keyframes catIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: none; } }
  `,
})
export class SidebarComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);
  private readonly toast = inject(ToastService);

  readonly modes = MODES;
  readonly jumpValue = signal('');
  readonly catExtra = CAT_EXTRA;
  readonly catOrigin = CAT_ORIGIN;

  /** danh mục phần thi + chủ đề, kèm số câu hỏi có sẵn của từng mục */
  readonly domains = computed(() =>
    DOMAINS.map((d) => ({
      id: d.id,
      title: this.i18n.pick(d.title, d.titleEn),
      weight: this.i18n.pick(d.weight, d.weightEn),
      count: this.quiz.countFor(d.id),
      topics: d.groups.flatMap((g) =>
        g.topics.map((t) => ({
          id: t.id,
          title: this.i18n.pick(t.title, t.titleEn),
          count: this.quiz.countFor(t.id),
          extra: this.quiz.extraCountFor(t.id),
        })),
      ),
    })),
  );

  private readonly extraIds = computed(
    () => new Set(this.quiz.questions().filter((q) => q.extra).map((q) => q.id)),
  );

  isExtra(id: number): boolean {
    return this.extraIds().has(id);
  }

  pickCategory(e: Event): void {
    const v = (e.target as HTMLSelectElement).value;
    this.quiz.setCategory(v || null);
    this.navigated.emit();
  }

  /** đóng thanh bên trên màn hình nhỏ */
  readonly navigated = output<void>();
  readonly openImport = output<void>();
  readonly openReset = output<void>();

  readonly fmt = fmtDate;

  readonly sessionCount = computed(() => Object.keys(this.quiz.session()?.answers ?? {}).length);

  readonly historyRows = computed(() =>
    this.quiz
      .history()
      .slice(0, 12)
      .map((s) => {
        const graded = s.total - (s.shown ? s.shown.length : 0);
        const p = graded > 0 ? Math.round((s.correct / graded) * 100) : 0;
        const extra =
          s.shown && s.shown.length ? this.i18n.t('hist.shownExtra', { n: s.shown.length }) : '';
        return {
          id: s.id,
          mode: this.quiz.modeName(s.mode),
          cls: p >= 80 ? 'g' : p >= 50 ? 'y' : 'r',
          pct: graded > 0 ? p + '%' : '–',
          detail:
            this.i18n.t('hist.detail', {
              time: this.fmt(s.startedAt),
              ok: s.correct,
              total: s.total,
            }) + extra,
        };
      }),
  );

  checked(e: Event): boolean {
    return (e.target as HTMLInputElement).checked;
  }

  value(e: Event): string {
    return (e.target as HTMLInputElement).value;
  }

  pickMode(m: Mode): void {
    this.quiz.setMode(m);
    this.navigated.emit();
  }

  pickCell(i: number): void {
    this.quiz.go(i);
    this.navigated.emit();
  }

  jump(e: Event): void {
    e.preventDefault();
    const n = parseInt(this.jumpValue(), 10);
    if (!n || !this.quiz.hasId(n)) {
      this.toast.show(
        this.i18n.t('toast.jumpRange', {
          id: this.jumpValue().trim() || '?',
          last: this.quiz.originMaxId(),
        }),
      );
      return;
    }
    if (this.quiz.gotoId(n)) {
      this.jumpValue.set('');
      this.navigated.emit();
    }
  }
}

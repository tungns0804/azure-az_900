import { ChangeDetectionStrategy, Component, computed, effect, inject, output } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { TranslateService } from '../core/translate.service';
import { I18nService } from '../core/i18n.service';
import { flow } from '../core/text.util';
import { ViBoxComponent } from './vi-box';

@Component({
  selector: 'app-question-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ViBoxComponent],
  template: `
    <!-- track theo q.id: đổi câu là Angular dựng lại thẻ, nhờ vậy hiệu ứng vào chạy lại -->
    @for (q of currentList(); track q.id) {
      <div class="card" [class.card-extra]="q.extra">
        <div class="card-head">
          <span class="qnum">{{ i18n.t('card.num', { id: q.id }) }}</span>
          @if (q.extra) {
            <span class="tag extra-tag" [title]="i18n.t('card.extraHint')">
              {{ i18n.t('card.extra') }}
            </span>
          }
          <span class="tag">{{ quiz.typeLabel(q.type) }}</span>
          @if (q.part) {
            <span class="tag hide-sm">{{ i18n.t('card.part', { n: q.part }) }}</span>
          }
          @if (q.page) {
            <span class="tag hide-sm">{{ i18n.t('card.slide', { n: q.page }) }}</span>
          }
          <span class="spacer"></span>
          <button
            class="star"
            [class.on]="isFav()"
            [attr.aria-pressed]="isFav()"
            [title]="i18n.t('card.fav')"
            (click)="quiz.toggleFav()"
          >
            ★
          </button>
        </div>

        @if (q.extra) {
          <p class="extra-note">{{ i18n.t('card.extraHint') }}</p>
        }

        <div class="qtext">
          @for (p of questionParas(); track $index) {
            <p>{{ p }}</p>
          }
          <app-vi-box [question]="q" part="q" />
        </div>

        @if (q.imgq) {
          <div class="exhibit">
            <button type="button" [title]="i18n.t('card.zoomHint')" (click)="zoom.emit(q.imgq!)">
              <img [src]="dataUri(q.imgq)" [alt]="i18n.t('card.imgAlt', { id: q.id })" />
            </button>
            <div class="cap">{{ i18n.t('card.imgCap') }}</div>
          </div>
        }

        @if (q.type === 'single' || q.type === 'multi') {
          @if (q.type === 'multi') {
            <p class="hint">{{ i18n.t('card.multiHint', { n: quiz.correctKeys(q).length }) }}</p>
          }
          <div class="opts">
            @for (o of quiz.currentOptions(); track o.k) {
              <button
                class="opt"
                [class.right]="revealed() && o.c"
                [class.wrong]="revealed() && !o.c && quiz.isPicked(o.k)"
                [class.pick]="!revealed() && quiz.isPicked(o.k)"
                [disabled]="revealed()"
                (click)="quiz.selectOpt(o.k)"
              >
                <span class="key">{{ o.k.toUpperCase() }}</span>
                <span>{{ o.t }}</span>
                @if (revealed() && o.c) {
                  <span class="mark">
                    {{ quiz.isPicked(o.k) ? i18n.t('card.markRightPicked') : i18n.t('card.markRight') }}
                  </span>
                } @else if (revealed() && quiz.isPicked(o.k)) {
                  <span class="mark">{{ i18n.t('card.markPicked') }}</span>
                }
              </button>
            }
          </div>
        } @else {
          @if (q.type !== 'yesno') {
            <p class="hint">{{ i18n.t('card.subHint') }}</p>
          }
          <div class="subs">
            @for (s of q.subs; track $index; let si = $index) {
              <div class="sub">
                @if (s.prompt) {
                  <div class="sub-p">{{ s.prompt }}</div>
                }
                <div class="sub-o">
                  @for (t of s.options; track $index; let oi = $index) {
                    <button
                      class="chip"
                      [class.right]="revealed() && oi === s.a"
                      [class.wrong]="revealed() && oi !== s.a && quiz.isSubPicked(si, oi)"
                      [class.pick]="!revealed() && quiz.isSubPicked(si, oi)"
                      [disabled]="revealed()"
                      (click)="quiz.selectSub(si, oi)"
                    >
                      {{ t }}
                    </button>
                  }
                </div>
              </div>
            }
          </div>
        }

        @if (revealed()) {
          <div class="verdict" [class]="'verdict ' + verdictClass()" role="status">
            {{ verdictText() }}
          </div>
          <div class="explain">
            <h4>{{ i18n.t('card.explain') }}</h4>
            @if (explainBlocks().length) {
              @for (block of explainBlocks(); track $index) {
                <div class="eblock">
                  @for (p of block; track $index) {
                    <p>{{ p }}</p>
                  }
                </div>
              }
              <app-vi-box [question]="q" part="e" [small]="true" />
            } @else {
              <p class="noexp">{{ i18n.t('card.noExplain') }}</p>
            }
            @if (q.img) {
              <div class="exhibit" style="padding:16px 0 0">
                <button type="button" [title]="i18n.t('card.zoomHint')" (click)="zoom.emit(q.img!)">
                  <img [src]="dataUri(q.img)" [alt]="i18n.t('card.slideAlt', { id: q.id })" />
                </button>
                <div class="cap">{{ i18n.t('card.slideCap') }}</div>
              </div>
            }
          </div>
        }

        <div class="actions">
          @if (!revealed()) {
            <button class="btn primary" (click)="quiz.grade()">{{ i18n.t('card.check') }}</button>
            <button class="btn" (click)="quiz.reveal()">{{ i18n.t('card.reveal') }}</button>
            <span class="keys">
              <kbd>1</kbd>–<kbd>9</kbd> {{ i18n.t('card.keysPick') }} · <kbd>Enter</kbd>
              {{ i18n.t('card.keysCheck') }} · <kbd>F</kbd> {{ i18n.t('card.keysFav') }}
            </span>
          } @else {
            <button class="btn" (click)="quiz.retry()">{{ i18n.t('card.retry') }}</button>
            @if (quiz.canNext()) {
              <button class="btn primary" (click)="quiz.go(quiz.idx() + 1)">
                {{ i18n.t('card.next') }}
              </button>
            }
            <span class="keys">
              <kbd>Enter</kbd> {{ i18n.t('card.keysNext') }} · <kbd>←</kbd><kbd>→</kbd>
              {{ i18n.t('card.keysMove') }}
            </span>
          }
        </div>
      </div>
    } @empty {
      <div class="card">
        <div class="qtext">
          {{ i18n.t('card.emptyMode', { mode: quiz.modeName(quiz.mode()) }) }}
        </div>
        <div class="opts">
          <p class="empty">{{ i18n.t('card.emptyHint') }}</p>
        </div>
      </div>
    }
  `,
  styles: `
    .card-extra { border-color: var(--extra-line); box-shadow: inset 3px 0 0 var(--extra); }
    .extra-tag {
      color: var(--extra); border-color: var(--extra-line); background: var(--extra-bg);
      font-weight: 600; letter-spacing: .06em;
    }
    .extra-note {
      margin: 0; padding: 9px 20px; font-size: 12.5px; line-height: 1.55;
      color: var(--extra); background: var(--extra-bg);
      border-bottom: 1px solid var(--line);
    }
    @media (max-width: 900px) { .extra-note { padding-left: 14px; padding-right: 14px; } }
  `,
})
export class QuestionCardComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);
  private readonly tr = inject(TranslateService);

  /** phát ra base64 của ảnh cần phóng to */
  readonly zoom = output<string>();

  readonly revealed = this.quiz.isRevealed;

  readonly isFav = computed(() => {
    const q = this.quiz.current();
    return !!q && !!this.quiz.fav()[q.id];
  });

  /** current() bọc thành mảng 0–1 phần tử để @for dựng lại thẻ mỗi khi đổi câu */
  readonly currentList = computed(() => {
    const q = this.quiz.current();
    return q ? [q] : [];
  });

  readonly questionParas = computed(() => flow(this.quiz.current()?.question ?? []));

  readonly explainBlocks = computed(() =>
    (this.quiz.current()?.explanation ?? []).map((b) => flow(b)),
  );

  private readonly status = computed(() => {
    const q = this.quiz.current();
    return q ? this.quiz.statusOf(q.id) : null;
  });

  readonly verdictClass = computed(() => {
    const st = this.status();
    return st === 'ok' ? 'ok' : st === 'sh' ? 'sh' : 'no';
  });

  readonly verdictText = computed(() => {
    const st = this.status();
    return this.i18n.t(
      st === 'ok' ? 'card.verdictOk' : st === 'sh' ? 'card.verdictSh' : 'card.verdictNo',
    );
  });

  constructor() {
    // yêu cầu dịch cho câu hiện tại khi bật song ngữ — tương ứng ensureTranslations() của bản gốc
    effect(() => {
      const q = this.quiz.current();
      if (!q || !this.quiz.showVi()) return;
      this.tr.translate(q, 'q');
      if (this.quiz.revealed()[q.id] && q.explanation.length) this.tr.translate(q, 'e');
    });
  }

  dataUri(b64: string): string {
    return 'data:image/jpeg;base64,' + b64;
  }
}

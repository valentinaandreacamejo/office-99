import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type BadgeVariant = 'outline' | 'garnet' | 'powder';

/** Archive-style label: renders `[001]`, `[SYSTEM ONLINE]`… */
@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'badge-tag',
    '[class.badge-tag--garnet]': "variant() === 'garnet'",
    '[class.badge-tag--powder]': "variant() === 'powder'",
    '[class.badge-tag--live]': 'live()',
  },
})
export class Badge {
  readonly label = input.required<string>();
  readonly variant = input<BadgeVariant>('outline');
  /** Shows a blinking status dot. */
  readonly live = input(false);
  /** Wrap the label in square brackets. */
  readonly brackets = input(true);
}

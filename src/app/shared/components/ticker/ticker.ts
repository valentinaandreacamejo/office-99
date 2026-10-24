import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Infinite marquee banner. Content is rendered four times so the loop stays seamless on wide screens. */
@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.html',
  styleUrl: './ticker.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--ticker-duration]': "duration() + 's'",
    '[class.ticker--reverse]': 'reverse()',
    '[class.ticker--powder]': "variant() === 'powder'",
  },
})
export class Ticker {
  readonly items = input.required<string[]>();
  /** Seconds for one full loop. */
  readonly duration = input(30);
  readonly reverse = input(false);
  readonly separator = input('✦');
  readonly variant = input<'garnet' | 'powder'>('garnet');
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonVariant = 'garnet' | 'powder' | 'outline';

/**
 * Two-tone stamp/pill button. Attribute selector keeps native semantics:
 *   <button appButton>Send</button>
 *   <a appButton variant="powder" href="#contact">Contact</a>
 */
@Component({
  selector: 'button[appButton], a[appButton]',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'btn-office',
    '[class.btn-office--powder]': "variant() === 'powder'",
    '[class.btn-office--outline]': "variant() === 'outline'",
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('garnet');
}

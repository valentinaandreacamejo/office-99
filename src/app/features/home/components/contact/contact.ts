import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Badge } from '../../../../shared/components/badge/badge';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-contact',
  imports: [Badge, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly email = 'hello@office99.studio';
}

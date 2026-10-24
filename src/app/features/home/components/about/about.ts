import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Badge } from '../../../../shared/components/badge/badge';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [Badge],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly stats: Stat[] = [
    { value: '100%', label: 'Modern Angular Architecture' },
    { value: '01/01', label: 'Bespoke Design Systems' },
  ];
}

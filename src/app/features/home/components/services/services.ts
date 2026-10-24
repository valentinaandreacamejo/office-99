import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceItem } from '../../../../core/models';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  selector: 'app-services',
  imports: [Badge],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly items: ServiceItem[] = [
    {
      code: '01',
      title: 'Front-end Architecture',
      description: 'Scalable Angular web apps with Signals and clean architecture.',
      icon: 'assets/icons/vintage-laptop.svg',
    },
    {
      code: '02',
      title: 'Design System & UI/UX',
      description: 'Custom typography, micro-interactions, and bespoke components.',
      icon: 'assets/icons/binder-clip.svg',
    },
    {
      code: '03',
      title: 'Performance & Accessibility',
      description: 'Lightning-fast load times and seamless cross-device experiences.',
      icon: 'assets/icons/vintage-telephone.svg',
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SocialLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  // Placeholder profiles — replace with the studio's real handles.
  protected readonly socials: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ];
}

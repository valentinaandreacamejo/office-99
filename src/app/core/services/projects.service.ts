import { Injectable, computed, signal } from '@angular/core';
import { Project } from '../models';

/** Archive of projects. Mock data for now — swap with an HttpClient/CMS source later. */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      code: '2026_01',
      title: 'Carbon Copy',
      client: 'Maison Ferro',
      year: 2026,
      category: 'editorial',
      tags: ['Angular', 'Signals', 'SCSS'],
      slug: 'carbon-copy',
    },
    {
      code: '2026_02',
      title: 'Memo No. 9',
      client: 'Atelier Blu',
      year: 2026,
      category: 'campaign',
      tags: ['Angular', 'RxJS'],
      slug: 'memo-no-9',
    },
    {
      code: '2025_03',
      title: 'Paper Trail',
      client: 'Studio Nove',
      year: 2025,
      category: 'branding',
      tags: ['SCSS', 'Design System'],
      slug: 'paper-trail',
    },
    {
      code: '2025_04',
      title: 'Out of Office',
      client: 'Granata',
      year: 2025,
      category: 'digital',
      tags: ['Signals', 'SSR'],
      slug: 'out-of-office',
    },
  ]);

  readonly projects = this._projects.asReadonly();
  readonly count = computed(() => this._projects().length);

  getBySlug(slug: string): Project | undefined {
    return this._projects().find((p) => p.slug === slug);
  }
}

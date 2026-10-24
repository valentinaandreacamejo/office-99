import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectsService } from '../../../../core/services/projects.service';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  selector: 'app-projects-grid',
  imports: [Badge],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsGrid {
  protected readonly projects = inject(ProjectsService).projects;
}

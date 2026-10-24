import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ticker } from '../../shared/components/ticker/ticker';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { ProjectsGrid } from './components/projects-grid/projects-grid';
import { Services } from './components/services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, Ticker, ProjectsGrid, About, Services, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly tickerItems = [
    '[System status: operational]',
    '[Angular 19+ signals]',
    '[OFFICE 99 creative studio]',
    '[Digital presence with purpose]',
  ];
}

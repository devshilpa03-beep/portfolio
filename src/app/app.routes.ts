import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent)
  },
  { path: '**', redirectTo: '' }
];

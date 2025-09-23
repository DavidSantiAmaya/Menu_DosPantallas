import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'list-posts',
    loadComponent: () => import('./pages/list-posts/list-posts.page').then( m => m.ListPostsPage)
  },
];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { ContactUs } from './contact-us/contact-us';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'contact',
    component: ContactUs,
  },
  {
    path: '**',
    component: NotFound,
  },
];

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { NotFound } from './not-found/not-found';
import { Home } from './home/home';
import { MainHome } from './main-home/main-home';
import { Blog } from './blog/blog';
import { ArticleDescription } from './article-description/article-description';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, NotFound, Home, MainHome, Blog, ArticleDescription],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app-2');
}

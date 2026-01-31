import { Component } from '@angular/core';
import { MainHome } from '../main-home/main-home';
import { ArticlesHome } from '../articles-home/articles-home';
import { DiscoveryHome } from '../discovery-home/discovery-home';
import { RecentHome } from '../recent-home/recent-home';
import { FollowusHome } from '../followus-home/followus-home';

@Component({
  selector: 'app-home',
  imports: [MainHome, ArticlesHome, DiscoveryHome, RecentHome, FollowusHome],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

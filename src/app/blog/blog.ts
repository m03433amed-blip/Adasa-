import { Component } from '@angular/core';
import { HeadBlog } from '../head-blog/head-blog';
import { BodyBlog } from '../body-blog/body-blog';
import { SearchBlog } from '../search-blog/search-blog';

@Component({
  selector: 'app-blog',
  imports: [HeadBlog, BodyBlog, SearchBlog],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}

import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private service: BlogsService) {}

  ngOnInit() {
    this.service.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }
}

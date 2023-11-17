import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get<Blog[]>('http://localhost:3000/blogs');
  }
}

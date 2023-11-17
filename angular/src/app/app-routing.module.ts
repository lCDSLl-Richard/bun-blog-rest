import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { NewBlogComponent } from './new-blog/new-blog.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'new', component: NewBlogComponent },
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CardComponent } from './components/card/card.component';
import { provideHttpClient } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { NewBlogComponent } from './new-blog/new-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkComponent,
    ButtonComponent,
    HeaderComponent,
    BlogsComponent,
    CardComponent,
    NewBlogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

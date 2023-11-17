import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
})
export class NewBlogComponent {
  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.blogForm.value);
  }
}

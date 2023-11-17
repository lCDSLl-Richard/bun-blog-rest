import { Component } from '@angular/core';
import { LinkProps } from '../components/link/link.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  routes: LinkProps[] = [
    { text: 'Home', link: '/' },
    { text: 'New', link: '/new' },
    {
      text: 'Log In',
      link: '/login',
      classes: 'bg-primary !text-white py-2 px-4 rounded-lg font-semibold',
    },
    { text: 'Sign In', link: '/signin', classes: 'text-primary font-semibold' },
  ];
}

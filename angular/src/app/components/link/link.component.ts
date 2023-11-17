import { Component, Input } from '@angular/core';

export interface LinkProps {
  link: string;
  text: string;
  classes?: string;
}

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() link = '/';
  @Input() text = '';
  @Input({ transform: appendClasses }) classes =
    'flex flex-row items-center justify-end gap-14 text-2xl transition-all hover:text-primary';
}

function appendClasses(classes: string | undefined) {
  return `flex flex-row items-center justify-end gap-14 text-2xl transition-all hover:text-primary ${classes}`;
}

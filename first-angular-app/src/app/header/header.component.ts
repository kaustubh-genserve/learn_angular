//  we export class HeaderComponent because we want to use it in other files as well.

import { Component } from '@angular/core';

//  Below is a TS Angular Decorater which adds slelctor is atleast 2 words with - for avoiding confict with existing tags
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

//  Below is a TS Angular Decorater which adds ,etadata
//  selector is the name of the component in the index.html file
//  templateUrl is the path to the HTML file of the component
//  styleUrl is the path to the CSS file of the component
//  The component is the root component of the applicatio
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
}

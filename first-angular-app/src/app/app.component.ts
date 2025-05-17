import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header.component";

//  Below is a TS Angular Decorater which adds ,etadata
//  selector is the name of the component in the index.html file
//  templateUrl is the path to the HTML file of the component
//  styleUrl is the path to the CSS file of the component
//  The component is the root component of the applicatio
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}

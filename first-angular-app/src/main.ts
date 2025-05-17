import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';
// AppComponent is an import of JS file app.component.ts and is the root component of the application
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(HeaderComponent);
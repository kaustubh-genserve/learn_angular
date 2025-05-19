import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

//  Below is a TS Angular Decorater which adds ,etadata
//  selector is the name of the component in the index.html file
//  templateUrl is the path to the HTML file of the component
//  styleUrl is the path to the CSS file of the component
//  The component is the root component of the applicatio
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  //  We used get like this because we want to use the selectedUser property in the HTML file
  //  onSelectUser is a main method and get selected user is a getter PROPERTY.
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user ID:', this.selectedUserId);
  }
}

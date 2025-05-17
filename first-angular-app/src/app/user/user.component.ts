import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// Math.random() returns a random number between 0 and 1
// Math.floor() rounds down to the nearest integer
// DUMMY_USERS.length returns the number of elements in the array
// This will give a random index between 0 and the length of the array - 1
// Math.random() * DUMMY_USERS.length >e.g.> 0.76 * 4 = 3.04

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log('cliclked');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}

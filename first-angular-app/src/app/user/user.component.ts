import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
// import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

interface User {
  id: string;
  name: string;
  avatar: string;
}

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
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

// We can add required propertu in the input parameter to make sire that we ALWAYS have the value
// We can use the ! operator to tell TypeScript that we are sure that the value will be set somewhere in the code
// Input is going to have the value of the property that we are going to pass from the parent component
//  In our case, we have exported dumm users in app.component.ts
// Input() is going to go to app.ts and get the value of the property

// We set Output devorator with the EventEmitter import from angular core when we want to output the valuve of some reaction to the browser
//  In our case, we are going to output the id of the user that we have selected
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // we created a select output property
    // and we are going to emit the id of the user that we have selected
    // This is going to be used in the app.component.ts file
    this.select.emit(this.user.id);
  }
}

// We set Output devorator with the EventEmitter import from angular core when we want to output the valuve of some reaction to the browser
//  In our case, we are going to output the id of the user that we have selected
// export class UserComponent {
//   @Input({ required: true }) avatar!: string;
//   @Input({ required: true }) name!: string;
//   @Input({ required: true }) id!: string;

//   @Output() select = new EventEmitter<string>();

//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//     // we created a select output property
//     // and we are going to emit the id of the user that we have selected
//     // This is going to be used in the app.component.ts file
//     this.select.emit(this.id);
//   }
// }

// SIGNAL INPUT ( Using input wil small i
// input is a generic TS type that is used to create a signal
//  It is going to accept data from app.ts and use logic in the UserComponent
//  Imagepath is a computed property that is going to return the path to the image
// input is a read-only property. We cab't chnage the value from inside the cpmponents.

//  WHEN TO USE INPUT and input ? :: It's a new angluar VS old angular thing
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input.required<string>();
//   id = input.required<string>();

//   // Output will create a new Eventemmiter object internally so we don't have to do it manually
//   select = output<string>();

//   imagePath = computed(() => 'assets/users/' + this.avatar);

//   onSelectUser() {
//     this.select.emit(this.id());
//   }
// }

// export class UserComponent {
// selectedUser = signal(DUMMY_USERS[randomIndex]);

// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

// get imagePath() {
//   return 'assets/users/' + this.selectedUser.avatar;
// }

// onSelectUser() {}
// onSelectUser() {
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.selectedUser.set(DUMMY_USERS[randomIndex]);
// }

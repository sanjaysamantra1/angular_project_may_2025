import { Component } from '@angular/core';
// import * as data from './users.json';
import users from './user_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  flag:boolean = true;
  // user_list = (data as any).default;
  user_list = users;
  faEye = faEye;
}

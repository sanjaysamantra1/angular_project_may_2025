import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  employees: any;

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    this.fetchEmployees();
    this.fetchUsers();
    this.fetchComments();
  }

  fetchEmployees() {
    this.httpClient.get('http://localhost:3000/employees').subscribe(response => {
      console.log(response);
      this.employees = response;
    })
  }

  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      console.log(response);
    })
  }

  fetchComments() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/comments').subscribe(response => {
      console.log(response);
    })
  }
}

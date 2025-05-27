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
  }

  fetchEmployees() {
    this.httpClient.get('http://localhost:3000/employees').subscribe(response => {
      console.log(response);
      this.employees = response;
    })
  }
}

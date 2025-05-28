import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emp_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    // return this.httpClient.get<Employee[]>(this.emp_url);

    return this.httpClient.get<Employee[]>(this.emp_url).pipe(
      map((responseArr) => {
        return responseArr.map((emp) => {
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.sal,emp.gender);
        });
      })
    );

  }
}

import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.fetchEmployees();
  }
  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
      console.log(response);
    })
  }
}

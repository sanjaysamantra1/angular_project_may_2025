import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-crud',
  imports: [
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  faEye = faEye;
  faTrash = faTrash;

  employees = [
    { "id": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
  empObj = { "id": 0, "name": "", "sal": 0, "gender": "" };

  selectedEmployee: any = null;
  setSelectedEmployee(emp: any) {
    this.selectedEmployee = emp;
  }
  deleteEmployee(ind: number) {
    this.employees.splice(ind, 1);
  }
  addEmployee() {
    this.employees.push(this.empObj);
    alert('Employee Added Successfully!!');
    this.empObj = { "id": 0, "name": "", "sal": 0, "gender": "" };
  }
}

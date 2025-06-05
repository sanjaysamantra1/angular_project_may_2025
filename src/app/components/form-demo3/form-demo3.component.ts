import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    /* this.userForm = new FormGroup({
      name: new FormControl('Sachin', [Validators.required, Validators.minLength(5)]),
      age: new FormControl(45, [Validators.required]),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(),
      })
    }, { updateOn: 'blur' }); */

    // using FormBuilder
    this.userForm = this.fb.group({
      name: ['sachin', [Validators.required, Validators.minLength(5)]],
      age: [45, [Validators.required]],
      email: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        pincode: [''],
      })
    })
  }

  submitUserForm() {
    console.log(this.userForm);
  }

}

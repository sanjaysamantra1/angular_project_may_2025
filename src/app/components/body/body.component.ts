import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UsersComponent } from '../users/users.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ProductsComponent } from '../products/products.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // DirectivesComponent
    // UsersComponent
    // MyModalComponent
    ProductsComponent
    // Demo1Component
    // EmployeeCrudComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BodyComponent {

}

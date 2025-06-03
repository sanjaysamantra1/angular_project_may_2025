import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UsersComponent } from '../users/users.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ProductsComponent } from '../products/products.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { FolderExplorerComponent } from '../folder-explorer/folder-explorer.component';
import folderObj from './folder_data';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // DirectivesComponent
    // UsersComponent
    // MyModalComponent
    // ProductsComponent
    // Demo1Component,
    // Demo2Component
    // EmployeeCrudComponent
    // PipesComponent
    // ParentComponent
    // Math1Component,
    // Math2Component
    // HttpDemo1Component,
    ProductListComponent,
    // EmployeeComponent
    // ObservableDemo1Component,
    // FolderExplorerComponent
    // ObservableDemo2Component
    // SubjectDemo1Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BodyComponent {
  flag: boolean = true;
  folderObj: any = folderObj;
}

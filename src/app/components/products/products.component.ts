import { Component } from '@angular/core';
import productData from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  imports: [
    NgxPaginationModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArr = productData;
  p:number = 1;
}

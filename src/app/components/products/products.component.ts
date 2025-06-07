import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import productData from './product_data';
import { ZoomoutDirective } from '../../custom_directives/zoomout.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    NgxPaginationModule,
    FormsModule,
    ZoomoutDirective,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArr = productData;
  p: number = 1;

  searchText: string = '';
  searchProducts() {
    this.productsArr = productData.filter(product => {
      return product.title.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }

  sortAsc() {
    this.productsArr.sort((p1: any, p2: any) => p1.price - p2.price);
  }
  sortDesc() {
    this.productsArr.sort((p1: any, p2: any) => p2.price - p1.price);
  }
}

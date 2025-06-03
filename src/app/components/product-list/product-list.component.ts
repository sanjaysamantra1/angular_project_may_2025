import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getAllProducts().subscribe((response: Product[]) => {
      console.log(response);
      this.products = response;
      this.isLoading = false;
    });
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}

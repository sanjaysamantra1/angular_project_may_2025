import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItems:any = [];

  constructor(private cartService: CartService) {
  }
  ngOnInit(){
    this.cartService.cartItem$.subscribe(response=>{
      this.cartItems = response;
    })
  }

  userRole = 'student';
}

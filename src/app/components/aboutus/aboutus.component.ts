import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LargeComponent } from '../large/large.component';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink,
    LargeComponent
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private router: Router) {
  }

  doSomethingAndGoToHome() {
    console.log('Do Something...');
    this.router.navigate(['/home']);
  }
}

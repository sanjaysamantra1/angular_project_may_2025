import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  openAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      timer: 10000,
      icon: "success"
    })
  }

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'dark', timeout: 5000, actionText: 'X' }
    );
  }

  timerId: any;

  constructor() {
    console.log("Demo-1 constructor")
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit');
    this.timerId = setInterval(() => {
      console.log('I am interval from demo-1 component')
    }, 2000)
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestory');
    clearInterval(this.timerId);
  }
}

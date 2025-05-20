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

  openAlert(){
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      timer: 10000,
      icon: "success"
    })
  }

  openSnackBar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'dark', timeout: 5000, actionText: 'X' }
    );
  }
}

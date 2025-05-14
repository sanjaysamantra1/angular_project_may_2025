import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name: string = 'Sachin Tendulkar';
  img_url: string = 'https://img.jagranjosh.com/imported/images/E/GK/sachin-records.webp';
  flag: boolean = true;
  msg: string = '';
  selectedState: string = 'Karnataka';

  f1() {
    alert('I am f1...')
  }
}

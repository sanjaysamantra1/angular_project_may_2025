import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styles:['h3{color:purple}'],
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name: string = 'Sachin Tendulkar';
  img_url: string = 'https://img.jagranjosh.com/imported/images/E/GK/sachin-records.webp';
  flag: boolean = true;
  msg: string = '';
  selectedState: string = 'Karnataka';
  colspanValue: number = 2;

  num1: number = 0;
  num2: number = 0;

  f1() {
    alert('I am f1...')
  }

  addResult: number = 0;
  addition(num3: any, num4: any) {
    this.addResult = +num3 + +num4;
  }
}

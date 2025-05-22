import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  userName: string = 'Sachin tEnDulKAr';
  salary: number = 5000;
  today: Date = new Date();

  user: object = { name: 'sanjay', age: '40', add: 'Bangalore' };
  msg: string = 'Hello';
  msg2: string = 'Hii';

  cardinalNum : number = 21;
}

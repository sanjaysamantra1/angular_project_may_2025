import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a']
})
export class Child1Component {
  a: any;
  userName: string = 'Virat Kohli';
}

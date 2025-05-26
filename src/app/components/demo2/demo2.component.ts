import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  constructor() {
    console.log("Demo-2 constructor")
  }
  ngOnInit() {
    console.log('Demo-2 ngOnInit');
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestory');
  }
}

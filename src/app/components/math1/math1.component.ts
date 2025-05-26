import { MathService } from './../../services/math.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  // mathService: any = new MathService();

  constructor(private mathService: MathService) { // Dependency Injection
  }
  ngOnInit() {
    console.log('I am ngOnInit From Demo-1 Component');
    this.mathService.add(10, 20);
  }
}

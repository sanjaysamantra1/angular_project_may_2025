import { Component, computed, effect, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.component.html',
  styleUrl: './signal-demo1.component.css'
})
export class SignalDemo1Component {
  userId = signal(1);

  num = signal(1);
  numDouble = computed(() => this.num() * 2);
  numSquare = computed(() => this.num() * this.num());

  ngOnInit() {
    console.log(`num is: ${this.num()}`)
  }

  increment() {
    this.num.update(value => value + 1);
  }

  incrementuserId() {
    this.userId.update(value => value + 1);
  }

  userDetailsEffect = effect(() => {
    const userId = this.userId();
    this.fetchUSerDetails(userId);
  });
  fetchUSerDetails(userId: any) {
    console.log('Fething user details for ', userId)
  }
}

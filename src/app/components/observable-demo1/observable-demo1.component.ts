import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, forkJoin, from, interval, map, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {

  currentTime$ = new Observable<string>(publisher => {
    setInterval(() => publisher.next(new Date().toLocaleTimeString()), 1000);
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.custom_observable();
    // this.from_demo();
    // this.of_demo();
    // this.interval_demo();
    this.forkjoin_demo();
  }

  custom_observable() {
    let publisher1 = new Observable((producer) => {
      producer.next('AAAA');
      producer.next('BBBB');
      producer.next('CCCC');
      producer.complete();
    });
    /* let subscriber1 = publisher1.subscribe(
      (partialResponse) => { console.log('Partial response:', partialResponse) }, // next
      (error) => { console.log('Error:', error) },  // error
      () => { console.log('All Data Received') } // complete
    ); */
    let subscriber1 = publisher1.subscribe({
      next: (partialResponse) => { console.log('Partial response:', partialResponse) }, // next
      error: (error) => { console.log('Error:', error) },  // error
      complete: () => { console.log('All Data Received') }
    });
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsPublisher = from(cars);
    carsPublisher.subscribe(val => console.log(val));
  }
  of_demo() {
    let carsPublisher = of('Tata', 'Honda', 'Maruti');
    carsPublisher.subscribe(val => console.log(val));
  }

  numPublisher: any;
  interval_demo() {
    this.numPublisher = interval(1000);
    // this.numPublisher.subscribe((val:any) => console.log(val));

    // this.numPublisher.pipe(take(5)).subscribe((val:any) => console.log(val));

    /*  this.numPublisher.pipe(filter((ele: any) => ele % 2 == 0))
       .subscribe((val: any) => console.log(val)); */

    this.numPublisher.pipe(map((ele: any) => ele * ele)).subscribe((val: any) => console.log(val));
  }

  forkjoin_demo() {
    let req1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users'); // 2
    let req2 = this.httpClient.get('https://jsonplaceholder.typicode.com/todos'); // 3
    let req3 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments'); // 2

    forkJoin([req1, req2, req3]).subscribe(
      responseArr => {
        console.log(responseArr);
      },
      err => {
        console.log(err);
      }
    )
  }

}

import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    FormsModule,
    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: number;
  b: number;

  @ViewChild('myBox1') myInptBox1: any;
  @ViewChild('myBox2') myInptBox2: any;

  address_parent: string = '';
  receiveDataFromChild(addressFromChild: string) {
    this.address_parent = addressFromChild;
  }

  constructor() {
    this.a = 100;
    this.b = 200;
    console.log("Parent constructor");
    console.log(this.myInptBox1);
    // this.myInptBox2.nativeElement.style.backgroundColor = 'cyan';
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInptBox1);
    this.myInptBox1.nativeElement.focus();
    this.myInptBox2.nativeElement.style.backgroundColor = 'cyan';
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}

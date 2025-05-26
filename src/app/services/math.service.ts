import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  add(a: number, b: number) {
    console.log(`Addition if ${a} & ${b} is ${a + b}`);
  }
  sub(a: number, b: number) {
    console.log(`Subtraction if ${a} & ${b} is ${a - b}`);
  }
  mul(a: number, b: number) {
    console.log(`Multiplication if ${a} & ${b} is ${a * b}`);
  }
}

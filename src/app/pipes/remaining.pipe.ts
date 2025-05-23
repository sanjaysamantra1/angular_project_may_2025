import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  // pure: false
})
export class RemainingPipe implements PipeTransform {
  transform(input: string, maxLength = 100) {
    console.log('Remaining Pipe...')
    return maxLength - input.length;
  }
}

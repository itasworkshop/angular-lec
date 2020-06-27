import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(value: number, exponent?:number): number {
    return Math.pow(value , isNaN(exponent) ? 1: exponent);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoinr'
})
export class UsdtoinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args
    return value*x;
  }

}

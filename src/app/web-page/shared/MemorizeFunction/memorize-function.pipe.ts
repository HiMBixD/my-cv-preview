import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memorizeFunction',
})
export class MemorizeFunctionPipe implements PipeTransform {
  transform(
    fn: (...args: any[]) => any,
    context: unknown,
    ...args: any[]
  ): any {
    if (context) {
      return fn.call(context, ...args);
    }
    return fn(...args);
  }
}

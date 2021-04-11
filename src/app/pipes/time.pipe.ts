import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const time = Number(value);
    if (time <= 90) return `${value} minut`;
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return minutes === 0 ? `${hours} godz.` : `${hours} g ${minutes} m`;
  }

}

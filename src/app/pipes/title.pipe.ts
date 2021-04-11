import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(name: string, cousine: string ): string {
    return `${name.toUpperCase()}, Kuchnia ${cousine}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

  transform(value: string | null): string {
    if( value === null){
      return '../../../assets/img/no-img.png';
    }else{
      return value;
    }
  }

}

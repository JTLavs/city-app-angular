import { Pipe, PipeTransform } from '@angular/core';
import {City} from './city';

@Pipe({
  name: 'countryPipe'
})
export class CountryPipePipe implements PipeTransform {

  transform(cities : City[], district : string) : City[]{
    if(!cities) return [];
    if(!district) return cities;

    return cities.filter(c=> {
      return c.district == district;
    })
  }

}

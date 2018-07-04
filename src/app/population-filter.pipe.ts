import { Pipe, PipeTransform } from '@angular/core';
import { City } from './city';

@Pipe({
  name: 'populationFilter'
})
export class PopulationFilterPipe implements PipeTransform {

  transform(cities : City[], population : number) : City[]{
    if(!cities) return [];
    if(!population) return cities;

    population = population * 1000000;

    return cities.filter(c=> {
      return c.population >= population;
    })
  }

}

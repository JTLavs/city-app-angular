import { Component, OnInit } from '@angular/core';
import {City} from '../city';
import {DataService} from '../data.service';

@Component({
  selector: 'city-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {
  public city : City;
  data : DataService;

  constructor(dataService : DataService) {
    this.data = dataService;
   }
   updateCity(city:City){
     this.data.updateCity(city);
    }

  ngOnInit() {
    this.city = new City();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { City } from '../city';
import { CompileStylesheetMetadata } from '@angular/compiler';

@Component({
  selector: 'city-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  public newCity : City;
  data : DataService;

  constructor(dataService : DataService) { 
    this.data = dataService;
  }

  ngOnInit() {
    this.newCity = new City();
  }

  addCity(addForm) : void{
    if(addForm.valid){
      var cityToAdd = this.newCity;
      this.newCity = new City();
      this.data.addCity(cityToAdd);
    }else{
      console.error("Form is invalid");
    }
  }

}

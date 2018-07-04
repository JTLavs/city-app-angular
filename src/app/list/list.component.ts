import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { City } from '../city';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'city-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  thisCity : City;
  data : DataService;
  switchboard : SwitchboardService;

  constructor(dataService : DataService, switchboard : SwitchboardService){
    this.data = dataService;
    this.switchboard = switchboard;
  }

  onSelect(newCity : City){
    this.thisCity = newCity;
    this.switchboard.switchCity(this.thisCity);
  }

  deleteCity(id : number){
    this.data.deleteCity(id);
    console.log(id);
  }


  ngOnInit() {
  }

  

}

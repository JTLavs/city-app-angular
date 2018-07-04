import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { City } from '../city';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'city-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() city: City;
  switchboard : SwitchboardService;
  dataService : DataService;

  constructor(switchboard : SwitchboardService, dataService : DataService) { 
    this.switchboard = switchboard;
    this.dataService = dataService;
  }

  subCity : Subscription;

  ngOnInit() : void{
    this.subCity = this.switchboard.city$.subscribe((c) => {
      this.city = c;
    });
  }

  ngOnDestroy() : void{
    this.subCity.unsubscribe();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NameFilterPipe } from './name-filter.pipe';
import { AddCityComponent } from './add-city/add-city.component';
import { PopulationFilterPipe } from './population-filter.pipe';
import { CountryPipePipe } from './country-pipe.pipe';
import { UpdateCityComponent } from './update-city/update-city.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    NameFilterPipe,
    AddCityComponent,
    PopulationFilterPipe,
    CountryPipePipe,
    UpdateCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

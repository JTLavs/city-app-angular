import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  cities = this.http.get<City[]>('/api/cities');

  public addCity(newCity : City) : void{
    console.log(newCity);
    this.cities = this.http.post<City[]>('/api/addcity', newCity);
  }

  public deleteCity(id : number){
    this.cities =  this.http.delete<City[]>('/api/city/'+id);
    console.log(id);
  }

  public updateCity(city : City){
    this.cities = this.http.put<City[]>('/api/city/', {city: city});
    console.log(name);
  }
}

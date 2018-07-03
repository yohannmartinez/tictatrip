import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FindCityService {
  constructor(private http: HttpClient) {

  }

  getBests() {
    return this.http.get('http://www-uat.tictactrip.eu/api/cities/popular/5');
  }

  getCity(param) {
    return this.http.get('http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=' + param); 
  }

}

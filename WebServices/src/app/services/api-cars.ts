import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCars {

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({

          'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95'
          ,'x-rapidapi-host':'car-specs.p.rapidapi.com'
          ,'Content-Type':'application/json'

      })
    };
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOptions);
  }

  getModels(makeId: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    };
    const urlDinamica = `https://car-specs.p.rapidapi.com/v2/cars/makes/${makeId}/models`;

    return this.http.get(urlDinamica, httpOptions);
  }
}

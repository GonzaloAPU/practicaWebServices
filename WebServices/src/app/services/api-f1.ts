import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiF1 {
  constructor(private http: HttpClient) {

  }

  getRaces():Observable<any>{

    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95'
        ,'x-rapidapi-host':'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type':'application/json'

      })
    }

    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/races/2020',httpOptions);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiIMDB {

  constructor(private http: HttpClient) { }

  getmovies():Observable<any>{

      let httpOptions = {
        headers: new HttpHeaders({
          'x-rapidapi-key':'ca75d78146mshfec25f33e5607ebp16c44ejsne62b0704223a',
          'x-rapidapi-host':'imdb-top-100-movies.p.rapidapi.com',
          'Content-Type':'application/json'
        })
      }
    return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/',httpOptions);
  }
}

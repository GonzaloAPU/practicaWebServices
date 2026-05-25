import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apimoney {
  constructor(private http: HttpClient) { }

  getlistchanges(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'apikey':'XV90aMEl5F9GutHk1vcv7Jkisw6lH4zr'
      })
    };
    return this.http.get('https://api.apilayer.com/currency_data/list', httpOptions);
  }

  getconvet(to: any, from: any, amount: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'apikey':'XV90aMEl5F9GutHk1vcv7Jkisw6lH4zr'
      })
    };

    // CORRECCIÓN: Usamos backticks (``) y ${} para inyectar los parámetros dinámicos
  const urlDinamica = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;
  return this.http.get(urlDinamica, httpOptions);

  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apivoice {

  constructor(private http: HttpClient){ };

  getconvert(text:string):Observable<Blob>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95', // Tu clave de la captura
        'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'blob'
    }
    let body = {
      model: 'tts-1',
      input: text, // El texto dinámico que escribe el usuario
      instructions: 'Speak in a lively and optimistic tone.',
      voice: "alloy" // La voz elegida en el desplegable ('alloy', 'echo', etc.)
    };

    return this.http.post('https://open-ai-text-to-speech1.p.rapidapi.com/', body, httpOptions);


  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiQr {

  // URL de la API pública y gratuita (Configuramos tamaño 200x200)
  private urlBase = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';

  constructor(private http: HttpClient) {}

  getQrCode(texto: string): Observable<Blob> {
    // Es un GET que pide un archivo binario (Blob) de respuesta
    return this.http.get(`${this.urlBase}${encodeURIComponent(texto)}`, { responseType: 'blob' });
  }
}

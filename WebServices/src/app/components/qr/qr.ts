import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ApiQr } from '../../services/api-qr'; // Ajustá la ruta

@Component({
  selector: 'app-qr',
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './qr.html',
  styleUrl: './qr.css',
})
export class Qr{

  textoQr: string = 'https://github.com/gonzalo'; // Texto o link por defecto
  qrBase64: string = ''; // Guardará el string "data:image/png;base64,..."

  constructor(
    private apiQr: ApiQr,
    private cdr: ChangeDetectorRef
  ) {}

  generarQR() {
    this.qrBase64 = '';

    if (this.textoQr.trim() === '') return;

    this.apiQr.getQrCode(this.textoQr).subscribe(
      (blobData: Blob) => {
        // TRUCO: Convertimos el Blob de la API a un String Base64
        const reader = new FileReader();
        reader.readAsDataURL(blobData);

        reader.onloadend = () => {
          // El resultado ya viene con el formato "data:image/png;base64,..." listo para el src
          this.qrBase64 = reader.result as string;

          console.log("String Base64 Generado con éxito:", this.qrBase64.substring(0, 50) + "...");
          this.cdr.detectChanges(); // Forzamos renderizado
        };
      },
      (error) => {
        console.log("Error al generar QR:", error);
      }
    );
  }
}

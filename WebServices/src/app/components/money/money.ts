import { Component, signal } from '@angular/core';
import { Apimoney } from '../../services/apimoney';
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf, KeyValuePipe,DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-money',
  imports: [FormsModule, NgForOf, NgIf, KeyValuePipe, DecimalPipe],
  templateUrl: './money.html',
  styleUrl: './money.css',
})
export class Money {
  constructor(private apimoney: Apimoney) {}

  listchanges = signal<any>({}); // Guardará el objeto de monedas

  // Variables reactivas para el formulario
  cantidad = signal<number>(1);
  monedaOrigen = signal<string>('ARS');
  monedaDestino = signal<string>('USD');

  // Signal para mostrar el precio calculado en la interfaz
  resultado = signal<number | null>(null);

  getlistamonedas() {
    this.apimoney.getlistchanges().subscribe((data) => {
      console.log("Monedas cargadas:", data);
      this.listchanges.set(data.currencies);
    });
  }

  getconvertirmonedas() {
    // Reseteamos el resultado anterior mientras consulta
    this.resultado.set(null);

    // Ojo: pasamos Origen al "from", Destino al "to" y la Cantidad
    this.apimoney.getconvet(this.monedaDestino(), this.monedaOrigen(), this.cantidad()).subscribe((data) => {
      console.log("Respuesta conversión:", data);

      // APILayer suele devolver el valor final en data.result
      if (data && data.result !== undefined) {
        this.resultado.set(data.result);
      }
    });
  }
}

import { Component, signal } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ApiCars } from '../../services/api-cars';
import { NgForOf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cars',
  imports: [NgForOf, CommonModule, FormsModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {
  constructor(private apiCars: ApiCars, private cdr: ChangeDetectorRef) {}


  listacars = signal<any[]>([]);
  listmodels = signal<any[]>([]);
  idSeleccionado = signal<any>(0);



  getApiCars() {
    this.apiCars.getCars().subscribe((data) => {
      this.listacars.set(data);
      console.log(this.listacars());
      this.cdr.detectChanges();
    });
  }

  seleccionarMarca(id: any){

    this.idSeleccionado.set(id);
    console.log("ID",this.idSeleccionado());

    this.apiCars.getModels(this.idSeleccionado()).subscribe((data) => {
      this.listmodels.set(data);
      console.log("Modelos reales en la Signal:", this.listmodels());
      this.cdr.detectChanges();
    });


  }

}

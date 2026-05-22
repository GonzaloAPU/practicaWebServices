import { Component } from '@angular/core';
import { ApiF1 } from '../../services/api-f1';



@Component({
  selector: 'app-f1',
  imports: [],
  templateUrl: './f1.html',
  styleUrl: './f1.css',
})
export class F1 {
  constructor(private apiF1: ApiF1) {}

  mostrarApiF1() {
    this.apiF1.getRaces().subscribe((data) => {
      console.log(data);
    });
  }

  consultarCarrera(){

  }
}

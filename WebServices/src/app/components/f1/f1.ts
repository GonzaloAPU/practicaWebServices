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

import { Component } from '@angular/core';
import { ApiF1 } from '../../services/api-f1';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';





@Component({
  selector: 'app-f1',
  imports: [NgIf, NgForOf],
  templateUrl: './f1.html',
  styleUrl: './f1.css',
})
export class F1 {

  listaraces: any = null;


  constructor(private apiF1: ApiF1) {}

  getApiF1() {
    this.apiF1.getRaces().subscribe((data) => {
      console.log(data);

      this.listaraces=data;
      console.log(this.listaraces);
    });
  }

  consultarCarrera(){
    this.getApiF1()
    this.listaraces

  }
}

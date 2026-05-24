import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiF1 } from '../../services/api-f1';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-f1',
  imports: [NgIf, NgForOf, CommonModule, FormsModule],
  templateUrl: './f1.html',
  styleUrl: './f1.css',
})
export class F1 {

  listaraces: any = {};
  aniobusqueda: number =2024;

  constructor(private apiF1: ApiF1, private cdr: ChangeDetectorRef) {}

  getApiF1() {
    this.apiF1.getRaces().subscribe((data) => {
      this.listaraces=data;
      console.log(this.listaraces);
      this.cdr.detectChanges();
    });
  }

}


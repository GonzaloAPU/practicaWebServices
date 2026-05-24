import { ChangeDetectorRef, Component } from '@angular/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { ApiIMDB } from '../../services/api-imdb';

@Component({
  selector: 'app-imdb',
  imports: [ɵInternalFormsSharedModule, NgForOf],
  templateUrl: './imdb.html',
  styleUrl: './imdb.css',
})
export class IMDB {
  constructor(private apiIMDB: ApiIMDB, private cdr: ChangeDetectorRef) {}
  listarmovies: any[] = [];



  getApiImdb() {
    this.apiIMDB.getmovies().subscribe((data) => {
      /*console.log(data);*/
      this.listarmovies = data;
      console.log(this.listarmovies);
      this.cdr.detectChanges();
    });
  }

}

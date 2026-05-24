import { Routes } from '@angular/router';
import {F1} from "../app/components/f1/f1";
import {IMDB} from "../app/components/imdb/imdb";
import {Cars} from "../app/components/cars/cars";


export const routes: Routes = [
  {path: '', redirectTo: 'imdb', pathMatch: 'full'},
  { path: 'f1', component: F1 },
  { path: 'cars', component: Cars },
  { path: 'imdb', component: IMDB },
  { path: '**', redirectTo: 'imdb' }
];

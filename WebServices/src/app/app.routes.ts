import { Routes } from '@angular/router';
import {F1} from "../app/components/f1/f1";
import {IMDB} from "../app/components/imdb/imdb";
import {Cars} from "../app/components/cars/cars";
import {Money} from "../app/components/money/money";
import { Voice } from './components/voice/voice';
import {Qr} from "../app/components/qr/qr";




export const routes: Routes = [
  {path: '', redirectTo: 'imdb', pathMatch: 'full'},
  {path:'qr', component:Qr},
  {path:'voice', component:Voice},
  { path: 'money', component: Money },
  { path: 'f1', component: F1 },
  { path: 'cars', component: Cars },
  { path: 'imdb', component: IMDB },
  { path: '**', redirectTo: 'imdb' }
];

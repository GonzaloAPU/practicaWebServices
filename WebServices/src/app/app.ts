import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {F1  } from './components/f1/f1';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, F1] ,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WebServices');
}

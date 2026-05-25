import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Apivoice } from '../../services/apivoice';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-voice',
  imports: [CommonModule, FormsModule],
  templateUrl: './voice.html',
  styleUrl: './voice.css',
})
export class Voice {
  texto:string=""
  objetUrl:SafeUrl=""

  constructor(private apivoice:Apivoice,private sanitizer:DomSanitizer){}

  convertirAudio(){
    this.objetUrl=""
    this.apivoice.getconvert(this.texto).subscribe(
      data=>{
        let objetUrl=URL.createObjectURL(data)
        this.objetUrl=this.sanitizer.bypassSecurityTrustUrl(objetUrl)
        console.log(this.objetUrl)
      },
      error=>{
        console.log(error)
      }
    )
  }





}


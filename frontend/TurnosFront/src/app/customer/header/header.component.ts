import { Component } from '@angular/core';
import { TEXTOS } from 'src/app/constants';
import { CommandService } from '../command-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   
   textoTurnos = TEXTOS.BTN_AGENDA_LARGO;

   constructor(private command:CommandService){

   }
}

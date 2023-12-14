import { Component } from '@angular/core';
import { TEXTOS } from 'src/app/constants';
import { CommandService } from '../command-service.service';

const TEXTO_LARGO = "";
const TEXTO_CORTO = "";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   textoLogin = TEXTOS.BTN_LOGIN;
   textoTurnos = TEXTOS.BTN_AGENDA_LARGO;

   constructor(private command:CommandService){

   }

   public goLogin(){
    this.command.command="login";
   }
}

import { Component } from '@angular/core';
import { TEXTOS } from 'src/app/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  textoTurnos: string = TEXTOS.BTN_AGENDA_CORTO;

}

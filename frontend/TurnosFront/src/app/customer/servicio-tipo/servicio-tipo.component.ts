import { Component, Input } from '@angular/core';
import { Model } from 'src/app/shared/class/model';

@Component({
  selector: 'app-servicio-tipo',
  templateUrl: './servicio-tipo.component.html',
  styleUrls: ['./servicio-tipo.component.scss']
})
export class ServicioTipoComponent {
  @Input() turno:Model | undefined;
  @Input() campo:string | undefined ;
  @Input() src:string | undefined;
  @Input() text:string | undefined;

  click():void{
    if(this.campo){
      let c= !this.turno?.getValue(this.campo);
      this.turno?.setValue(this.campo,c);
    }
  }

  style():string{
    if (this.campo) {
      if(this.turno?.getValue(this.campo)){
        return "selected";
      }else{
        return "unselected";
      }
    }
    
    return "";
  }

}

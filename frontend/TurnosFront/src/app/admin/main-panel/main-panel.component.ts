import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { PersistentService } from 'src/app/shared/services/persistent.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  panel:string ="turnos";

constructor(public dialogo: MatDialog,
  private persistencia:PersistentService){
  
}

  public cambiar(p:string):void{
    this.panel = p;
  }

  public salir():void{
    const dialogRef = this.dialogo.open(LogoutDialogComponent, {
          width: '200px',
          data:{}});
    
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.persistencia.delete("user");
      }
    })
  }
}

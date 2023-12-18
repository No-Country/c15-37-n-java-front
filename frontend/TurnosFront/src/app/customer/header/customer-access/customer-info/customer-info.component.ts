import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { format} from 'date-fns';
import { Turno } from 'src/app/shared/class/turno';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { User } from 'src/app/shared/class/user';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private persistence:PersistentService,
    public dialogo: MatDialog
  ) {}

  cerrarDialog(): void {
    this.dialogRef.close();
    //this.command.command = "landing";
  }

  formatFecha(f:Date):string{
    return format(f,"dd/MM/yyyy");
  }
  
  formatHora(h:Date):string{
    return format(h,"HH:mm");
  }

  formatServices(services:[]):string{
    return services.join(" ");
  }

  borrar(t:Turno):void{
    const dialogRef = this.dialogo.open(DeleteConfirmComponent, {
          width: '200px',
          data:{}});

    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        let user = this.persistence.get("user") as User;
        t.delete();
      }
    })
  }

  cerrarSesion():void{
    //console.log("clickea en cerrar sesion");
    
    const dialogRef = this.dialogo.open(LogoutDialogComponent, {
          width: '200px',
          data:{}});
    
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.persistence.delete("user");
        this.cerrarDialog();
      }
    })
  }

}

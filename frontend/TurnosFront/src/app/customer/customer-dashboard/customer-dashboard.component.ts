import { Component } from '@angular/core';

import { Turno } from 'src/app/shared/class/turno';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { User } from 'src/app/shared/class/user';
import {  MatDialog } from '@angular/material/dialog';
import { ThanksDialogComponent } from './thanks-dialog/thanks-dialog.component';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { CommandService } from '../command-service.service';


const key:string = "turno";

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  
})
export class CustomerDashboardComponent {

  turno: Turno;
  

  constructor(public dialog: MatDialog,
    private persistence:PersistentService,
    private command:CommandService) {
      
      if (!persistence.exist(key)) {
        this.turno = new Turno({})
        persistence.add(key,this.turno);
      }else{
        this.turno = persistence.get(key)
      }
  }
  
  public siguiente():void{
    if (
      this.turno.fecha && this.turno.hora && 
      (this.turno.corte || this.turno.peinado ||
        this.turno.color || this.turno.afeitado ) 
    ) {
      if(this.persistence.exist("user")){
          const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '400px',
          panelClass: 'dialog-container',
          data:{
              user: this.persistence.get("user"),
              turno: this.turno
            }}
            );

          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              const thanks = this.dialog.open(
                ThanksDialogComponent,
                {
                  panelClass: 'dialog-container',
                  width: '400px',
                  data:{}
                }
              );
              thanks.afterClosed().subscribe(result=>{
                const user= this.persistence.get("user") as User;
                user.turnos.push(this.turno);
                this.persistence.delete(key);
                this.command.command = "landing"
              });
            }
          });
      }else{
        this.command.intecept("login");
      }
      
      
    }else{
      console.log(this.turno);
      
    }
  }

  public atras():void{
    this.command.command = "landing"
  }

}

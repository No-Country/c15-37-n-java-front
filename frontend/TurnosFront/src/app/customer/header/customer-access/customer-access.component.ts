import { Component } from '@angular/core';
import { TEXTOS } from 'src/app/constants';
import { CommandService } from '../../command-service.service';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { User } from 'src/app/shared/class/user';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-access',
  templateUrl: './customer-access.component.html',
  styleUrls: ['./customer-access.component.scss']
})
export class CustomerAccessComponent {
  textoLogin = TEXTOS.BTN_LOGIN;

  constructor(public dialog: MatDialog,
    private command:CommandService,
    private persistence:PersistentService){

   }

  public isLoged():boolean{
    return this.persistence.exist("user");
  }

  get user():User{
    return this.persistence.get("user");
  }
  
  public goLogin(){
    this.command.command="login";
   }

  public showDialog(){
    const dialogRef = this.dialog.open(CustomerInfoComponent, {
          width: '400px',
          data:{
              user: this.persistence.get("user")
            }}
            );
  }
  
}

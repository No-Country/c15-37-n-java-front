import { Injectable } from '@angular/core';
import { CustomerModule } from './customer.module';

@Injectable({
  providedIn: 'any'
})
export class CommandService {
  private _command:string = "";
  private interecepted: string ="";

  constructor() {   

  }

  get command():string {
    return this._command;
  }

  set command(cmd:string){
    this._command = cmd;
  }

  public intecept(cmd:string):void{
    this.interecepted = this._command;
    this._command = cmd;
  }

  public goBack():void{
    this._command = this.interecepted;
    this.interecepted = "";
  }

  public proceed(cmd:string):void{
    if (this.interecepted !== "") {
      this.goBack();
    }else{
      this.command =cmd;
    }
  }
}

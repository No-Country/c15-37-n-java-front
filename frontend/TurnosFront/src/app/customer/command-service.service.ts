import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  _command:string = "";
  constructor() {   

  }

  get command():string {
    return this._command;
  }

  set command(cmd:string){
    this._command = cmd;
  }
}

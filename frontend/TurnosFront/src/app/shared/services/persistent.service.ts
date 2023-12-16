import { Injectable } from '@angular/core';

interface storedData {
  [key: string]: any; 
}


@Injectable({
  providedIn: 'root'
})
export class PersistentService {

  data:storedData;  

  constructor() { 
    this.data = {}
  }

  public add(key:string, dt:any):void{
    this.data[key] = dt;
  }

  public get(key:string):any{
    return this.data[key];
  }

  public exist(key:string):boolean{
    return this.data[key] !== undefined;
  }

  public delete(key:string):void{
    this.data[key]=undefined;
  }


}

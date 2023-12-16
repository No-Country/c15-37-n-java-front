import { Model } from "./model";

export class Turno extends Model{
    constructor(attr: {}) {
    super(attr,"id");
    /* id: number,
     nombre: string,
     token: string*/
  }

  get fecha():Date{
    return this.getValue("fecha");
  }

  set fecha(f:Date){
    this.setValue("fecha",f);
  }

  get hora(){
    return this.getValue("hora");
  }

  set hora(h:any){
    this.setValue("hora",h);
  }

  get corte():boolean{
    return this.getValue("corte");
  }

  get afeitado():boolean{
    return this.getValue("afeitado");
  }

  get color():boolean{
    return this.getValue("color");
  }

  get peinado():boolean{
    return this.getValue("peinado");
  }
}

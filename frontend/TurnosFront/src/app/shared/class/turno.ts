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

  get serviceList():any{
    let services=[];
    if(this.corte){
      services.push("Corte");
    }

    if(this.afeitado){
      services.push("Afeitado");
    }
    
    if(this.color){
      services.push("Color");
    }

    if(this.peinado){
      services.push("Peinado");
    }

    return services;
  }
}

import { Model } from "src/app/shared/class/model";

export class Mensaje extends Model{
    constructor(attr: {}, idAttr: string = '') {
        super(attr);
    }

    get nombre():string{
        return this.getValue("nombre");
    }

    get apellido():string{
        return this.getValue("apellido");
    }

    get email():string{
        return this.getValue("email");
    }

    get telefono():string{
        return this.getValue("telefono");
    }

    get mensaje():string{
        return this.getValue("mensaje");
    }

    set nombre(vl:string){
        this.setValue("nombre",vl);
    }

    set apellido(vl:string){
        this.setValue("apellido",vl);
    }

    set email(vl:string){
        this.setValue("email",vl);
    }

    set telefono(vl:string){
        this.setValue("telefono",vl);
    }

    set mensaje(vl:string){
        this.setValue("mensaje",vl);
    }
}

import { Collection } from "./collection";
import { Model } from "./model";
import { Turno } from "./turno";

export class User extends Model {
  _turnos:Collection<Turno>;
  
  constructor(attr: {}, idAttr: string = '') {
    super(attr);
    
    this._turnos = new Collection(Turno);
  }

  public get id(): number {
    return this.getValue('id');
  }

  public set id(value: number) {
    this.setValue('id', value);
  }

  public get nombre(): string {
    return this.getValue('nombre');
  }

  public set nombre(value: string) {
    this.setValue('nombre', value);
  }

  public get apellido():string{
    return this.getValue("apellido");
  }

  public set apellido(a:string){
    this.setValue("apellido",a);
  }

  public get email():string{
    return this.getValue("email");
  }

  public set email(e:string){
    this.setValue("email",e)
  }

  public get token(): string {
    return this.getValue('token');
  }

  public set token(value: string) {
    this.setValue('token', value);
  }

  public get password(): string {
    return this.getValue('password');
  }

  public set password(value: string) {
    this.setValue('password', value);
  }

  public get turnos():Collection<Turno>{
    return this._turnos;
  }  
}

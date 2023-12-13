import { CONNECTIONS } from 'src/app/constants';
import { HttpController } from './http-controler';
import { Model } from './model';

export class Collection<T> extends Array<T> {
  model: any;
  //parentAtt: string;
  //parentAttValue: string;
  static controller: HttpController;

  constructor(T:any, private _url:string="") {
    super();
    this.model = T;
    if(!Collection.controller){
      Collection.controller = 
        new HttpController(CONNECTIONS.BASE_PATH);
    }

  }

  public async fetch():Promise<any>{
    return Collection.controller.get(this._url)
      .then((response) => {
        //console.log(response); // Manejamos la respuesta aquí
        this.parse(response, Collection.controller);
        //ctrl.loaded.emit(c);
      })
      .catch((error) => {
        console.error(error); // Manejamos el error aquí
      });
  }

  public sinc():void{

  }

  public get url():string{
    return this._url;
  }

  public set url(u:string){
    this._url = u;
  }

  public undoAll():void{
    this.forEach((elemento:any)=>{
      elemento.revert();
    })
  }

  public parse(elems: any,ctrl:any=null): void {
    if(this.length > 0){
      this.splice(0,this.length);
    }
    let self = this;
    elems.forEach((elem:any) => {
      const modelInstance = new self.model(elem);
      modelInstance.loaded();
      modelInstance.fetch(ctrl)
      this.push(modelInstance);
    });
  }

}

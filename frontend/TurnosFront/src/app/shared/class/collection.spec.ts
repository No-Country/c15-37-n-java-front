import { Collection } from './collection';
import { HttpController } from './http-controler';
import { Model } from './model';
import { User } from './user';

let json = [
  {"id": 1,
     "nombre": "admin",
     "apellido": "admin",
     "email": "email@email.com",
     "password":"12345678",
     "telefono": "03-03456",
     "admin":true
    },
    {"id": 2,
     "nombre": "user",
     "apellido": "user",
     "email": "email@email.com",
     "password":"12345678",
     "telefono": "03-03456",
     "admin":false
    }
  ];

describe('Collection', async () => {
  let coleccion = new Collection(Model,"users?page=2");
  it('should create an instance', () => {
    expect(coleccion).toBeTruthy();
  });

  it('controller is a HttpControler', () => {
    expect(Collection.controller).toBeInstanceOf(HttpController);
  });
// probamos parse
  coleccion.parse(json);
  it('size = 2', () => {
    expect(coleccion.length).toBeGreaterThanOrEqual(2);
  });

  it('the content is model type', () => {
    expect(coleccion.at(0)).toBeInstanceOf(Model);
  });

  // probamos fetch
  it("should resolve with a response", async () => {
    let promise =coleccion.fetch();
    await promise;
    expect(promise).toBeDefined();
  });


  it('size >= 2 after fetch', async () => {
    let promise =coleccion.fetch();
    await promise;
    expect(coleccion.length).toBeGreaterThanOrEqual(2);
  });
  /*
  it('element 3 exist and is model type', () => {
    expect(coleccion.at(2)).toBeInstanceOf(Model);
  });
  */
  it('element 3 has a email = tobias.funke@reqres.in', () => {
    let m = coleccion.at(2) as Model;
    
    expect(m.getValue("email")).toEqual("tobias.funke@reqres.in");
  });


});

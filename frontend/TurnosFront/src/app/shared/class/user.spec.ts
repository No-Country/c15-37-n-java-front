import { User } from './user';

let json = {"id": 1,
     "nombre": "admin",
     "apellido": "admin",
     "email": "email@email.com",
     "password":"12345678",
     "telefono": "03-03456",
     "admin":true
    };

describe('User', () => {
  
  let model =new User(json);
  
  it('should create an instance', () => {
    expect(model).toBeTruthy();
  });
  
  it('test get metod with token return token', () => {
    
    expect(model.getValue("apellido")).toEqual("admin");
  });

  it('test get metod with nombre return admin', () => {
    
    expect(model.getValue("nombre")).toEqual("admin");
  });
});

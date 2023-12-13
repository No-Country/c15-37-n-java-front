import { Model } from './model';

let json = {"id": 1,
     "nombre": "admin",
     "token": "token",
     "password":"12345678"
    };

describe('Model', () => {
  it('should create an instance', () => {
    expect(new Model(json)).toBeTruthy();
  });
  
});

import { HttpController } from './http-controler';
import { Model } from './model';

const BASE_URL = "https://reqres.in/api/";
const controler = new HttpController(BASE_URL)

describe('HttpControler', () => {
  it('should create an instance', () => {
    expect(controler).toBeTruthy();
  });

  it('get returns a promise', () => {
    expect(controler.get<Model>("users/2")).toBeInstanceOf(Promise);
  });

});

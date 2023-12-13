import { Mensaje } from './mensaje';

describe('Mensaje', () => {
  const oMensaje =new Mensaje({
    nombre: "nombre",
    apellido: "apellido",
    email: "email",
    telefono: "telefono",
    mensaje: "mensaje"
  });
  
  it('should create an instance', () => {
    expect(oMensaje).toBeTruthy();
  });

  it('fields should contain data', () => {
    expect(oMensaje.nombre).toEqual("nombre");
    expect(oMensaje.apellido).toEqual("apellido");
    expect(oMensaje.telefono).toEqual("telefono");
    expect(oMensaje.email).toEqual("email");
    expect(oMensaje.mensaje).toEqual("mensaje");
  });

  it('fields should change data', () => {
    
    oMensaje.nombre= "juan";
    expect(oMensaje.nombre).toEqual("juan");
    
    oMensaje.apellido="perez";
    expect(oMensaje.apellido).toEqual("perez");
    
    oMensaje.telefono="123456";
    expect(oMensaje.telefono).toEqual("123456");
    
    oMensaje.email="email@email.com";
    expect(oMensaje.email).toEqual("email@email.com");
    
    oMensaje.mensaje="bla bla bla";
    expect(oMensaje.mensaje).toEqual("bla bla bla");
  });
});

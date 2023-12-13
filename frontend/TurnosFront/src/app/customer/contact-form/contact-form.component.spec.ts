import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';
import { Mensaje } from './mensaje';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should initialize correctly', () => {
    expect(component.formulario).toBeDefined();
    expect(component.formulario.controls).toBeDefined();
    expect(component.formulario.get("nombre")).toBeDefined();
    expect(component.formulario.get("apellido")).toBeDefined();
    expect(component.formulario.get("telefono")).toBeDefined();
    expect(component.formulario.get("email")).toBeDefined();
    expect(component.formulario.get("mensaje")).toBeDefined();
  });


  it('shouldn.t not assign any data ', () => {
    component.saveData();

    expect(component.oMensaje.nombre).toBeUndefined();
    expect(component.oMensaje.apellido).toBeUndefined();
    expect(component.oMensaje.telefono).toBeUndefined();
    expect(component.oMensaje.email).toBeUndefined();
    expect(component.oMensaje.mensaje).toBeUndefined();
  });


  it('should validate correctly', () => {
    // Valores válidos

    component.formulario.controls["nombre"].setValue('Juan');
    component.formulario.controls["apellido"].setValue('Pérez');
    component.formulario.controls["telefono"].setValue('1234567890');
    component.formulario.controls["email"].setValue('juan.perez@example.com');
    component.formulario.controls["mensaje"].setValue('Este es un mensaje de prueba.');

    expect(component.formulario.valid).toBeTruthy();

  });

/*it('dkdkdk',()=>{
  expect(component.formulario.controls["nombre"].value).toEqual("juan");
})
  
  it('should assign data ', () => {
    component.formulario.markAsDirty();
    
    component.saveData();

    expect(component.oMensaje.nombre).toEqual('Juan');
    expect(component.oMensaje.apellido).toEqual('Pérez');
    expect(component.oMensaje.telefono).toEqual('1234567890');
    expect(component.oMensaje.email).toEqual('juan.perez@example.com');
    expect(component.oMensaje.mensaje).toEqual('Este es un mensaje de prueba.');
  });
*/
  it('enviar should be enabled', () => {
    expect(component.formulario.controls["enviar"].disabled).toBeFalsy();
  });

  it('nombre should not validate correctly', () => {

    // Valores inválidos
    component.formulario.controls["nombre"].setValue('');
    expect(component.formulario.valid).toBeFalsy();
    expect(component.formulario.controls["nombre"].hasError('required')).toBeTruthy();

  });

  it('apellido should not validate correctly', () => {
    component.formulario.controls["apellido"].setValue('');
    expect(component.formulario.valid).toBeFalsy();
    expect(component.formulario.controls["apellido"].hasError('required')).toBeTruthy();

  });

  it('telefono should not validate correctly', () => {
    component.formulario.controls["telefono"].setValue('');
    expect(component.formulario.valid).toBeFalsy();
    expect(component.formulario.controls["telefono"].hasError('required')).toBeTruthy();

  });

  it('email empty should not validate correctly', () => {
    component.formulario.controls["email"].setValue('');
    expect(component.formulario.valid).toBeFalsy();
    expect(component.formulario.controls["email"].hasError('required')).toBeTruthy();
    //expect(component.formulario.controls["email"].hasError('invalid')).toBeTruthy();

  });

  it('email djdj@ should not validate correctly', () => {
    component.formulario.controls["email"].setValue('djdj@');
    expect(component.formulario.valid).toBeFalsy();
    expect(component.formulario.controls["email"].hasError('email')).toBeTruthy();
  });

  it('mensaje should not validate correctly', () => {

    component.formulario.controls["mensaje"].setValue('');
    expect(component.formulario.valid).toBeFalsy();
    expect(component.formulario.controls["mensaje"].hasError('required')).toBeTruthy();


    
  });

  it('shouldn.t not assign any data after fails', () => {
    component.oMensaje = new Mensaje({});
    
    component.saveData();

    expect(component.oMensaje.nombre).toBeUndefined();
    expect(component.oMensaje.apellido).toBeUndefined();
    expect(component.oMensaje.telefono).toBeUndefined();
    expect(component.oMensaje.email).toBeUndefined();
    expect(component.oMensaje.mensaje).toBeUndefined();
  });
/*
  it('enviar should not be enabled', () => {
    expect(component.formulario.controls["enviar"].disabled).toBeTruthy();
  });
  */
});

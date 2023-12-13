import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from './mensaje';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  formulario: FormGroup;
  oMensaje :Mensaje;

  constructor(private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mensaje: ["", [Validators.required]],
      enviar: [true],
    });
    this.oMensaje = new Mensaje({});
    
  }

  
  saveData() {
    this.oMensaje = new Mensaje({});
    if(this.formulario.valid){
      this.oMensaje.nombre = this.formulario.controls["nombre"].value;
      this.oMensaje.apellido = this.formulario.controls["apellido"].value;
      this.oMensaje.email = this.formulario.controls["email"].value;
      this.oMensaje.telefono = this.formulario.controls["telefono"].value;
      this.oMensaje.mensaje = this.formulario.controls["mensaje"].value;
    }
  }

  get nombre() {
    return this.formulario.get("nombre");
  }

  get apellido() {
    return this.formulario.get("apellido");
  }

  get telefono() {
    return this.formulario.get("telefono");
  }

  get email() {
    return this.formulario.get("email");
  }

  get mensaje() {
    return this.formulario.get("mensaje");
  }
}

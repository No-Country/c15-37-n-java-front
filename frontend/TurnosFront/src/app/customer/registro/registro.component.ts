import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandService } from '../command-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  formulario: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private command:CommandService){
    this.formulario = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      enviar: [true],
    });
  
    
  }

  saveData() {
    throw new Error('Method not implemented.');
  }

  get nombre() {
    return this.formulario.get("nombre");
  }

  get apellido() {
    return this.formulario.get("apellido");
  }

  get email() {
    return this.formulario.get("email");
  }

  get password(){
    return this.formulario.get("password");
  }

  doLogin():void{
    this.command.command = "login";
  }
}

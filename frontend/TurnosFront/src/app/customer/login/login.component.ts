import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandService } from '../command-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loguinform: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private command:CommandService){
    this.loguinform = this.formBuilder.group({
      
      user: ["", [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      enviar: [true],
    });
  }

  onEnviar($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }

  doRegister() {
    this.command.command ="registro";
  }
}

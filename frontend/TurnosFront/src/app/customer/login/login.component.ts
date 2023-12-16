import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandService } from '../command-service.service';
import { User } from 'src/app/shared/class/user';
import { PersistentService } from 'src/app/shared/services/persistent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loguinform: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private command:CommandService,

  
    private persistence:PersistentService){
    this.loguinform = this.formBuilder.group({
      user: ["a@a.a", [Validators.required, Validators.email]],
      password: ["12345678", [Validators.required, Validators.minLength(8)]],
      enviar: [true],
    });
  }

  onEnviar($event: MouseEvent) {
    this.persistence.add("user",
      new User(
        {
          nombre: "juan",
          apellido: "perez",
          email: this.loguinform.get("user")?.value
        }
      ));

    this.command.proceed("landing");
  }

  doRegister() {
    this.command.command ="registro";
  }
}

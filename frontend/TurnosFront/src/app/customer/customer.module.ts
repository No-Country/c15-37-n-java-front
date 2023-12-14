import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BtnTurnosComponent } from './btn-turnos/btn-turnos.component';
import { LinkBarComponent } from './link-bar/link-bar.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTipoComponent } from './servicio-tipo/servicio-tipo.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PageSwitcherComponent } from './page-switcher/page-switcher.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimeSelectorComponent } from './time-selector/time-selector.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BtnTurnosComponent,
    LinkBarComponent,
    IconBarComponent,
    ContactFormComponent,
    ServicioTipoComponent,
    CalendarioComponent,
    LandingPageComponent,
    LoginComponent,
    RegistroComponent,
    PageSwitcherComponent,
    HeaderComponent,
    FooterComponent,
    TimeSelectorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  

  exports:[PageSwitcherComponent]
  
})
export class CustomerModule { }

import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BtnTurnosComponent } from './btn-turnos/btn-turnos.component';
import { LinkBarComponent } from './link-bar/link-bar.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BtnTurnosComponent,
    LinkBarComponent,
    IconBarComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { TurnosPanelComponent } from './turnos-panel/turnos-panel.component';
import { ClientesPanelComponent } from './clientes-panel/clientes-panel.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPanelComponent,
    TurnosPanelComponent,
    ClientesPanelComponent,
    LogoutDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[MainPanelComponent]
})
export class AdminModule { }

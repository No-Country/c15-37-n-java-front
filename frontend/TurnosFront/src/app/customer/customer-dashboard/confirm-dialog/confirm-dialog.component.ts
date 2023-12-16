import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarDialog(): void {
    this.dialogRef.close();
  }

  aceptarDialog(): void {
    // Realizar la acción deseada al presionar "Aceptar"
    console.log('Botón Aceptar presionado');
    // Puedes realizar acciones adicionales aquí, como llamar a un servicio, actualizar datos, etc.
    // ...

    // Cierra el diálogo después de realizar la acción
    this.dialogRef.close(true);
  }
}

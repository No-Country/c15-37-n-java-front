import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Turno } from 'src/app/shared/class/turno';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarDialog(): void {
    this.dialogRef.close();
    //this.command.command = "landing";
  }

}

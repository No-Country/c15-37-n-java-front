import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommandService } from '../../command-service.service';


@Component({
  selector: 'app-thanks-dialog',
  templateUrl: './thanks-dialog.component.html',
  styleUrls: ['./thanks-dialog.component.scss']
})
export class ThanksDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ThanksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private command:CommandService
  ) {}

  cerrarDialog(): void {
    this.dialogRef.close();
    //this.command.command = "landing";
  }
}

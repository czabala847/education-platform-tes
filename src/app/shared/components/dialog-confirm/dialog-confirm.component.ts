import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
})
export class DialogConfirmComponent {
  constructor(
    public dialog: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  close(): void {
    this.dialog.close(false);
  }
  confirm(): void {
    this.dialog.close(true);
  }
}

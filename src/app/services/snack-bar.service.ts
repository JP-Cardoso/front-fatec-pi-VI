import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  success(msg: string) {
    this.matSnackBar.open(msg, 'ok',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
    )
  }

  error(msg: string) {
    this.matSnackBar.open(msg, 'ok',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
    )
  }
}

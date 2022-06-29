import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { Injectable } from "@angular/core";

interface args {
  msg: string;
  action?: string;
}

@Injectable({
  providedIn: "root"
})
export class SnackBar {
  constructor(private snackBar: MatSnackBar) { }

  public success({ msg, action = "" }: args) {
    this.snackBar.open(msg, action, {
      duration: 5000,
      panelClass: ['snackbar-success']
    });
  }

  public error({ msg, action = "" }: args) {
    this.snackBar.open(msg, action, {
      duration: 5000,
      panelClass: ['snackbar-error']
    });
  }

  public warn({ msg, action = "" }: args) {
    this.snackBar.open(msg, action, {
      duration: 5000,
      panelClass: ['snackbar-warning']
    });
  }
}

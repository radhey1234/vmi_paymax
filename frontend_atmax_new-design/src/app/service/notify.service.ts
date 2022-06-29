import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Injectable } from '@angular/core';
import { SnackBar } from '../shared/notification';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private snackbar: SnackBar,
    private _cookieService: CookieService,
    private router: Router
  ) {
  }

  showAlert(status: Number, message: string) {
    switch (status) {
      case 200:
        this.snackbar.success({
          msg: message,
          action: 'Close'
        })
        break;
      case 500:
        this.snackbar.warn({
          msg: message,
          action: 'Close'
        });
        break;
      case 401:
        this._cookieService.removeAll();
        this.snackbar.warn({
          msg: "Unauthorized access, Please Login agian...",
          action: 'Close'
        });
        this.router.navigate(['/']);
        break;
      default:
        this.snackbar.error({
          msg: (message) ? message : 'Unable to retrive the message',
          action: 'Close'
        });
        break;
    }
  }
}

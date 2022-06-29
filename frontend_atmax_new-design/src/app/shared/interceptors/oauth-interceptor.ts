import { NotifyService } from './../../service/notify.service';
import { CookieService } from "ngx-cookie";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaderResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { SnackBar } from '../notification';

@Injectable()
export class OauthInterceptor implements HttpInterceptor {
  constructor(private _cookieService: CookieService, private route: Router,
    private snackbar: SnackBar,
    private notifyService: NotifyService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._cookieService.get("token");
    if (token) {
      return next
        .handle(
          req.clone({
            headers: req.headers.set("Authorization", `Bearer ${token}`)
          })
        )
        .pipe(
          catchError(err => {
            if (err instanceof HttpErrorResponse) {
              if (err.status != 500) {
                this.notifyService.showAlert(err.error.status, err.error.message);
              }
              else if (err.status == 500) {
                this.snackbar.error({
                  msg: "Unautorized"
                })
                this._cookieService.removeAll();
                this.route.navigate(["/"]);
              }
              return new Observable<HttpEvent<any>>();
            }
          })
        );
    }

    return next.handle(req);
  }
}

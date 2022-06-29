import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie";
import { SnackBar } from "./../../shared/notification/SnackBar";
import {
  AuthActionTypes,
  AuthLoadSuccess,
  AuthLoadFail
} from "./../actions/auth.actions";
import { ApiService } from "./../../service/api.service";
import { Injectable } from "@angular/core";
import { AuthActions } from "../actions";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable()
export class AuthEffect {
  authState$: Observable<any>;
  constructor(
    private action$: Actions<AuthActions>,
    private apiService: ApiService,
    private snackbar: SnackBar,
    private _cookieService: CookieService,
    private router: Router,
    private location: Location

  ) { }

  @Effect()
  loadAuth$ = this.action$.pipe(
    ofType(AuthActionTypes.AUTH_LOAD),
    switchMap(action =>
      this.apiService.authLogin(action.email, action.password).pipe(
        map(res => new AuthLoadSuccess(res)),
        catchError(error => of(new AuthLoadFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  loadAuthFail$ = this.action$.pipe(
    ofType(AuthActionTypes.AUTH_LOAD_FAIL),
    map(action => {
      this.snackbar.error({
        msg: action.payload.error.message
      });
    })
  );

  @Effect({
    dispatch: false
  })
  loadAuthSuccess$ = this.action$.pipe(
    ofType(AuthActionTypes.AUTH_LOAD_SUCCESS),
    map(action => {
      this._cookieService.put("auth", JSON.stringify(action.payload));
      this._cookieService.put("isLoggedIn", "1");
      this._cookieService.put("token", action.payload.token);
      this.snackbar.success({
        msg: "Login Successfull"
      });
      this.router.navigate(["/admin"], {
        state: { package: this._cookieService.get("ptype") }
      });
    })
  );


  @Effect({
    dispatch: false
  })
  authCookieExist$ = this.action$.pipe(
    ofType(AuthActionTypes.AUTH_COOKIE_EXIST),
    map(action => {
      this._cookieService.put("auth", JSON.stringify(action.payload));
      this._cookieService.put("isLoggedIn", "1");
      if (this.location.path() == '/login' || this.location.path() == '') {
        this.router.navigate(["/admin"], {
          state: { package: this._cookieService.get("ptype") }
        });

        this.snackbar.warn({
          msg: "Alreday Logged In",
          action: "Close"
        });
      }
    })
  );

  @Effect({
    dispatch: false
  })
  authLogout$ = this.action$.pipe(
    ofType(AuthActionTypes.AUTH_LOGOUT),
    map(action => {
      this._cookieService.removeAll();
      this.snackbar.success({
        msg: "Logout Successfull"
      });
      this.router.navigate(['/'])
      // console.log(this._cookieService.getAll())
    })
  );
}

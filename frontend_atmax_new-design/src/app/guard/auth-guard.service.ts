import { getAuthValue } from './../store/selectors/auth.selectors';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie'
import { Store } from '@ngrx/store';
import { AuthCookieExist } from '../store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authInfo: any;
  authState$: Observable<any>;
  constructor(public router: Router, public location: Location, private _cookieService: CookieService, private store: Store<{}>) {
    this.authState$ = this.store.select(getAuthValue);
  }

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> {
    if (this._cookieService.get("isLoggedIn") != "1") {
      this.router.navigate(["/login"]);
      return of(false);
    } else {
      return this.getStore().pipe(
        switchMap(status => {
          return of(status);
        }),
        catchError(() => of(false))
      );
    }
  }

  private getStore() {
    return this.authState$.pipe(
      map(state => {
        if (state) {
          return true;
        } else {
          this.authInfo = this._cookieService.get("auth");
          this.authInfo = JSON.parse(this.authInfo);
          if (this.authInfo.token) {
            this.store.dispatch(
              new AuthCookieExist({
                username: this.authInfo.username,
                token: this.authInfo.token
              })
            );
            return true;
          } else {
            return false;
          }
        }
      })
    );
  }
}

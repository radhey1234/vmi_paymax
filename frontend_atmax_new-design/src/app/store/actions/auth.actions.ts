import { Action } from '@ngrx/store'
import { HttpErrorResponse } from '@angular/common/http';
export enum AuthActionTypes {
    AUTH_LOAD = '[AUTH] AUTH LOAD',
    AUTH_LOAD_SUCCESS = '[AUTH] AUTH LOAD SUCCESS',
    AUTH_LOAD_FAIL = '[AUTH] LOGIN LOAD FAIL',
    AUTH_COOKIE_EXIST = '[AUTH] COOKIE EXIST',
    AUTH_LOGOUT = '[AUTH] LOGOUT'
}

export class AuthLoad implements Action {
    readonly type = AuthActionTypes.AUTH_LOAD;
    public constructor(public email: string, public password: string) { }
}

export class AuthLoadSuccess implements Action {
    readonly type = AuthActionTypes.AUTH_LOAD_SUCCESS;
    constructor(public payload: any) { }
}

export class AuthCookieExist implements Action {
    readonly type = AuthActionTypes.AUTH_COOKIE_EXIST;
    constructor(public payload: any) { }
}
export class AuthLoadFail implements Action {
    readonly type = AuthActionTypes.AUTH_LOAD_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export class AuthLogout implements Action {
    readonly type = AuthActionTypes.AUTH_LOGOUT;
}

export type AuthActions = AuthLoad | AuthLoadSuccess | AuthLoadFail | AuthLogout | AuthCookieExist;

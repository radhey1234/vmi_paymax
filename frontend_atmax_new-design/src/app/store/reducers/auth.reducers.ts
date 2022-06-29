import { AuthActionTypes } from './../actions/auth.actions';
import { AuthActions } from './../actions/auth.actions';
import { AuthModel } from '../../models/auth.model';

export const AuthInitialState: AuthModel = {
    name: null,
    email: null,
    token: null,
    isLoggedIn: null,
}

export function AuthReducers(
    state = AuthInitialState,
    actions: AuthActions
): AuthModel {
    switch (actions.type) {
        case AuthActionTypes.AUTH_LOAD:
            return {
                ...state
            }
        case AuthActionTypes.AUTH_LOAD_SUCCESS:
            var emailSplit = actions.payload.username.split('@');
            return {
                ...state,
                name: emailSplit.length > 0 ? emailSplit[0] : actions.payload.username,
                email: actions.payload.username,
                token: actions.payload.token,
                isLoggedIn: '1'
            }
        case AuthActionTypes.AUTH_COOKIE_EXIST:
            var emailSplit = actions.payload.username.split('@');
            return {
                ...state,
                name: emailSplit.length > 0 ? emailSplit[0] : actions.payload.username,
                email: actions.payload.username,
                token: actions.payload.token,
                isLoggedIn: '1'
            }
        case AuthActionTypes.AUTH_LOAD_FAIL:
            return {
                ...state,
                name: null,
                email: null,
                isLoggedIn: null,
                token: null
            }
        case AuthActionTypes.AUTH_LOGOUT:
            return {
                ...state,
                name: null,
                email: null,
                isLoggedIn: null,
                token: null
            }
    }
    return state;
}

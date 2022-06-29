import { AuthModel } from '../../models/auth.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthState = createFeatureSelector<AuthModel>('auth');

export const getAuthValue = createSelector(
    getAuthState,
    state => state.token
)

export const getAuthEmail = createSelector(
    getAuthState,
    state => state.email
)

export const getAuthName = createSelector(
    getAuthState,
    state => state.name
)

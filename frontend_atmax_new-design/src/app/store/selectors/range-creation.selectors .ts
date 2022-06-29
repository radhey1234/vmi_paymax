import { RangeCreationModel } from './../../models/range-creation.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getRangeCreationState = createFeatureSelector<RangeCreationModel>("rangeCreationData");

export const getRangeCreationData = createSelector(
    getRangeCreationState,
    state => state.data
);
import { PopulationSelectionModel } from './../../models/population-selection.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getPopulationSelectionState = createFeatureSelector<PopulationSelectionModel>("populationSelection");

export const getPopulationSelectionData = createSelector(
    getPopulationSelectionState,
    state => state.data
);
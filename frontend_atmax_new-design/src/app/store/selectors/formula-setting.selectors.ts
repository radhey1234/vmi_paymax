import { FormulaSettingModel } from './../../models/formula-setting.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getFormulaSettingState = createFeatureSelector<FormulaSettingModel>("formulaSettingData");

export const getFormulaSettingData = createSelector(
    getFormulaSettingState,
    state => state.data
);
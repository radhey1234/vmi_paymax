import { state } from '@angular/animations';
import { EmployeeEligibilityExclusionModel } from './../../models/employee-eligibility-exclusion.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getEmployeeEligibilitExclusion = createFeatureSelector<EmployeeEligibilityExclusionModel>("employeeEligibilityExclusion");

export const getEmployeeEligibilitExclusionData = createSelector(
    getEmployeeEligibilitExclusion,
    state => state.data
);

export const getEmployeeEligibilityEditState = createSelector(
    getEmployeeEligibilitExclusion,
    state => (state.edit) ? state.edit.loading : false,
)
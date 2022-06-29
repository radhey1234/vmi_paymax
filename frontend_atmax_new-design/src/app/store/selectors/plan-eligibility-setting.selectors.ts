import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlanEligibilityModel } from 'src/app/models/plan-eligibility-setting.model';

export const getPlanEligibilityState = createFeatureSelector<PlanEligibilityModel>('planEligibility');

export const getPlanEligibilityData = createSelector(
  getPlanEligibilityState,
    state => state.data
)



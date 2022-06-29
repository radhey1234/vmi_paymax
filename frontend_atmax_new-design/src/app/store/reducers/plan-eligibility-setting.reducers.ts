import { PlanEligibilityModel } from "src/app/models/plan-eligibility-setting.model";
import { PlanEligibilityActions, PlanEligibilityActionTypes } from "../actions/plan-eligibility-setting.actions";

export const PlanEligibilityInitialState: PlanEligibilityModel = {
  loading: false,
  loaded: false,
  data: null
};

export function AlanEligibilityReducers(
  state = PlanEligibilityInitialState,
  actions: PlanEligibilityActions
): PlanEligibilityModel {
  switch (actions.type) {
    case PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: actions.payload
      };
    case PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
  }
  return state;
}

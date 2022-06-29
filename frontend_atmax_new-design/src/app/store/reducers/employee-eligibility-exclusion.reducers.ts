import { EmployeeElgibiltyExclusionActions, EmployeeElgibiltyExclusionActionTypes } from './../actions/employee-eligibility-exclusion.actions';
import { EmployeeEligibilityExclusionModel } from './../../models/employee-eligibility-exclusion.model';
export const EmployeeEligibilityExclusionInitialState: EmployeeEligibilityExclusionModel = {
    loading: false,
    loaded: false,
    status: null,
    data: null
}

export function EmployeeEligibilityExclusionReducers(
    state = EmployeeEligibilityExclusionInitialState,
    action: EmployeeElgibiltyExclusionActions
): EmployeeEligibilityExclusionModel {

    switch (action.type) {
        case EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION:
            return {
                ...state,
                loading: true,
                loaded: false,
                status: null,
                data: null
            }
        case EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                status: action.payload.status,
                data: action.payload
            }

        case EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                status: null,
                data: null
            }
        case EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION:
            return {
                ...state,
                edit: {
                    loading: true,
                    loaded: false
                }
            }
        case EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION_SUCCESS:
            return {
                ...state,
                edit: {
                    loading: false,
                    loaded: true
                }
            }

        case EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION_FAIL:
            return {
                ...state,
                edit: {
                    loading: false,
                    loaded: true
                }
            }

    }
    return state;
}
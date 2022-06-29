import { FormulaSettingActions, FormulaSettingActionTypes } from './../actions/formula-setting.actions';
import { FormulaSettingModel } from './../../models/formula-setting.model';
export const formulaSettingInitialState: FormulaSettingModel = {
    loading: false,
    loaded: false,
    status: null,
    data: null
}

export function FormulaSettingReducers(
    state = formulaSettingInitialState,
    action: FormulaSettingActions
): FormulaSettingModel {

    switch (action.type) {
        case FormulaSettingActionTypes.FORMULA_SETTING:
            return {
                ...state,
                loading: true,
                loaded: false,
                status: null,
                data: null
            }
        case FormulaSettingActionTypes.FORMULA_SETTING_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                status: action.payload.status,
                data: action.payload
            }

        case FormulaSettingActionTypes.FORMULA_SETTING_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                status: null,
                data: null
            }

    }
    return state;
}
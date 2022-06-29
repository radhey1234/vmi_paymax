import { RangeCreationActions, RangeCreationActionTypes } from './../actions/range-creation.actions';
import { RangeCreationModel } from './../../models/range-creation.model';
export const rangeCreationInitialState: RangeCreationModel = {
    loading: false,
    loaded: false,
    status: null,
    data: null
}

export function RangeCreationReducers(
    state = rangeCreationInitialState,
    action: RangeCreationActions
): RangeCreationModel {

    switch (action.type) {
        case RangeCreationActionTypes.RANGE_CREATION:
            return {
                ...state,
                loading: true,
                loaded: false,
                status: null,
                data: null
            }
        case RangeCreationActionTypes.RANGE_CREATION_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                status: action.payload.status,
                data: action.payload
            }

        case RangeCreationActionTypes.RANGE_CREATION_FAIL:
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
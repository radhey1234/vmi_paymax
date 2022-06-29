import { PopulationSelectionActions, PopulationSelectionActionTypes } from './../actions/population-selection.actions';
import { PopulationSelectionModel } from './../../models/population-selection.model';
export const populationSelectionInitialState: PopulationSelectionModel = {
    loading: false,
    loaded: false,
    status: null,
    data: null
}

export function PopulationSelectionReducers(
    state = populationSelectionInitialState,
    action: PopulationSelectionActions
): PopulationSelectionModel {

    switch (action.type) {
        case PopulationSelectionActionTypes.POPULATION_SELECTION:
            return {
                ...state,
                loading: true,
                loaded: false,
                status: null,
                data: null
            }
        case PopulationSelectionActionTypes.POPULATION_SELECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                status: action.payload.status,
                data: action.payload
            }

        case PopulationSelectionActionTypes.POPULATION_SELECTION_FAIL:
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
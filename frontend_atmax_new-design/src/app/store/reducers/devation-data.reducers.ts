import { DeviationListModel } from '../../models/data-preparation.model';
import { DataPreparationActions, DataPreparationActionTypes } from './../actions/data-preparation.actions';

export const defaultDevationData = [
    {
        Deviationlist: "Blank Employee IDs",
        Deviationdata: "0"
    },
    {
        Deviationlist: "Blank Date of Joining",
        Deviationdata: "0"
    }
]
export const DevationDataInitialState: DeviationListModel = {
    loading: false,
    loaded: false,
    data: defaultDevationData
}

export function DevationDataReducers(
    state = DevationDataInitialState,
    actions: DataPreparationActions
): DeviationListModel {
    switch (actions.type) {
        case DataPreparationActionTypes.DEVATION_DATA_LOAD:
            return {
                ...state,
                loading: true,
                loaded: false,
                data: defaultDevationData
            }

        case DataPreparationActionTypes.DEVATION_DATA_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [
                    { Deviationlist: "Blank Employee IDs", Deviationdata: actions.payload['blankEmployeeIds'] },
                    {
                        Deviationlist: "Blank Date of Joining",
                        Deviationdata: actions.payload['blankDateOfJoining']
                    }
                ]
            }

        case DataPreparationActionTypes.SUMMARY_DATA_LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }
    }
    return state;
}


import { DataPreparationActions, DataPreparationActionTypes } from './../actions/data-preparation.actions';
import { UploadDataSummeryModel } from '../../models/data-preparation.model';

export const defaultSummaryData = [
    { datasummery: "No of employees uploaded", data: "0" },
    {
        datasummery: "Min age as per date of Birth",
        data: "0"
    },
    {
        datasummery: "Max age as per date of Birth",
        data: "0"
    },
    {
        datasummery: "Min CTC",
        data: "0"
    },
    {
        datasummery: "Max CTC",
        data: "0"
    },
    {
        datasummery: "Total CTC of uploaded data",
        data: "0"
    },
    {
        datasummery: "Number of Grades",
        data: "0"
    }
]
export const DataSummaryInitialState: UploadDataSummeryModel = {
    loading: false,
    loaded: false,
    data: defaultSummaryData
}

export function UploadedDataSummaryReducers(
    state = DataSummaryInitialState,
    actions: DataPreparationActions
): UploadDataSummeryModel {
    switch (actions.type) {
        case DataPreparationActionTypes.SUMMARY_DATA_LOAD:
            return {
                ...state,
                loading: true,
                loaded: false,
                data: defaultSummaryData
            }

        case DataPreparationActionTypes.SUMMARY_DATA_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                // data: [
                //     { datasummery: "No of employees uploaded", data: actions.payload['countAllEmployes'] },
                //     {
                //         datasummery: "Min age as per date of Birth",
                //         data: actions.payload['minDob']
                //     },
                //     {
                //         datasummery: "Max age as per date of Birth",
                //         data: actions.payload['maxDob']
                //     },
                //     {
                //         datasummery: "Min CTC",
                //         data: actions.payload['minCTC2']
                //     },
                //     {
                //         datasummery: "Max CTC",
                //         data: actions.payload['maxCTC2']
                //     },
                //     {
                //         datasummery: "Total CTC of uploaded data",
                //         data: actions.payload['calculatedCTC']
                //     },
                //     {
                //         datasummery: "Number of Grades",
                //         data: actions.payload['totalGrade']
                //     }
                // ]
                data: [
                    { datasummery: "No of employees uploaded", data: actions.payload['total_employees'] },
                    {
                        datasummery: "Min age as per date of Birth",
                        data: actions.payload['minimum_dob']
                    },
                    {
                        datasummery: "Max age as per date of Birth",
                        data: actions.payload['maximum_dob']
                    },
                    {
                        datasummery: "Min CTC",
                        data: actions.payload['minimum_ctc']
                    },
                    {
                        datasummery: "Max CTC",
                        data: actions.payload['maximum_ctc']
                    },
                    {
                        datasummery: "Total CTC of uploaded data",
                        data: actions.payload['total_ctc']
                    },
                    {
                        datasummery: "Number of Grades",
                        data: actions.payload['grade']
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

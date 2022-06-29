import { PreviouslyUploadedFilesModel } from "src/app/models/data-preparation.model";
import { DataPreparationActions, DataPreparationActionTypes } from '../actions/data-preparation.actions';

export const PreviouslyUploadedFilesInitialState: PreviouslyUploadedFilesModel = {
  loading: false,
  loaded: false,
  data: null
};

export function PreviouslyUploadedFilesReducers(
  state = PreviouslyUploadedFilesInitialState,
  actions: DataPreparationActions
): PreviouslyUploadedFilesModel {
  switch (actions.type) {
    case DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD_SUCCESS:
      return {
        ...state,
        data: actions.payload
      };
    case DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
  }
  return state;
}

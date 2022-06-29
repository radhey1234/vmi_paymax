import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
export enum DataPreparationActionTypes {
    SUMMARY_DATA_LOAD = '[DATA PREPARATION] SUMMARY DATA LOAD',
    SUMMARY_DATA_LOAD_SUCCESS = '[DATA PREPARATION] SUMMARY DATA LOAD SUCCESS',
    SUMMARY_DATA_LOAD_FAIL = '[DATA PREPARATION] SUMMARY DATA LOAD FAIL',

    DEVATION_DATA_LOAD = '[DATA PREPARATION] DEVATION DATA LOAD',
    DEVATION_DATA_LOAD_SUCCESS = '[DATA PREPARATION] DEVATION DATA LOAD SUCCESS',
    DEVATION_DATA_LOAD_FAIL = '[DATA PREPARATION] DEVATION DATA LOAD FAIL',

    PREVIOUSLY_UPLOADED_FILES_LOAD = '[DATA PREPARATION] PREVIOUSLY UPLOADED FILES LOAD',
    PREVIOUSLY_UPLOADED_FILES_LOAD_SUCCESS = '[DATA PREPARATION] PREVIOUSLY UPLOADED FILES LOAD SUCCESS',
    PREVIOUSLY_UPLOADED_FILES_LOAD_FAIL = '[DATA PREPARATION] PREVIOUSLY UPLOADED FILES LOAD FAIL',


    PREVIOUSLY_UPLOADED_FILES_DELETE = '[DATA PREPARATION] PREVIOUSLY UPLOADED FILES DELETE',
    PREVIOUSLY_UPLOADED_FILES_DELETE_SUCCESS = '[DATA PREPARATION] PREVIOUSLY UPLOADED FILES DELETE SUCCESS',
    PREVIOUSLY_UPLOADED_FILES_DELETE_FAIL = '[DATA PREPARATION] PREVIOUSLY UPLOADED FILES DELETE FAIL',




}

export class SummamryDataLoad implements Action {
    readonly type = DataPreparationActionTypes.SUMMARY_DATA_LOAD;
}
export class SummamryDataLoadSuccess implements Action {
    readonly type = DataPreparationActionTypes.SUMMARY_DATA_LOAD_SUCCESS;
    constructor(public payload: any) { }

}
export class SummamryDataLoadFail implements Action {
    readonly type = DataPreparationActionTypes.SUMMARY_DATA_LOAD_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}


export class DevationDataLoad implements Action {
    readonly type = DataPreparationActionTypes.DEVATION_DATA_LOAD;
}
export class DevationDataLoadSuccess implements Action {
    readonly type = DataPreparationActionTypes.DEVATION_DATA_LOAD_SUCCESS;
    constructor(public payload: any) { }

}
export class DevationDataLoadFail implements Action {
    readonly type = DataPreparationActionTypes.DEVATION_DATA_LOAD_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export class PreviouslyUploadedFilesLoad implements Action {
    readonly type = DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD;
}
export class PreviouslyUploadedFilesLoadSuccess implements Action {
    readonly type = DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD_SUCCESS;
    constructor(public payload: any) { }

}
export class PreviouslyUploadedFilesLoadFail implements Action {
    readonly type = DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export class PreviouslyUploadedFilesDelete implements Action {
    readonly type = DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_DELETE;
    constructor(public id: any) { }
}
export class PreviouslyUploadedFilesDeleteSuccess implements Action {
    readonly type = DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_DELETE_SUCCESS;
    constructor(public payload: any) { }

}
export class PreviouslyUploadedFilesDeleteFail implements Action {
    readonly type = DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_DELETE_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export type DataPreparationActions = SummamryDataLoad
    | SummamryDataLoadSuccess
    | SummamryDataLoadFail
    | DevationDataLoad
    | DevationDataLoadSuccess
    | DevationDataLoadFail
    | PreviouslyUploadedFilesLoad
    | PreviouslyUploadedFilesLoadSuccess
    | PreviouslyUploadedFilesLoadFail
    | PreviouslyUploadedFilesDelete
    | PreviouslyUploadedFilesDeleteSuccess
    | PreviouslyUploadedFilesDeleteFail
    ;

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
export enum PopulationSelectionActionTypes {

    POPULATION_SELECTION = "[POPULATION_SELECTION] LOAD",
    POPULATION_SELECTION_SUCCESS = "[POPULATION_SELECTION] LOAD SUCCESS",
    POPULATION_SELECTION_FAIL = "[POPULATION_SELECTION] LOAD FAIL",

    ADD_POPULATION_SELECTION = "[POPULATION_SELECTION] ADD",
    ADD_POPULATION_SELECTION_SUCCESS = "[POPULATION_SELECTION] ADD SUCCESS",
    ADD_POPULATION_SELECTION_FAIL = "[POPULATION_SELECTION] ADD FAIL",

    EDIT_POPULATION_SELECTION = "[POPULATION_SELECTION] EDIT",
    EDIT_POPULATION_SELECTION_SUCCESS = "[POPULATION_SELECTION] EDIT SUCCESS",
    EDIT_POPULATION_SELECTION_FAIL = "[POPULATION_SELECTION] EDIT FAIL",


    COPY_POPULATION_SELECTION = "[POPULATION_SELECTION] COPY",
    COPY_POPULATION_SELECTION_SUCCESS = "[POPULATION_SELECTION] COPY SUCCESS",
    COPY_POPULATION_SELECTION_FAIL = "[POPULATION_SELECTION] COPY FAIL",

    DELETE_POPULATION_SELECTION = "[POPULATION_SELECTION] DELETE",
    DELETE_POPULATION_SELECTION_SUCCESS = "[POPULATION_SELECTION] DELETE SUCCESS",
    DELETE_POPULATION_SELECTION_FAIL = "[POPULATION_SELECTION] DELETE FAIL",
}



export class PopulationSelectionLoad implements Action {
    readonly type = PopulationSelectionActionTypes.POPULATION_SELECTION;
}

export class PopulationSelectionSuccess implements Action {
    readonly type = PopulationSelectionActionTypes.POPULATION_SELECTION_SUCCESS;
    public constructor(public payload: any) { }
}

export class PopulationSelectionFail implements Action {
    readonly type = PopulationSelectionActionTypes.POPULATION_SELECTION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class PopulationSelectionAdd implements Action {
    readonly type = PopulationSelectionActionTypes.ADD_POPULATION_SELECTION;
    public constructor(public payload: any) { }
}

export class PopulationSelectionAddSuccess implements Action {
    readonly type = PopulationSelectionActionTypes.ADD_POPULATION_SELECTION_SUCCESS;
    public constructor(public payload: any) { }
}

export class PopulationSelectionAddFail implements Action {
    readonly type = PopulationSelectionActionTypes.ADD_POPULATION_SELECTION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class PopulationSelectionEdit implements Action {
    readonly type = PopulationSelectionActionTypes.EDIT_POPULATION_SELECTION;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class PopulationSelectionEditSuccess implements Action {
    readonly type = PopulationSelectionActionTypes.EDIT_POPULATION_SELECTION_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class PopulationSelectionEditFail implements Action {
    readonly type = PopulationSelectionActionTypes.EDIT_POPULATION_SELECTION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class PopulationSelectionECopy implements Action {
    readonly type = PopulationSelectionActionTypes.COPY_POPULATION_SELECTION;
    public constructor(public payload: any, public dialog: any) { }
}

export class PopulationSelectionCopySuccess implements Action {
    readonly type = PopulationSelectionActionTypes.COPY_POPULATION_SELECTION_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class PopulationSelectionCopyFail implements Action {
    readonly type = PopulationSelectionActionTypes.COPY_POPULATION_SELECTION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class PopulationSelectionDelete implements Action {
    readonly type = PopulationSelectionActionTypes.DELETE_POPULATION_SELECTION;
    public constructor(public id: any) { }
}

export class PopulationSelectionDeleteSuccess implements Action {
    readonly type = PopulationSelectionActionTypes.DELETE_POPULATION_SELECTION_SUCCESS;
    public constructor(public payload: any) { }
}

export class PopulationSelectionDeleteFail implements Action {
    readonly type = PopulationSelectionActionTypes.DELETE_POPULATION_SELECTION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export type PopulationSelectionActions =
    PopulationSelectionLoad
    | PopulationSelectionSuccess
    | PopulationSelectionFail
    | PopulationSelectionAdd
    | PopulationSelectionAddSuccess
    | PopulationSelectionAddFail
    | PopulationSelectionEdit
    | PopulationSelectionEditSuccess
    | PopulationSelectionEditFail
    | PopulationSelectionECopy
    | PopulationSelectionCopySuccess
    | PopulationSelectionCopyFail
    | PopulationSelectionDelete
    | PopulationSelectionDeleteSuccess
    | PopulationSelectionDeleteFail;
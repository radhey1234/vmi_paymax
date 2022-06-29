import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
export enum RangeCreationActionTypes {

    RANGE_CREATION = "[RANGE_CREATION] LOAD",
    RANGE_CREATION_SUCCESS = "[RANGE_CREATION] LOAD SUCCESS",
    RANGE_CREATION_FAIL = "[RANGE_CREATION] LOAD FAIL",

    ADD_RANGE_CREATION = "[RANGE_CREATION] ADD",
    ADD_RANGE_CREATION_SUCCESS = "[RANGE_CREATION] ADD SUCCESS",
    ADD_RANGE_CREATION_FAIL = "[RANGE_CREATION] ADD FAIL",

    EDIT_RANGE_CREATION = "[RANGE_CREATION] EDIT",
    EDIT_RANGE_CREATION_SUCCESS = "[RANGE_CREATION] EDIT SUCCESS",
    EDIT_RANGE_CREATION_FAIL = "[RANGE_CREATION] EDIT FAIL",

    DELETE_RANGE_CREATION = "[RANGE_CREATION] DELETE",
    DELETE_RANGE_CREATION_SUCCESS = "[RANGE_CREATION] DELETE SUCCESS",
    DELETE_RANGE_CREATION_FAIL = "[RANGE_CREATION] DELETE FAIL",

}



export class RangeCreationLoad implements Action {
    readonly type = RangeCreationActionTypes.RANGE_CREATION;
}

export class RangeCreationSuccess implements Action {
    readonly type = RangeCreationActionTypes.RANGE_CREATION_SUCCESS;
    public constructor(public payload: any) { }
}

export class RangeCreationFail implements Action {
    readonly type = RangeCreationActionTypes.RANGE_CREATION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class RangeCreationAdd implements Action {
    readonly type = RangeCreationActionTypes.ADD_RANGE_CREATION;
    public constructor(public payload: any) { }
}

export class RangeCreationAddSuccess implements Action {
    readonly type = RangeCreationActionTypes.ADD_RANGE_CREATION_SUCCESS;
    public constructor(public payload: any) { }
}

export class RangeCreationAddFail implements Action {
    readonly type = RangeCreationActionTypes.ADD_RANGE_CREATION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class RangeCreationEdit implements Action {
    readonly type = RangeCreationActionTypes.EDIT_RANGE_CREATION;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class RangeCreationEditSuccess implements Action {
    readonly type = RangeCreationActionTypes.EDIT_RANGE_CREATION_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class RangeCreationEditFail implements Action {
    readonly type = RangeCreationActionTypes.EDIT_RANGE_CREATION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class RangeCreationDelete implements Action {
    readonly type = RangeCreationActionTypes.DELETE_RANGE_CREATION;
    public constructor(public id: any) { }
}

export class RangeCreationDeleteSuccess implements Action {
    readonly type = RangeCreationActionTypes.DELETE_RANGE_CREATION_SUCCESS;
    public constructor(public payload: any) { }
}

export class RangeCreationDeleteFail implements Action {
    readonly type = RangeCreationActionTypes.DELETE_RANGE_CREATION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}
export type RangeCreationActions =
    RangeCreationLoad
    | RangeCreationSuccess
    | RangeCreationFail
    | RangeCreationAdd
    | RangeCreationAddSuccess
    | RangeCreationAddFail
    | RangeCreationEdit
    | RangeCreationEditSuccess
    | RangeCreationEditFail
    | RangeCreationDelete
    | RangeCreationDeleteSuccess
    | RangeCreationDeleteFail;
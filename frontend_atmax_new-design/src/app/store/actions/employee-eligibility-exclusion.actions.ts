import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
export enum EmployeeElgibiltyExclusionActionTypes {

    ELIGIBILITY_EXCLUSION = "[ELIGIBILITY_EXCLUSION] LOAD",
    ELIGIBILITY_EXCLUSION_SUCCESS = "[ELIGIBILITY_EXCLUSION] LOAD SUCCESS",
    ELIGIBILITY_EXCLUSION_FAIL = "[ELIGIBILITY_EXCLUSION] LOAD FAIL",

    ADD_ELIGIBILITY_EXCLUSION = "[ELIGIBILITY_EXCLUSION] ADD",
    ADD_ELIGIBILITY_EXCLUSION_SUCCESS = "[ELIGIBILITY_EXCLUSION] ADD SUCCESS",
    ADD_ELIGIBILITY_EXCLUSION_FAIL = "[ELIGIBILITY_EXCLUSION] ADD FAIL",

    EDIT_ELIGIBILITY_EXCLUSION = "[ELIGIBILITY_EXCLUSION] EDIT",
    EDIT_ELIGIBILITY_EXCLUSION_SUCCESS = "[ELIGIBILITY_EXCLUSION] EDIT SUCCESS",
    EDIT_ELIGIBILITY_EXCLUSION_FAIL = "[ELIGIBILITY_EXCLUSION] EDIT FAIL",


    DELETE_ELIGIBILITY_EXCLUSION = "[ELIGIBILITY_EXCLUSION] DELETE",
    DELETE_ELIGIBILITY_EXCLUSION_SUCCESS = "[ELIGIBILITY_EXCLUSION] DELETE SUCCESS",
    DELETE_ELIGIBILITY_EXCLUSION_FAIL = "[ELIGIBILITY_EXCLUSION] DELETE FAIL",
}



export class EligibilityExclusionLoad implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION;
}

export class EligibiliyExclusionLoadSuccess implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION_SUCCESS;
    public constructor(public payload: any) { }
}

export class EligibiliyExclusionLoadFail implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class EligibilityExclusionAdd implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.ADD_ELIGIBILITY_EXCLUSION;
    public constructor(public payload: any) { }
}

export class EligibiliyExclusionAddSuccess implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.ADD_ELIGIBILITY_EXCLUSION_SUCCESS;
    public constructor(public payload: any) { }
}

export class EligibiliyExclusionAddFail implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.ADD_ELIGIBILITY_EXCLUSION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class EligibiliyExclusionEdit implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class EligibiliyExclusionEditSuccess implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class EligibiliyExclusionEditFail implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class EligibiliyExclusionDelete implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.DELETE_ELIGIBILITY_EXCLUSION;
    public constructor(public id: any) { }
}

export class EligibiliyExclusionDeleteSuccess implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.DELETE_ELIGIBILITY_EXCLUSION_SUCCESS;
    public constructor(public payload: any) { }
}

export class EligibiliyExclusionDeleteFail implements Action {
    readonly type = EmployeeElgibiltyExclusionActionTypes.DELETE_ELIGIBILITY_EXCLUSION_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export type EmployeeElgibiltyExclusionActions =
    EligibilityExclusionLoad
    | EligibiliyExclusionLoadSuccess
    | EligibiliyExclusionLoadFail
    | EligibilityExclusionAdd
    | EligibiliyExclusionAddSuccess
    | EligibiliyExclusionAddFail
    | EligibiliyExclusionEdit
    | EligibiliyExclusionEditSuccess
    | EligibiliyExclusionEditFail
    | EligibiliyExclusionDelete
    | EligibiliyExclusionDeleteSuccess
    | EligibiliyExclusionDeleteFail;
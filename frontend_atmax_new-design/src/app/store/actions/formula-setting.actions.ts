import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
export enum FormulaSettingActionTypes {

    FORMULA_SETTING = "[FORMULA_SETTING] LOAD",
    FORMULA_SETTING_SUCCESS = "[FORMULA_SETTING] LOAD SUCCESS",
    FORMULA_SETTING_FAIL = "[FORMULA_SETTING] LOAD FAIL",

    ADD_FORMULA_SETTING = "[FORMULA_SETTING] ADD",
    ADD_FORMULA_SETTING_SUCCESS = "[FORMULA_SETTING] ADD SUCCESS",
    ADD_FORMULA_SETTING_FAIL = "[FORMULA_SETTING] ADD FAIL",

    EDIT_FORMULA_SETTING = "[FORMULA_SETTING] EDIT",
    EDIT_FORMULA_SETTING_SUCCESS = "[FORMULA_SETTING] EDIT SUCCESS",
    EDIT_FORMULA_SETTING_FAIL = "[FORMULA_SETTING] EDIT FAIL",

    DELETE_FORMULA_SETTING = "[FORMULA_SETTING] DELETE",
    DELETE_FORMULA_SETTING_SUCCESS = "[FORMULA_SETTING] DELETE SUCCESS",
    DELETE_FORMULA_SETTING_FAIL = "[FORMULA_SETTING] DELETE FAIL",

}



export class FormulaSettingLoad implements Action {
    readonly type = FormulaSettingActionTypes.FORMULA_SETTING;
}

export class FormulaSettingSuccess implements Action {
    readonly type = FormulaSettingActionTypes.FORMULA_SETTING_SUCCESS;
    public constructor(public payload: any) { }
}

export class FormulaSettingFail implements Action {
    readonly type = FormulaSettingActionTypes.FORMULA_SETTING_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class FormulaSettingAdd implements Action {
    readonly type = FormulaSettingActionTypes.ADD_FORMULA_SETTING;
    public constructor(public payload: any, public form: any, public resetForm: any) { }
}

export class FormulaSettingAddSuccess implements Action {
    readonly type = FormulaSettingActionTypes.ADD_FORMULA_SETTING_SUCCESS;
    public constructor(public payload: any, public form: any, public resetForm: any) { }
}

export class FormulaSettingAddFail implements Action {
    readonly type = FormulaSettingActionTypes.ADD_FORMULA_SETTING_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class FormulaSettingEdit implements Action {
    readonly type = FormulaSettingActionTypes.EDIT_FORMULA_SETTING;
    public constructor(public payload: any, public id: any, public dialog: any, public form: any, public resetForm: any) { }
}

export class FormulaSettingEditSuccess implements Action {
    readonly type = FormulaSettingActionTypes.EDIT_FORMULA_SETTING_SUCCESS;
    public constructor(public payload: any, public dialog: any, public form: any, public resetForm: any) { }
}

export class FormulaSettingEditFail implements Action {
    readonly type = FormulaSettingActionTypes.EDIT_FORMULA_SETTING_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class FormulaSettingDelete implements Action {
    readonly type = FormulaSettingActionTypes.DELETE_FORMULA_SETTING;
    public constructor(public id: any) { }
}

export class FormulaSettingDeleteSuccess implements Action {
    readonly type = FormulaSettingActionTypes.DELETE_FORMULA_SETTING_SUCCESS;
    public constructor(public payload: any) { }
}

export class FormulaSettingDeleteFail implements Action {
    readonly type = FormulaSettingActionTypes.DELETE_FORMULA_SETTING_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}
export type FormulaSettingActions =
    FormulaSettingLoad
    | FormulaSettingSuccess
    | FormulaSettingFail
    | FormulaSettingAdd
    | FormulaSettingAddSuccess
    | FormulaSettingAddFail
    | FormulaSettingEdit
    | FormulaSettingEditSuccess
    | FormulaSettingEditFail
    | FormulaSettingDelete
    | FormulaSettingDeleteSuccess
    | FormulaSettingDeleteFail;
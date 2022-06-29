import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { PlanEligibilityList } from 'src/app/models/plan-eligibility-setting.model';
export enum PlanEligibilityActionTypes {
  PLAN_LIST_DATA_LOAD = "[PLAN ELIGIBILITY] PLAN LIST DATA LOAD",
  PLAN_LIST_DATA_LOAD_SUCCESS = "[PLAN ELIGIBILITY] PLAN LIST DATA LOAD SUCCESS",
  PLAN_LIST_DATA_LOAD_FAIL = "[PLAN ELIGIBILITY] PLAN LIST DATA LOAD FAIL",

  ADD_PLAN = "[PLAN ELIGIBILITY] PLAN ADD",
  ADD_PLAN_SUCCESS = "[PLAN ELIGIBILITY] PLAN ADD SUCCESS",
  ADD_PLAN_FAIL = "[PLAN ELIGIBILITY] PLAN ADD FAIL",

  EDIT_PLAN = "[PLAN ELIGIBILITY] PLAN EDIT",
  EDIT_PLAN_SUCCESS = "[PLAN ELIGIBILITY] PLAN EDIT SUCCESS",
  EDIT_PLAN_FAIL = "[PLAN ELIGIBILITY] PLAN EDIT FAIL",

  DELETE_PLAN = "[PLAN ELIGIBILITY] PLAN DELETE",
  DELETE_PLAN_SUCCESS = "[PLAN ELIGIBILITY] PLAN DELETE SUCCESS",
  DELETE_PLAN_FAIL = "[PLAN ELIGIBILITY] PLAN DELETE FAIL"
}

export class PlanListDataLoad implements Action {
  readonly type = PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD;
}
export class PlanListDataLoadSuccess implements Action {
  readonly type = PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class PlanListDataLoadFail implements Action {
  readonly type = PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class PlanAdd implements Action {
  readonly type = PlanEligibilityActionTypes.ADD_PLAN;
  constructor(public payload: PlanEligibilityList) { }
}
export class PlanAddSuccess implements Action {
  readonly type = PlanEligibilityActionTypes.ADD_PLAN_SUCCESS;
  constructor(public payload: any) { }
}
export class PlanAddFail implements Action {
  readonly type = PlanEligibilityActionTypes.ADD_PLAN_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}
export class PlanEdit implements Action {
  readonly type = PlanEligibilityActionTypes.EDIT_PLAN;
  constructor(public payload: PlanEligibilityList, public dialog: any) { }
}
export class PlanEditSuccess implements Action {
  readonly type = PlanEligibilityActionTypes.EDIT_PLAN_SUCCESS;
  constructor(public payload: any, public dialog: any) { }
}
export class PlanEditFail implements Action {
  readonly type = PlanEligibilityActionTypes.EDIT_PLAN_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}
export class PlanDelete implements Action {
  readonly type = PlanEligibilityActionTypes.DELETE_PLAN;
  constructor(public id: any) { }
}
export class PlanDeleteSuccess implements Action {
  readonly type = PlanEligibilityActionTypes.DELETE_PLAN_SUCCESS;
  constructor(public payload: any) { }
}
export class PlanDeleteFail implements Action {
  readonly type = PlanEligibilityActionTypes.DELETE_PLAN_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export type PlanEligibilityActions =
  | PlanListDataLoad
  | PlanListDataLoadSuccess
  | PlanListDataLoadFail
  | PlanAdd
  | PlanAddSuccess
  | PlanAddFail
  | PlanEdit
  | PlanEditSuccess
  | PlanEditFail
  | PlanDelete
  | PlanDeleteSuccess
  | PlanDeleteFail;

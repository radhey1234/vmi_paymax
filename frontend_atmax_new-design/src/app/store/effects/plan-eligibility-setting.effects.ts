import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { ApiService } from "src/app/service/api.service";
import { Store } from "@ngrx/store";
import { SnackBar } from 'src/app/shared/notification';
import { PlanEligibilityActions, PlanEligibilityActionTypes, PlanListDataLoadSuccess, PlanListDataLoadFail, PlanAddSuccess, PlanAddFail, PlanListDataLoad, PlanEditSuccess, PlanEditFail, PlanDeleteSuccess, PlanDeleteFail } from '../actions/plan-eligibility-setting.actions';
@Injectable()
export class PlanEligibilityEffect {
  constructor(
    private action$: Actions<PlanEligibilityActions>,
    private apiService: ApiService,
    private snackbar: SnackBar,
    private store: Store<{}>
  ) { }

  @Effect()
  loadPlanListData$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.PLAN_LIST_DATA_LOAD),
    switchMap(action =>
      this.apiService.getPlanEligibilityList().pipe(
        map(res => new PlanListDataLoadSuccess(res)),
        catchError(error => of(new PlanListDataLoadFail(error)))
      )
    )
  );

  @Effect()
  addPlan$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.ADD_PLAN),
    switchMap(action =>
      this.apiService.addPlan(action.payload).pipe(
        map(res => new PlanAddSuccess(res)),
        catchError(error => of(new PlanAddFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  addPlanSuccess$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.ADD_PLAN_SUCCESS),
    map(action =>
      this.store.dispatch(new PlanListDataLoad())
    )
  );

  @Effect()
  editPlan$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.EDIT_PLAN),
    switchMap(action =>
      this.apiService.editPlan(action.payload).pipe(
        map(res => new PlanEditSuccess(res, action.dialog)),
        catchError(error => of(new PlanEditFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  editPlanSuccess$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.EDIT_PLAN_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Plan List Edited',
        action: 'Close'
      });
      action.dialog.close()
      this.store.dispatch(new PlanListDataLoad())
    }
    )
  );
  @Effect({
    dispatch: false
  })
  editPlanFail$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.EDIT_PLAN_FAIL),
    map(action => {
      this.snackbar.error({
        msg: 'Some thing went wrong',
        action: 'Close'
      });
    })
  );
  @Effect()
  deletePlan$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.DELETE_PLAN),
    switchMap(action =>
      this.apiService.deletePlan(action.id).pipe(
        map(res => new PlanDeleteSuccess(res)),
        catchError(error => of(new PlanDeleteFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  deletePlanSuccess$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.DELETE_PLAN_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Plan Deleted',
        action: 'Close'
      });
      this.store.dispatch(new PlanListDataLoad())
    }
    )
  );

  @Effect({
    dispatch: false
  })
  deletePlanFail$ = this.action$.pipe(
    ofType(PlanEligibilityActionTypes.DELETE_PLAN_FAIL),
    map(action => {
      this.snackbar.error({
        msg: 'Some thing went wrong',
        action: 'Close'
      });
    }
    )
  );
}

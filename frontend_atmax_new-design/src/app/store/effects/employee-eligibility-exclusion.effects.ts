import { EligibilityListLoad } from './../actions/process.actions';
import { SnackBar } from './../../shared/notification/SnackBar';
import { EligibiliyExclusionAddSuccess, EligibilityExclusionLoad, EligibiliyExclusionEditFail, EligibiliyExclusionEditSuccess, EligibiliyExclusionDeleteFail, EligibiliyExclusionDeleteSuccess } from './../actions/employee-eligibility-exclusion.actions';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { EmployeeElgibiltyExclusionActions, EmployeeElgibiltyExclusionActionTypes, EligibiliyExclusionLoadSuccess, EligibiliyExclusionAddFail } from './../actions/employee-eligibility-exclusion.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { EmployeeEligibilityExclusionService } from 'src/app/service/employee-eligibility-exclusion.service';
import { Store } from '@ngrx/store';

@Injectable()

export class EmployeeEligibilityExclusionEffect {
    constructor(
        private action$: Actions<EmployeeElgibiltyExclusionActions>,
        private employeeEligibilityExclusionService: EmployeeEligibilityExclusionService,
        private store: Store<{}>,
        private SnackBar: SnackBar
    ) { }

    @Effect()
    loadEmployeeElgibiltyExclusion = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.ELIGIBILITY_EXCLUSION),
        switchMap((action: any) =>
            this.employeeEligibilityExclusionService.getEmployeeeligibilityExclusion().pipe(
                map(action => new EligibiliyExclusionLoadSuccess(action)),
                catchError(error => of(new EligibiliyExclusionAddFail(error)))
            )
        )
    )

    @Effect()
    addEmployeeElgibiltyExclusion = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.ADD_ELIGIBILITY_EXCLUSION),
        switchMap((action: any) =>
            this.employeeEligibilityExclusionService.addEmployeeeligibilityExclusion(action.payload).pipe(
                map(action => new EligibiliyExclusionAddSuccess(action)),
                catchError(error => of(new EligibiliyExclusionAddFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    addEmployeeElgibiltyExclusionSuccess = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.ADD_ELIGIBILITY_EXCLUSION_SUCCESS),
        map(action => {
            this.store.dispatch(new EligibilityExclusionLoad());
            this.store.dispatch(new EligibilityListLoad());
            this.SnackBar.success({
                msg: "Employee Eligibility Exclusion Added",
                action: 'Close'
            })
        })
    )


    @Effect({
        dispatch: false
    })
    addEmployeeElgibiltyExclusionFail = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.ADD_ELIGIBILITY_EXCLUSION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )

    /**
   * Edit Eligibility Exclusion
   */
    @Effect()
    editGridSetting$ = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION),
        switchMap((action) => {
            return this.employeeEligibilityExclusionService.editEmployeeeligibilityExclusion(action.payload, action.id).pipe(
                map(res => new EligibiliyExclusionEditSuccess(res, action.dialog)),
                catchError(error => of(new EligibiliyExclusionEditFail(error)))
            )
        }
        )
    );

    @Effect({
        dispatch: false
    })
    editGridSettingSuccess$ = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION_SUCCESS),
        map(action => {
            this.SnackBar.success({
                msg: 'Employee Eligibility Exclusion Edited',
                action: 'Close'
            });
            this.store.dispatch(new EligibilityListLoad());
            action.dialog.close();
        }
        )
    );

    @Effect({
        dispatch: false
    })
    editGridSettingFailed$ = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.EDIT_ELIGIBILITY_EXCLUSION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        }
        )
    );


    /**
    * Delete Eligibility Exclusion
    */
    @Effect()
    deleteGridSetting$ = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.DELETE_ELIGIBILITY_EXCLUSION),
        switchMap((action) => {
            return this.employeeEligibilityExclusionService.deleteEmployeeeligibilityExclusion(action.id).pipe(
                map(res => new EligibiliyExclusionDeleteSuccess(res)),
                catchError(error => of(new EligibiliyExclusionDeleteFail(error)))
            )
        }
        )
    );

    @Effect({
        dispatch: false
    })
    deleteGridSettingSuccess$ = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.DELETE_ELIGIBILITY_EXCLUSION_SUCCESS),
        map(action => {
            this.SnackBar.success({
                msg: 'Employee Eligibility Exclusion Deleted',
                action: 'Close'
            });
            this.store.dispatch(new EligibilityListLoad());
        }
        )
    );

    @Effect({
        dispatch: false
    })
    deleteGridSettingFailed$ = this.action$.pipe(
        ofType(EmployeeElgibiltyExclusionActionTypes.DELETE_ELIGIBILITY_EXCLUSION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        }
        )
    );




}
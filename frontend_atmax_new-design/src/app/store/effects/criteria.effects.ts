import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SnackBar } from './../../shared/notification/SnackBar';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/service/api.service';
import { ProcessActions, ProcessActionTypes, EmployeeCriteriaLoadSuccess, EmployeeCriteriaLoadFail, EmployeeCriteriaDetailLoadSuccess, EmployeeCriteriaDetailLoadFail } from './../actions/process.actions';
import { Injectable } from '@angular/core';

@Injectable()

export class CriteriaEffect {
    constructor(
        private action$: Actions<ProcessActions>,
        private apiService: ApiService,
        private SnackBar: SnackBar
    ) { }

    @Effect()
    loadCriteria = this.action$.pipe(
        ofType(ProcessActionTypes.EMPLOYEE_CRITERIA),
        switchMap((action: any) =>
            this.apiService.getEmployeeCriteria().pipe(
                map(action => new EmployeeCriteriaLoadSuccess(action)),
                catchError(error => of(new EmployeeCriteriaLoadFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    loadCriteriaSucess = this.action$.pipe(
        ofType(ProcessActionTypes.EMPLOYEE_CRITERIA_SUCCESS),
        map(action => {
            // console.log(action);
        })
    )

    @Effect({
        dispatch: false
    })
    loadCriteriaFail = this.action$.pipe(
        ofType(ProcessActionTypes.EMPLOYEE_CRITERIA_FAIL),
        map(action => {
            this.SnackBar.success({
                msg: "Unable to fetch criteria",
                action: 'Close'
            })
        })
    )


    @Effect()
    loadCriteriaDetail = this.action$.pipe(
        ofType(ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL),
        switchMap((action: any) =>
            this.apiService.getEmployeeCriteriaDetail(action.key).pipe(
                map(action => new EmployeeCriteriaDetailLoadSuccess(action)),
                catchError(error => of(new EmployeeCriteriaDetailLoadFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    loadCriteriaDetailSuccess = this.action$.pipe(
        ofType(ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL_SUCCESS),
        map(action => {
            // console.log(action);
        })
    )

    @Effect({
        dispatch: false
    })
    loadCriteriaDetailFail = this.action$.pipe(
        ofType(ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL_FAIL),
        map(action => {
            this.SnackBar.success({
                msg: "Unable to fetch criteria detail",
                action: 'Close'
            })
        })
    )


}
import { dialog } from './../../admin/dialog/index';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { RangeCreationActionTypes, RangeCreationSuccess, RangeCreationFail, RangeCreationAddSuccess, RangeCreationAddFail, RangeCreationLoad, RangeCreationEditSuccess, RangeCreationEditFail, RangeCreationDeleteSuccess, RangeCreationDeleteFail } from './../actions/range-creation.actions';
import { SnackBar } from './../../shared/notification/SnackBar';
import { RangeCreationService } from './../../service/range-creation.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { RangeCreationActions } from '../actions';
import { Store } from '@ngrx/store';

@Injectable()

export class RangeCreationEffect {
    constructor(
        private action$: Actions<RangeCreationActions>,
        private rangeCreationService: RangeCreationService,
        private store: Store<{}>,
        private SnackBar: SnackBar
    ) { }

    @Effect()
    loadRangeCreation = this.action$.pipe(
        ofType(RangeCreationActionTypes.RANGE_CREATION),
        switchMap((action: any) =>
            this.rangeCreationService.getRangeCreationList().pipe(
                map(action => new RangeCreationSuccess(action)),
                catchError(error => of(new RangeCreationFail(error)))
            )
        )
    )

    @Effect()
    addRangeCreation = this.action$.pipe(
        ofType(RangeCreationActionTypes.ADD_RANGE_CREATION),
        switchMap((action: any) =>
            this.rangeCreationService.addRangeCreation(action.payload).pipe(
                map(action => new RangeCreationAddSuccess(action)),
                catchError(error => of(new RangeCreationAddFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    addPopulationSelectionSuccess = this.action$.pipe(
        ofType(RangeCreationActionTypes.ADD_RANGE_CREATION_SUCCESS),
        map(action => {
            this.store.dispatch(new RangeCreationLoad());
            this.SnackBar.success({
                msg: "Range Creation Added",
                action: 'Close'
            })
        })
    )


    @Effect({
        dispatch: false
    })
    addPopulationSelectionFail = this.action$.pipe(
        ofType(RangeCreationActionTypes.ADD_RANGE_CREATION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )

    @Effect()
    editRangeCreation = this.action$.pipe(
        ofType(RangeCreationActionTypes.EDIT_RANGE_CREATION),
        switchMap((action: any) =>
            this.rangeCreationService.editRangeCreation(action.payload, action.id).pipe(
                map(res => new RangeCreationEditSuccess(res, action.dialog)),
                catchError(error => of(new RangeCreationEditFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    editRangeCreationSuccess = this.action$.pipe(
        ofType(RangeCreationActionTypes.EDIT_RANGE_CREATION_SUCCESS),
        map(action => {
            this.store.dispatch(new RangeCreationLoad());
            this.SnackBar.success({
                msg: "Range Creation Edited",
                action: 'Close'
            })

            action.dialog.close();
        })
    )


    @Effect({
        dispatch: false
    })
    editRangeCreationFail = this.action$.pipe(
        ofType(RangeCreationActionTypes.EDIT_RANGE_CREATION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )

    @Effect()
    deleteRangeCreation = this.action$.pipe(
        ofType(RangeCreationActionTypes.DELETE_RANGE_CREATION),
        switchMap((action: any) =>
            this.rangeCreationService.deleteRangeCreation(action.id).pipe(
                map(res => new RangeCreationDeleteSuccess(res)),
                catchError(error => of(new RangeCreationDeleteFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    deleteRangeCreationSuccess = this.action$.pipe(
        ofType(RangeCreationActionTypes.DELETE_RANGE_CREATION_SUCCESS),
        map(action => {
            this.store.dispatch(new RangeCreationLoad());
            this.SnackBar.success({
                msg: "Range Creation Deleted",
                action: 'Close'
            })
        })
    )


    @Effect({
        dispatch: false
    })
    deleteRangeCreationFail = this.action$.pipe(
        ofType(RangeCreationActionTypes.DELETE_RANGE_CREATION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )




}
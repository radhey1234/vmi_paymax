import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { SnackBar } from './../../shared/notification/SnackBar';
import { PopulationSelectionService } from './../../service/population-selection.service';
import { PopulationSelectionActions, PopulationSelectionActionTypes, PopulationSelectionSuccess, PopulationSelectionFail, PopulationSelectionAddSuccess, PopulationSelectionAddFail, PopulationSelectionLoad, PopulationSelectionEditSuccess, PopulationSelectionEditFail, PopulationSelectionCopySuccess, PopulationSelectionCopyFail, PopulationSelectionDeleteSuccess, PopulationSelectionDeleteFail } from './../actions/population-selection.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()

export class PopulationSelectionEffect {
    constructor(
        private action$: Actions<PopulationSelectionActions>,
        private populationSelectionService: PopulationSelectionService,
        private store: Store<{}>,
        private SnackBar: SnackBar
    ) { }

    @Effect()
    loadPopulationSelection = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.POPULATION_SELECTION),
        switchMap((action: any) =>
            this.populationSelectionService.getPopulationSelection().pipe(
                map(action => new PopulationSelectionSuccess(action)),
                catchError(error => of(new PopulationSelectionFail(error)))
            )
        )
    )

    @Effect()
    addPopulationSelection = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.ADD_POPULATION_SELECTION),
        switchMap((action: any) =>
            this.populationSelectionService.addPopulationSelection(action.payload).pipe(
                map(action => new PopulationSelectionAddSuccess(action)),
                catchError(error => of(new PopulationSelectionAddFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    addPopulationSelectionSuccess = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.ADD_POPULATION_SELECTION_SUCCESS),
        map(action => {
            this.store.dispatch(new PopulationSelectionLoad());
            this.SnackBar.success({
                msg: "Population Selection Added",
                action: 'Close'
            })
        })
    )


    @Effect({
        dispatch: false
    })
    addPopulationSelectionFail = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.ADD_POPULATION_SELECTION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )



    @Effect()
    editPopulationSelection = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.EDIT_POPULATION_SELECTION),
        switchMap((action: any) =>
            this.populationSelectionService.editPopulationSelection(action.payload, action.id).pipe(
                map(res => new PopulationSelectionEditSuccess(res, action.dialog)),
                catchError(error => of(new PopulationSelectionEditFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    editPopulationSelectionSuccess = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.EDIT_POPULATION_SELECTION_SUCCESS),
        map(action => {
            this.store.dispatch(new PopulationSelectionLoad());
            this.SnackBar.success({
                msg: "Population Selection Edited",
                action: 'Close'
            })

            action.dialog.close();
        })
    )


    @Effect({
        dispatch: false
    })
    editPopulationSelectionFail = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.EDIT_POPULATION_SELECTION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )


    @Effect()
    copyPopulationSelection = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.COPY_POPULATION_SELECTION),
        switchMap((action: any) =>
            this.populationSelectionService.addPopulationSelection(action.payload).pipe(
                map(res => new PopulationSelectionCopySuccess(res, action.dialog)),
                catchError(error => of(new PopulationSelectionCopyFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    copyPopulationSelectionSuccess = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.COPY_POPULATION_SELECTION_SUCCESS),
        map(action => {
            this.store.dispatch(new PopulationSelectionLoad());
            this.SnackBar.success({
                msg: "Population Selection Copied",
                action: 'Close'
            })

            action.dialog.close();
        })
    )


    @Effect({
        dispatch: false
    })
    copyPopulationSelectionFail = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.COPY_POPULATION_SELECTION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )

    @Effect()
    deletePopulationSelection = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.DELETE_POPULATION_SELECTION),
        switchMap((action: any) =>
            this.populationSelectionService.deletePopulationSelection(action.id).pipe(
                map(res => new PopulationSelectionDeleteSuccess(res)),
                catchError(error => of(new PopulationSelectionDeleteFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    deletePopulationSelectionSuccess = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.DELETE_POPULATION_SELECTION_SUCCESS),
        map(action => {
            this.store.dispatch(new PopulationSelectionLoad());
            this.SnackBar.success({
                msg: "Population Selection Deleted",
                action: 'Close'
            })

        })
    )


    @Effect({
        dispatch: false
    })
    deletePopulationSelectionFail = this.action$.pipe(
        ofType(PopulationSelectionActionTypes.DELETE_POPULATION_SELECTION_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )



}
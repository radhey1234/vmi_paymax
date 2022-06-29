import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SnackBar } from './../../shared/notification/SnackBar';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FormulaSettingService } from './../../service/formula-setting.service';
import { FormulaSettingActions, FormulaSettingActionTypes, FormulaSettingSuccess, FormulaSettingFail, FormulaSettingAddSuccess, FormulaSettingAddFail, FormulaSettingLoad, FormulaSettingDeleteSuccess, FormulaSettingDeleteFail, FormulaSettingEditSuccess, FormulaSettingEditFail } from './../actions/formula-setting.actions';
import { Injectable } from '@angular/core';


@Injectable()

export class FormSettingEffect {
    constructor(
        private action$: Actions<FormulaSettingActions>,
        private formulaSettingService: FormulaSettingService,
        private store: Store<{}>,
        private SnackBar: SnackBar
    ) { }

    @Effect()
    loadFormulaSetting = this.action$.pipe(
        ofType(FormulaSettingActionTypes.FORMULA_SETTING),
        switchMap((action: any) =>
            this.formulaSettingService.getFormulaSettingList().pipe(
                map(action => new FormulaSettingSuccess(action)),
                catchError(error => of(new FormulaSettingFail(error)))
            )
        )
    )

    @Effect()
    addFormulaSetting = this.action$.pipe(
        ofType(FormulaSettingActionTypes.ADD_FORMULA_SETTING),
        switchMap((action: any) =>
            this.formulaSettingService.addFormulaSetting(action.payload).pipe(
                map(res => new FormulaSettingAddSuccess(res, action.form, action.resetForm)),
                catchError(error => of(new FormulaSettingAddFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    addFormulaSettingSuccess = this.action$.pipe(
        ofType(FormulaSettingActionTypes.ADD_FORMULA_SETTING_SUCCESS),
        map(action => {
            action.form.markAsPristine();
            action.form.markAsUntouched();
            action.form.updateValueAndValidity();
            action.resetForm.resetForm();

            this.store.dispatch(new FormulaSettingLoad());
            this.SnackBar.success({
                msg: "Formula Setting Added",
                action: 'Close'
            })
        })
    )


    @Effect({
        dispatch: false
    })
    addFormulaSettingFail = this.action$.pipe(
        ofType(FormulaSettingActionTypes.ADD_FORMULA_SETTING_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )

    @Effect()
    editFormulaSetting = this.action$.pipe(
        ofType(FormulaSettingActionTypes.EDIT_FORMULA_SETTING),
        switchMap((action: any) =>
            this.formulaSettingService.editFormulaSetting(action.payload, action.id).pipe(
                map(res => new FormulaSettingEditSuccess(res, action.dialog, action.form, action.resetForm)),
                catchError(error => of(new FormulaSettingEditFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    editFormulaSettingSuccess = this.action$.pipe(
        ofType(FormulaSettingActionTypes.EDIT_FORMULA_SETTING_SUCCESS),
        map(action => {
            action.form.markAsPristine();
            action.form.markAsUntouched();
            action.form.updateValueAndValidity();
            action.resetForm.resetForm();

            this.store.dispatch(new FormulaSettingLoad());
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
    editFormulaSettingFail = this.action$.pipe(
        ofType(FormulaSettingActionTypes.DELETE_FORMULA_SETTING_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )

    @Effect()
    deleteFormulaSetting = this.action$.pipe(
        ofType(FormulaSettingActionTypes.DELETE_FORMULA_SETTING),
        switchMap((action: any) =>
            this.formulaSettingService.deleteFormulaSetting(action.id).pipe(
                map(res => new FormulaSettingDeleteSuccess(res)),
                catchError(error => of(new FormulaSettingDeleteFail(error)))
            )
        )
    )

    @Effect({
        dispatch: false
    })
    deleteFormulaSettingSuccess = this.action$.pipe(
        ofType(FormulaSettingActionTypes.DELETE_FORMULA_SETTING_SUCCESS),
        map(action => {
            this.store.dispatch(new FormulaSettingLoad());
            this.SnackBar.success({
                msg: "Formula Settting Deleted",
                action: 'Close'
            })
        })
    )


    @Effect({
        dispatch: false
    })
    deleteFormulaSettingFail = this.action$.pipe(
        ofType(FormulaSettingActionTypes.DELETE_FORMULA_SETTING_FAIL),
        map(action => {
            this.SnackBar.error({
                msg: "Some thing went wrong",
                action: 'Close'
            })
        })
    )




}
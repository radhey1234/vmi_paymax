import { SnackBar } from './../../shared/notification/SnackBar';
import { PreviouslyUploadedFilesLoad } from 'src/app/store';
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ofType } from "@ngrx/effects";
import {
  DataPreparationActions,
  DataPreparationActionTypes,
  SummamryDataLoadSuccess,
  SummamryDataLoadFail,
  DevationDataLoadFail,
  DevationDataLoadSuccess,
  PreviouslyUploadedFilesLoadSuccess,
  PreviouslyUploadedFilesLoadFail,
  PreviouslyUploadedFilesDeleteFail,
  PreviouslyUploadedFilesDeleteSuccess
} from "./../actions/data-preparation.actions";
import { Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { ApiService } from "src/app/service/api.service";
import { Store } from "@ngrx/store";
import { dispatch } from "rxjs/internal/observable/pairs";
@Injectable()
export class DataPreparationEffect {
  constructor(
    private action$: Actions<DataPreparationActions>,
    private apiService: ApiService,
    private store: Store<{}>,
    private SnackBar: SnackBar
  ) { }
  @Effect()
  loadSummaryData$ = this.action$.pipe(
    ofType(DataPreparationActionTypes.SUMMARY_DATA_LOAD),
    switchMap(action =>
      this.apiService.getEmployeeDataSummary().pipe(
        map(res => new SummamryDataLoadSuccess(res)),
        catchError(error => of(new SummamryDataLoadFail(error)))
      )
    )
  );

  @Effect()
  loadDevationData$ = this.action$.pipe(
    ofType(DataPreparationActionTypes.DEVATION_DATA_LOAD),
    switchMap(action =>
      this.apiService.getDevationData().pipe(
        map(res => new DevationDataLoadSuccess(res)),
        catchError(error => of(new DevationDataLoadFail(error)))
      )
    )
  );

  @Effect()
  loadPreviouslyUploadedFilesData$ = this.action$.pipe(
    ofType(DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_LOAD),
    switchMap(action =>
      this.apiService.getPreviouslyUploadedFilesData().pipe(
        map(res => new PreviouslyUploadedFilesLoadSuccess(res)),
        catchError(error => of(new PreviouslyUploadedFilesLoadFail(error)))
      )
    )
  );



  @Effect()
  deletePreviousUploadFile = this.action$.pipe(
    ofType(DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_DELETE),
    switchMap((action: any) =>
      this.apiService.deletePreviousUploadFiles(action.id).pipe(
        map(action => new PreviouslyUploadedFilesDeleteSuccess(action)),
        catchError(error => of(new PreviouslyUploadedFilesDeleteFail(error)))
      )
    )
  )

  @Effect({
    dispatch: false
  })
  deletePreviousUploadFileSuccess = this.action$.pipe(
    ofType(DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_DELETE_SUCCESS),
    map(action => {
      this.store.dispatch(new PreviouslyUploadedFilesLoad());
      this.SnackBar.success({
        msg: "FIle Deleted Successfully",
        action: 'Close'
      })
    })
  )


  @Effect({
    dispatch: false
  })
  deletePreviousUploadFileFail = this.action$.pipe(
    ofType(DataPreparationActionTypes.PREVIOUSLY_UPLOADED_FILES_DELETE_FAIL),
    map(action => {
      this.SnackBar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    })
  )



  // @Effect({
  //     dispatch: false
  // })
  // loadSummaryDataSuccess$ = this.action$.pipe(
  //     ofType(DataPreparationActionTypes.SUMMARY_DATA_LOAD_SUCCESS),
  //     map(action => {
  //         console.log(action);

  //     })

  // )
  // @Effect()
  // loadSummaryData$ = this.action$.pipe(
  //     ofType(DataPreparationActionTypes.SUMMARY_DATA_LOAD),
  //     switchMap(action =>
  //         this.apiService.getEmployeeDataSummary().pipe(
  //             map(res =>  new SummamryDataLoadSuccess(res)),
  //             catchError(error => of(new SummamryDataLoadFail(error)))
  //         )
  //     )

  // )
}

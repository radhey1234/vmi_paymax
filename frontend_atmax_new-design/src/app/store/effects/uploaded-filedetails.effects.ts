import { PreviouslyUploadedFilesLoad } from './../actions/data-preparation.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SnackBar } from './../../shared/notification/SnackBar';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/service/api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProcessActions, ProcessActionTypes, PreviouslyUploadedFilesDetailSuccess, PreviouslyUploadedFilesDetailFail } from './../actions/process.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadedFileDetailsEffect {
  constructor(
    private action$: Actions<ProcessActions>,
    private apiService: ApiService,
    private store: Store<{}>,
    private SnackBar: SnackBar
  ) { }

  @Effect()
  getUploadedFileDetails = this.action$.pipe(
    ofType(ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL),
    switchMap((action: any) =>
      this.apiService.uploadFileDetail(action.id).pipe(
        map(action => new PreviouslyUploadedFilesDetailSuccess(action)),
        catchError(error => of(new PreviouslyUploadedFilesDetailFail(error)))
      )
    )
  )

  @Effect({
    dispatch: false
  })
  getUploadedFileDetailsSuccess = this.action$.pipe(
    ofType(ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL_SUCCESS),
    map(action => {
      // this.store.dispatch(new PreviouslyUploadedFilesLoad());
      // this.SnackBar.success({
      //   msg: "FIle Deleted Successfully",
      //   action: 'Close'
      // })
    })
  )


  @Effect({
    dispatch: false
  })
  getUploadedFileDetailsFail = this.action$.pipe(
    ofType(ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL_FAIL),
    map(action => {
      this.SnackBar.error({
        msg: "Unable to get the filedetails",
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

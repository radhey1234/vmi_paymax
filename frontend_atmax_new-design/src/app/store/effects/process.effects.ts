import { GridFormulaService } from './../../service/grid-formula.service';
import { ProcessActions, ProcessActionTypes, EligibilityListLoadFail, EligibilityListLoadSuccess, EligibilityListLoad, EditEligibilityLoadSuccess, EditEligibilityLoadFail, DeleteEligibilityLoadFail, DeleteEligibilityLoadSuccess, GridAxisLoadSuccess, GridAxisLoadFail, GridSettingAddFail, GridSettingAddSuccess, GridSettingLoadSuccess, GridSettingLoadFail, EditGridSettingLoadSuccess, EditGridSettingLoadFail, GridSettingLoad, DeleteGridSettingLoadSuccess, DeleteGridSettingLoadFail, SalaryEmpGraphLoadSuccess, SalaryEmpGraphLoadFail, AnchorPointLoadSuccess, AnchorPointLoadFail, UpdateGridSettingPopupFail, UpdateGridSettingPopupSuccess, SimulationListSuccess, SimulationListFail, SimulationAddSuccess, SimulationAddFail, SimulationList, UpdateSimulation, UpdateSimulationSuccess, UpdateSimulationFail, DeleteSimulationSuccess, DeleteSimulationFail } from './../actions/process.actions';
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { ApiService } from "src/app/service/api.service";
import { Store } from "@ngrx/store";
import { SnackBar } from 'src/app/shared/notification';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Injectable()
export class ProcessEffect {
  constructor(
    private action$: Actions<ProcessActions>,
    private apiService: ApiService,
    private gridFormulaService: GridFormulaService,
    private snackbar: SnackBar,
    private store: Store<{}>,
    private loadingBarService: LoadingBarService
  ) { }

  @Effect()
  loadEmployeeEligibilitList$ = this.action$.pipe(
    ofType(ProcessActionTypes.ELEIGIBILITY_LIST),
    switchMap(action =>
      this.apiService.getEmployeeEligibilityList().pipe(
        map(res => new EligibilityListLoadSuccess(res)),
        catchError(error => of(new EligibilityListLoadFail(error)))
      )
    )
  );

  @Effect()
  editEmployeeEligibilityList$ = this.action$.pipe(
    ofType(ProcessActionTypes.EDIT_EMPLOYEE_ELEGIBILITY),
    switchMap(action =>
      this.apiService.editEmployeeEligibilityList(action.payload, action.id).pipe(
        map(res => new EditEligibilityLoadSuccess(res, action.dialog)),
        catchError(error => of(new EditEligibilityLoadFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  editEmployeeEligibilityListSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.EDIT_EMPLOYEE_ELEGIBILITY_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Plan Eligibility Edited',
        action: 'Close'
      });
      this.store.dispatch(new EligibilityListLoad())
      action.dialog.close();
    }
    )
  );

  @Effect({
    dispatch: false
  })
  editEmployeeEligibilityListFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.EDIT_EMPLOYEE_ELEGIBILITY_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );


  @Effect()
  deleteEmployeeEligibilityList$ = this.action$.pipe(
    ofType(ProcessActionTypes.DELETE_EMPLOYEE_ELEGIBILITY),
    switchMap(action =>
      this.apiService.deleteEmployeeEligibilityList(action.id).pipe(
        map(res => new DeleteEligibilityLoadSuccess(res)),
        catchError(error => of(new DeleteEligibilityLoadFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  deleteEmployeeEligibilityListSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.DELETE_EMPLOYEE_ELEGIBILITY_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Plan Eligibility List Deleted',
        action: 'Close'
      });
      this.store.dispatch(new EligibilityListLoad());
    }
    )
  );

  @Effect({
    dispatch: false
  })
  deleteEmployeeEligibilityListFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.DELETE_EMPLOYEE_ELEGIBILITY_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );



  @Effect()
  gridAxisiListLoad$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_AXIS),
    switchMap(action =>
      this.gridFormulaService.getGridAxis().pipe(
        map(res => new GridAxisLoadSuccess(res)),
        catchError(error => of(new GridAxisLoadFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  gridAxisiListLoadSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_AXIS_SUCCESS),
    map(action => {

    }
    )
  );

  @Effect()
  addGridSetting$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_ADD),
    switchMap(action =>
      this.gridFormulaService.addGridSetting(action.payload).pipe(
        map(res => new GridSettingAddSuccess(res)),
        catchError(error => of(new GridSettingAddFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  addGridSettingSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_ADD_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Grid Setting Added',
        action: 'Close'
      });
      this.store.dispatch(new GridSettingLoad());

    }
    )
  );

  @Effect({
    dispatch: false
  })
  addGridSettingFail$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_ADD_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );

  @Effect()
  gridSettingiListLoad$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_LOAD),
    switchMap(action =>
      this.gridFormulaService.gridSettingLoad().pipe(
        map(res => new GridSettingLoadSuccess(res)),
        catchError(error => of(new GridSettingLoadFail(error)))
      )
    )
  );

  /**
   * Edit Grid Setting
   */
  @Effect()
  editGridSetting$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_EDIT),
    switchMap((action) => {
      this.loadingBarService.start();
      return this.gridFormulaService.editGridSetting(action.payload, action.id).pipe(
        map(res => new EditGridSettingLoadSuccess(res, action.dialog)),
        catchError(error => of(new EditGridSettingLoadFail(error)))
      )
    }
    )
  );

  @Effect({
    dispatch: false
  })
  editGridSettingSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_EDIT_SUCCESS),
    map(action => {
      this.loadingBarService.stop();
      this.snackbar.success({
        msg: 'Grid Setting Edited',
        action: 'Close'
      });
      this.store.dispatch(new GridSettingLoad())
      action.dialog.close();
    }
    )
  );

  @Effect({
    dispatch: false
  })
  editGridSettingFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_EDIT_FAIL),
    map(action => {
      this.loadingBarService.stop();
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );


  @Effect()
  deleteGridSetting$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_DELETE),
    switchMap(action =>
      this.gridFormulaService.deleteGridSetting(action.id).pipe(
        map(res => new DeleteGridSettingLoadSuccess(res)),
        catchError(error => of(new DeleteGridSettingLoadFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  deleteGridSettingSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_DELETE_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Plan Eligibility List Deleted',
        action: 'Close'
      });
      this.store.dispatch(new GridSettingLoad());
    }
    )
  );

  @Effect({
    dispatch: false
  })
  deleteGridSettingFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_DELETE_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );

  /**
   * Salary of total Employee Graph
   */
  @Effect()
  loadEmpGraphData$ = this.action$.pipe(
    ofType(ProcessActionTypes.SALARY_EMP_GRAPH),
    switchMap(action =>
      this.apiService.getemployeeGraphData().pipe(
        map(res => new SalaryEmpGraphLoadSuccess(res)),
        catchError(error => of(new SalaryEmpGraphLoadFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  loadEmpGraphDataSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.SALARY_EMP_GRAPH_SUCCESS),
    map(action => {
      // this.snackbar.success({
      //   msg: 'Plan Eligibility Edited',
      //   action: 'Close'
      // });
      // this.store.dispatch(new EligibilityListLoad())
      // action.dialog.close();
    }
    )
  );

  @Effect({
    dispatch: false
  })
  loadEmpGraphDataFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.SALARY_EMP_GRAPH_FAIL),
    map(action => {
      // this.snackbar.error({
      //   msg: "Some thing went wrong",
      //   action: 'Close'
      // })
    }
    )
  );


  @Effect()
  loadAnchorPoint$ = this.action$.pipe(
    ofType(ProcessActionTypes.ANCHOR_POINT),
    switchMap(action =>
      this.gridFormulaService.loadAnchorPoint(action.id).pipe(
        map(res => new AnchorPointLoadSuccess(res)),
        catchError(error => of(new AnchorPointLoadFail(error)))
      )
    )
  );

  /**
   * Edit Grid Setting Popup
   */
  @Effect()
  editGridSettingPopup$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_POPUP_EDIT),
    switchMap(action =>
      this.gridFormulaService.editGridSettingPopup(action.payload, action.id).pipe(
        map(res => new UpdateGridSettingPopupSuccess(res, action.dialog)),
        catchError(error => of(new UpdateGridSettingPopupFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  editGridSettingPopupSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_POPUP_EDIT_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Value Edited',
        action: 'Close'
      });
      this.store.dispatch(new GridSettingLoad())
      action.dialog.close();
    }
    )
  );

  @Effect({
    dispatch: false
  })
  editGridSettingPopupFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.GRID_SETTING_POPUP_EDIT_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );

  /**
   * --------------------------------------------
   *  Simulation TAB
   * --------------------------------------------
   */


  @Effect()
  simulationList$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_LIST),
    switchMap(action =>
      this.gridFormulaService.simulationListLoad().pipe(
        map(res => new SimulationListSuccess(res)),
        catchError(error => of(new SimulationListFail(error)))
      )
    )
  );


  @Effect()
  addSimulation$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_ADD),
    switchMap(action =>
      this.gridFormulaService.addSimulation(action.payload).pipe(
        map(res => new SimulationAddSuccess(res)),
        catchError(error => of(new SimulationAddFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  addSimulationSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_ADD_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Simulation Added',
        action: 'Close'
      });
      this.store.dispatch(new SimulationList());

    }
    )
  );

  @Effect({
    dispatch: false
  })
  addSimulationFail$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_ADD_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );



  /**
   * Edit Simulation
   */
  @Effect()
  editSimulation$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_EDIT),
    switchMap((action) => {
      return this.gridFormulaService.editSimulation(action.payload, action.id).pipe(
        map(res => new UpdateSimulationSuccess(res, action.dialog)),
        catchError(error => of(new UpdateSimulationFail(error)))
      )
    }
    )
  );

  @Effect({
    dispatch: false
  })
  editSimulationSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_EDIT_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Simulation Edited',
        action: 'Close'
      });
      this.store.dispatch(new SimulationList())
      action.dialog.close();
    }
    )
  );

  @Effect({
    dispatch: false
  })
  editSimulationFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_EDIT_FAIL),
    map(action => {
      // this.loadingBarService.stop();
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );


  @Effect()
  deleteSimulation$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_DELETE),
    switchMap(action =>
      this.gridFormulaService.deleteSimulation(action.id).pipe(
        map(res => new DeleteSimulationSuccess(res)),
        catchError(error => of(new DeleteSimulationFail(error)))
      )
    )
  );

  @Effect({
    dispatch: false
  })
  deleteSimulationSuccess$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_DELETE_SUCCESS),
    map(action => {
      this.snackbar.success({
        msg: 'Simulation Deleted',
        action: 'Close'
      });
      this.store.dispatch(new SimulationList());
    }
    )
  );

  @Effect({
    dispatch: false
  })
  deleteSimulationFailed$ = this.action$.pipe(
    ofType(ProcessActionTypes.SIMULATION_DELETE_FAIL),
    map(action => {
      this.snackbar.error({
        msg: "Some thing went wrong",
        action: 'Close'
      })
    }
    )
  );

}

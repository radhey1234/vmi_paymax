import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
export enum ProcessActionTypes {

    PREVIOUSLY_UPLOADED_FILES_DETAIL = '[UPLOADED_FILE_DETAILS] PREVIOUSLY UPLOADED FILES DETAIL',
    PREVIOUSLY_UPLOADED_FILES_DETAIL_SUCCESS = '[UPLOADED_FILE_DETAILS] PREVIOUSLY UPLOADED FILES DETAIL SUCCESS',
    PREVIOUSLY_UPLOADED_FILES_DETAIL_FAIL = '[UPLOADED_FILE_DETAILS] PREVIOUSLY UPLOADED FILES DETAIL FAIL',


    ELEIGIBILITY_LIST = '[ELEIGIBILITY_LIST] LOAD',
    ELEIGIBILITY_LIST_SUCCESS = '[ELEIGIBILITY_LIST] SUCCESS',
    ELEIGIBILITY_LIST_FAIL = '[ELEIGIBILITY_LIST] FAIL',

    EDIT_EMPLOYEE_ELEGIBILITY = '[EDIT_EMPLOYEE_ELEGIBILITY] LOAD',
    EDIT_EMPLOYEE_ELEGIBILITY_SUCCESS = '[EDIT_EMPLOYEE_ELEGIBILITY] SUCCESS',
    EDIT_EMPLOYEE_ELEGIBILITY_FAIL = '[EDIT_EMPLOYEE_ELEGIBILITY] FAIL',

    DELETE_EMPLOYEE_ELEGIBILITY = '[DELETE_EMPLOYEE_ELEGIBILITY] LOAD',
    DELETE_EMPLOYEE_ELEGIBILITY_SUCCESS = '[DELETE_EMPLOYEE_ELEGIBILITY] SUCCESS',
    DELETE_EMPLOYEE_ELEGIBILITY_FAIL = '[DELETE_EMPLOYEE_ELEGIBILITY] FAIL',



    EMPLOYEE_CRITERIA = "[EMPLOYEE_CRITERIA] LOAD",
    EMPLOYEE_CRITERIA_SUCCESS = "[EMPLOYEE_CRITERIA] LOAD SUCCESS",
    EMPLOYEE_CRITERIA_FAIL = "[EMPLOYEE_CRITERIA] LOAD FAIL",


    GRID_AXIS = "[GRID_AXIS] LOAD",
    GRID_AXIS_SUCCESS = "[GRID_AXIS] LOAD SUCCESS",
    GRID_AXIS_FAIL = "[GRID_AXIS] LOAD FAIL",

    GRID_SETTING_LOAD = "[GRID_SETTING_LOAD] LOAD",
    GRID_SETTING_LOAD_SUCCESS = "[GRID_SETTING_LOAD] LOAD SUCCESS",
    GRID_SETTING_LOAD_FAIL = "[GRID_SETTING_LOAD] LOAD FAIL",

    GRID_SETTING_ADD = "[GRID_SETTING_ADD] LOAD",
    GRID_SETTING_ADD_SUCCESS = "[GRID_SETTING_ADD] LOAD SUCCESS",
    GRID_SETTING_ADD_FAIL = "[GRID_SETTING_ADD] LOAD FAIL",

    GRID_SETTING_EDIT = "[GRID_SETTING_EDIT] LOAD",
    GRID_SETTING_EDIT_SUCCESS = "[GRID_SETTING_EDIT] LOAD SUCCESS",
    GRID_SETTING_EDIT_FAIL = "[GRID_SETTING_EDIT] LOAD FAIL",

    GRID_SETTING_POPUP_EDIT = "[GRID_SETTING_POPUP_EDIT] LOAD",
    GRID_SETTING_POPUP_EDIT_SUCCESS = "[GRID_SETTING_POPUP_EDIT] LOAD SUCCESS",
    GRID_SETTING_POPUP_EDIT_FAIL = "[GRID_SETTING_POPUP_EDIT] LOAD FAIL",

    GRID_SETTING_DELETE = "[GRID_SETTING_DELETE] LOAD",
    GRID_SETTING_DELETE_SUCCESS = "[GRID_SETTING_DELETE] LOAD SUCCESS",
    GRID_SETTING_DELETE_FAIL = "[GRID_SETTING_DELETE] LOAD FAIL",


    SALARY_EMP_GRAPH = "[SALARY_EMP_GRAPH] LOAD",
    SALARY_EMP_GRAPH_SUCCESS = "[SALARY_EMP_GRAPH] LOAD SUCCESS",
    SALARY_EMP_GRAPH_FAIL = "[SALARY_EMP_GRAPH] LOAD FAIL",

    EMPLOYEE_CRITERIA_DETAIL = "[EMPLOYEE_CRITERIA_DETAIL] LOAD",
    EMPLOYEE_CRITERIA_DETAIL_SUCCESS = "[EMPLOYEE_CRITERIA_DETAIL] LOAD SUCCESS",
    EMPLOYEE_CRITERIA_DETAIL_FAIL = "[EMPLOYEE_CRITERIA_DETAIL] LOAD FAIL",

    ANCHOR_POINT = "[ANCHOR_POINT] LOAD",
    ANCHOR_POINT_SUCCESS = "[ANCHOR_POINT] LOAD SUCCESS",
    ANCHOR_POINT_FAIL = "[ANCHOR_POINT] LOAD FAIL",



    /**-----------------------------------------------------
     * 
     *  Simulation TAB
     * 
     * -----------------------------------------------------
     */
    SIMULATION_LIST = "[SIMULATION_LIST] LOAD",
    SIMULATION_LIST_SUCCESS = "[SIMULATION_LIST] LOAD SUCCESS",
    SIMULATION_LIST_FAIL = "[SIMULATION_LIST] LOAD FAIL",

    SIMULATION_ADD = "[SIMULATION_ADD] LOAD",
    SIMULATION_ADD_SUCCESS = "[SIMULATION_ADD] LOAD SUCCESS",
    SIMULATION_ADD_FAIL = "[SIMULATION_ADD] LOAD FAIL",

    SIMULATION_EDIT = "[SIMULATION_EDIT]` LOAD",
    SIMULATION_EDIT_SUCCESS = "[SIMULATION_EDIT] LOAD SUCCESS",
    SIMULATION_EDIT_FAIL = "[SIMULATION_EDIT] LOAD FAIL",

    SIMULATION_DELETE = "[SIMULATION_DELETE] LOAD",
    SIMULATION_DELETE_SUCCESS = "[SIMULATION_DELETE] LOAD SUCCESS",
    SIMULATION_DELETE_FAIL = "[SIMULATION_DELETE] LOAD FAIL",

}




export class PreviouslyUploadedFilesDetail implements Action {
    readonly type = ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL;
    constructor(public id: any) { }
}
export class PreviouslyUploadedFilesDetailSuccess implements Action {
    readonly type = ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL_SUCCESS;
    constructor(public payload: any) { }

}
export class PreviouslyUploadedFilesDetailFail implements Action {
    readonly type = ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export class EmployeeCriteriaLoad implements Action {
    readonly type = ProcessActionTypes.EMPLOYEE_CRITERIA;
}

export class EmployeeCriteriaLoadSuccess implements Action {
    readonly type = ProcessActionTypes.EMPLOYEE_CRITERIA_SUCCESS;
    public constructor(public payload: any) { }
}

export class EmployeeCriteriaLoadFail implements Action {
    readonly type = ProcessActionTypes.EMPLOYEE_CRITERIA_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class EmployeeCriteriaDetailLoad implements Action {
    readonly type = ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL;
    public constructor(public key: any) { }
}

export class EmployeeCriteriaDetailLoadSuccess implements Action {
    readonly type = ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL_SUCCESS;
    public constructor(public payload: any) { }
}

export class EmployeeCriteriaDetailLoadFail implements Action {
    readonly type = ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class EligibilityListLoad implements Action {
    readonly type = ProcessActionTypes.ELEIGIBILITY_LIST;
    public constructor() { }
}

export class EligibilityListLoadSuccess implements Action {
    readonly type = ProcessActionTypes.ELEIGIBILITY_LIST_SUCCESS;
    public constructor(public payload: any) { }
}

export class EligibilityListLoadFail implements Action {
    readonly type = ProcessActionTypes.ELEIGIBILITY_LIST_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class EditEligibilityLoad implements Action {
    readonly type = ProcessActionTypes.EDIT_EMPLOYEE_ELEGIBILITY;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class EditEligibilityLoadSuccess implements Action {
    readonly type = ProcessActionTypes.EDIT_EMPLOYEE_ELEGIBILITY_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class EditEligibilityLoadFail implements Action {
    readonly type = ProcessActionTypes.EDIT_EMPLOYEE_ELEGIBILITY_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}




export class DeleteEligibilityLoad implements Action {
    readonly type = ProcessActionTypes.DELETE_EMPLOYEE_ELEGIBILITY;
    public constructor(public id: any) { }
}

export class DeleteEligibilityLoadSuccess implements Action {
    readonly type = ProcessActionTypes.DELETE_EMPLOYEE_ELEGIBILITY_SUCCESS;
    public constructor(public payload: any) { }
}

export class DeleteEligibilityLoadFail implements Action {
    readonly type = ProcessActionTypes.DELETE_EMPLOYEE_ELEGIBILITY_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class GridAxisLoad implements Action {
    readonly type = ProcessActionTypes.GRID_AXIS;
    public constructor() { }
}

export class GridAxisLoadSuccess implements Action {
    readonly type = ProcessActionTypes.GRID_AXIS_SUCCESS;
    public constructor(public payload: any) { }
}

export class GridAxisLoadFail implements Action {
    readonly type = ProcessActionTypes.GRID_AXIS_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}

export class GridSettingLoad implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_LOAD;
}

export class GridSettingLoadSuccess implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_LOAD_SUCCESS;
    public constructor(public payload: any) { }
}

export class GridSettingLoadFail implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_LOAD_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class GridSettingAdd implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_ADD;
    public constructor(public payload: any) { }
}

export class GridSettingAddSuccess implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_ADD_SUCCESS;
    public constructor(public payload: any) { }
}

export class GridSettingAddFail implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_ADD_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



export class EditGridSettingLoad implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_EDIT;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class EditGridSettingLoadSuccess implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_EDIT_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class EditGridSettingLoadFail implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_EDIT_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



export class DeleteGridSettingLoad implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_DELETE;
    public constructor(public id: any) { }
}

export class DeleteGridSettingLoadSuccess implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_DELETE_SUCCESS;
    public constructor(public payload: any) { }
}

export class DeleteGridSettingLoadFail implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_DELETE_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



export class SalaryEmpGraphLoad implements Action {
    readonly type = ProcessActionTypes.SALARY_EMP_GRAPH;
}

export class SalaryEmpGraphLoadSuccess implements Action {
    readonly type = ProcessActionTypes.SALARY_EMP_GRAPH_SUCCESS;
    public constructor(public payload: any) { }
}

export class SalaryEmpGraphLoadFail implements Action {
    readonly type = ProcessActionTypes.SALARY_EMP_GRAPH_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



export class AnchorPointLoad implements Action {
    readonly type = ProcessActionTypes.ANCHOR_POINT;
    public constructor(public id: any) { }
}

export class AnchorPointLoadSuccess implements Action {
    readonly type = ProcessActionTypes.ANCHOR_POINT_SUCCESS;
    public constructor(public payload: any) { }
}

export class AnchorPointLoadFail implements Action {
    readonly type = ProcessActionTypes.ANCHOR_POINT_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}




export class UpdateGridSettingPopup implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_POPUP_EDIT;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class UpdateGridSettingPopupSuccess implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_POPUP_EDIT_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class UpdateGridSettingPopupFail implements Action {
    readonly type = ProcessActionTypes.GRID_SETTING_POPUP_EDIT_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



/**
 * ----------------------------------------------
 *  Simulation TAB
 * ----------------------------------------------
 */


export class SimulationList implements Action {
    readonly type = ProcessActionTypes.SIMULATION_LIST;
}

export class SimulationListSuccess implements Action {
    readonly type = ProcessActionTypes.SIMULATION_LIST_SUCCESS;
    public constructor(public payload: any) { }
}

export class SimulationListFail implements Action {
    readonly type = ProcessActionTypes.SIMULATION_LIST_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}


export class SimulationAdd implements Action {
    readonly type = ProcessActionTypes.SIMULATION_ADD;
    public constructor(public payload: any) { }
}

export class SimulationAddSuccess implements Action {
    readonly type = ProcessActionTypes.SIMULATION_ADD_SUCCESS;
    public constructor(public payload: any) { }
}

export class SimulationAddFail implements Action {
    readonly type = ProcessActionTypes.SIMULATION_ADD_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



export class UpdateSimulation implements Action {
    readonly type = ProcessActionTypes.SIMULATION_EDIT;
    public constructor(public payload: any, public id: any, public dialog: any) { }
}

export class UpdateSimulationSuccess implements Action {
    readonly type = ProcessActionTypes.SIMULATION_EDIT_SUCCESS;
    public constructor(public payload: any, public dialog: any) { }
}

export class UpdateSimulationFail implements Action {
    readonly type = ProcessActionTypes.SIMULATION_EDIT_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}



export class DeleteSimulation implements Action {
    readonly type = ProcessActionTypes.SIMULATION_DELETE;
    public constructor(public id: any) { }
}

export class DeleteSimulationSuccess implements Action {
    readonly type = ProcessActionTypes.SIMULATION_DELETE_SUCCESS;
    public constructor(public payload: any) { }
}

export class DeleteSimulationFail implements Action {
    readonly type = ProcessActionTypes.SIMULATION_DELETE_FAIL;
    public constructor(public payload: HttpErrorResponse) { }
}





export type ProcessActions =
    PreviouslyUploadedFilesDetail
    | PreviouslyUploadedFilesDetailSuccess
    | PreviouslyUploadedFilesDetailFail
    | EmployeeCriteriaLoad
    | EmployeeCriteriaLoadSuccess
    | EmployeeCriteriaLoadFail
    | EmployeeCriteriaDetailLoad
    | EmployeeCriteriaDetailLoadSuccess
    | EmployeeCriteriaDetailLoadFail
    | EligibilityListLoad
    | EligibilityListLoadSuccess
    | EligibilityListLoadFail
    | EditEligibilityLoad
    | EditEligibilityLoadSuccess
    | EditEligibilityLoadFail
    | DeleteEligibilityLoad
    | DeleteEligibilityLoadSuccess
    | DeleteEligibilityLoadFail
    | GridAxisLoad
    | GridAxisLoadSuccess
    | GridAxisLoadFail
    | GridSettingLoad
    | GridSettingLoadSuccess
    | GridSettingLoadFail
    | GridSettingAdd
    | GridSettingAddSuccess
    | GridSettingAddFail
    | EditGridSettingLoad
    | EditGridSettingLoadSuccess
    | EditGridSettingLoadFail
    | DeleteGridSettingLoad
    | DeleteGridSettingLoadSuccess
    | DeleteGridSettingLoadFail
    | SalaryEmpGraphLoad
    | SalaryEmpGraphLoadSuccess
    | SalaryEmpGraphLoadFail
    | AnchorPointLoad
    | AnchorPointLoadSuccess
    | AnchorPointLoadFail
    | UpdateGridSettingPopup
    | UpdateGridSettingPopupSuccess
    | UpdateGridSettingPopupFail
    | SimulationList
    | SimulationListSuccess
    | SimulationListFail
    | SimulationAdd
    | SimulationAddSuccess
    | SimulationAddFail
    | UpdateSimulation
    | UpdateSimulationSuccess
    | UpdateSimulationFail
    | DeleteSimulation
    | DeleteSimulationSuccess
    | DeleteSimulationFail;
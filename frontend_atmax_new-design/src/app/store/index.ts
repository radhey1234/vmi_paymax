import { ProcessModel } from './../models/process.model';
import { FormulaSettingModel } from './../models/formula-setting.model';
import { RangeCreationModel } from './../models/range-creation.model';
import { PopulationSelectionModel } from './../models/population-selection.model';
import { EmployeeEligibilityExclusionModel } from './../models/employee-eligibility-exclusion.model';
import { ActionReducerMap } from '@ngrx/store';
import { AuthReducers, DevationDataReducers, UploadedDataSummaryReducers, PreviouslyUploadedFilesReducers, EmployeeEligibilityExclusionReducers, AlanEligibilityReducers, PopulationSelectionReducers, RangeCreationReducers, FormulaSettingReducers, processReducers } from './reducers';
import { PreviouslyUploadedFilesModel, UploadDataSummeryModel, DeviationListModel } from '../models/data-preparation.model';
import { AuthModel } from '../models/auth.model';
import { PlanEligibilityModel } from '../models/plan-eligibility-setting.model';


export interface State {
    auth: AuthModel,
    uploadedDataSummary: UploadDataSummeryModel,
    devationListData: DeviationListModel,
    previouslyUploadedFilesData: PreviouslyUploadedFilesModel,
    planEligibility: PlanEligibilityModel,
    employeeEligibilityExclusion: EmployeeEligibilityExclusionModel,
    populationSelection: PopulationSelectionModel,
    rangeCreationData: RangeCreationModel,
    formulaSettingData: FormulaSettingModel,
    process: ProcessModel

}

export const reducers: ActionReducerMap<State> = {
    auth: AuthReducers,
    uploadedDataSummary: UploadedDataSummaryReducers,
    devationListData: DevationDataReducers,
    previouslyUploadedFilesData: PreviouslyUploadedFilesReducers,
    planEligibility: AlanEligibilityReducers,
    employeeEligibilityExclusion: EmployeeEligibilityExclusionReducers,
    populationSelection: PopulationSelectionReducers,
    rangeCreationData: RangeCreationReducers,
    formulaSettingData: FormulaSettingReducers,
    process: processReducers
}

export * from './actions'
export * from './reducers'
export * from './selectors'

import { ProcessModel } from './../../models/process.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getProcessState = createFeatureSelector<ProcessModel>("process");


export const getCriteria = createSelector(
    getProcessState,
    state => state.grid.employeeCriteria.data
)

export const getCriteriaDetail = createSelector(
    getProcessState,
    state => state.grid.employeeCriteriaDetail.data
)

export const prevUploadFilesDetailData = createSelector(
    getProcessState,
    state => state.data_preparation.uploadedfiledetails.data
)

export const getEmployeePlanEligibilityListData = createSelector(
    getProcessState,
    state => state.plan_eligibility.eligibility_plan_list.data
)

export const getGridSettingListData = createSelector(
    getProcessState,
    state => state.grid.gridSettiingList.data
)

export const getGridAxisData = createSelector(
    getProcessState,
    state => state.grid.gridSettiingAxisList.data
)
export const getEditLoadedState = createSelector(
    getProcessState,
    state => (state.grid.gridSettiingList.edit) ? state.grid.gridSettiingList.edit.loading : false,
)

export const getSalaryEmpGraphDta = createSelector(
    getProcessState,
    state => (state.plan_eligibility.salaryOfTotalEmployeeGraph) ? state.plan_eligibility.salaryOfTotalEmployeeGraph.data : null,
)

export const getAnchorPointData = createSelector(
    getProcessState,
    state => (state.grid.anchorPointData) ? state.grid.anchorPointData.data : null
)

export const getAnchorPointDataLoaded = createSelector(
    getProcessState,
    state => (state.grid.anchorPointData) ? state.grid.anchorPointData.loaded : null
)

export const getGridSettingPopupLoaded = createSelector(
    getProcessState,
    state => (state.grid.anchorPointData.edit) ? state.grid.anchorPointData.edit.loading : null
)

/**
 * ----------------------------------------------
 * Simualtion TAB
 * ----------------------------------------------
 */

export const getSimulationList = createSelector(
    getProcessState,
    state => state.simulation.simulationList.data
);

export const getSimulationEditLoaded = createSelector(
    getProcessState,
    state => (state.simulation.simulationList.edit) ? state.simulation.simulationList.edit.loading : null
)
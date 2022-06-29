import { UploadDataSummeryModel, DeviationListModel, PreviouslyUploadedFilesModel } from '../../models/data-preparation.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUploadedDataSummaryState = createFeatureSelector<UploadDataSummeryModel>('uploadedDataSummary');

export const getUploadedSummaryData = createSelector(
    getUploadedDataSummaryState,
    state => state.data
)

export const getUploadedSummaryStatus = createSelector(
    getUploadedDataSummaryState,
    state => state.loaded
)


export const getDevationListState = createFeatureSelector<DeviationListModel>('devationListData');

export const getDevationListData = createSelector(
    getDevationListState,
    state => state.data
)

export const getDevationListStatus = createSelector(
    getDevationListState,
    state => state.loaded
)

export const getPreviouslyUploadedFilesState = createFeatureSelector<PreviouslyUploadedFilesModel>('previouslyUploadedFilesData');

export const getPreviouslyUploadedFilesData = createSelector(
  getPreviouslyUploadedFilesState,
    state => state.data
)



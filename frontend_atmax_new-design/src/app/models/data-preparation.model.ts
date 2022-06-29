export interface UploadDataSummeryModel {
  loading: boolean;
  loaded: boolean;
  data: Data[] | null;
}

export interface Data {
  datasummery: string;
  data: string;
}

export interface DeviationListModel {
  loading: boolean;
  loaded: boolean;
  data: DeviationListArr[] | null;
}

export interface DeviationListArr {
  Deviationlist: string;
  Deviationdata: string;
}

export interface PreviouslyUploadedFilesModel {
  loading: boolean;
  loaded: false;
  data: {
    id: string;
    creationDate: string;
    fileSizeInKb: string;
    fileName: string;
    rowsInserted: string;
    maxId: string;
    currentTime: string;
    category: string;
  } | null;
}

export interface ProcessModel {
  // dataPreparation: {
  //   previouslyUploadedFilesData: PreviouslyUploadedFilesData | null
  // } | null
  data_preparation: {
    uploadedfiledetails: UploadedFileDetailsModel | null
  },
  plan_eligibility: {
    eligibility_plan_list: EligibilityPlanListModel | null,
    salaryOfTotalEmployeeGraph?: SalaryOfTotalEmployeeGrapModel | null
  }
  grid: {
    employeeCriteria: EmployeeCriteriaModel | null,
    employeeCriteriaDetail: EmployeeCriteriaDetailModel | null,
    gridSettiingAxisList?: GridSettingAxisListModel | null,
    gridSettiingList?: GridSettingListModel | null,
    anchorPointData?: AnchorPointModel | null,
  },
  simulation: {
    simulationList: SimulationListModel | null,
  }
}

export interface SimulationListModel {
  loading: boolean,
  loaded: boolean,
  data: any | null,
  edit?: {
    loading: boolean,
    loaded: boolean
  }
}

export interface AnchorPointModel {
  loading: boolean,
  loaded: boolean,
  data: any | null,
  edit?: {
    loading: boolean,
    loaded: boolean
  }
}

export interface SalaryOfTotalEmployeeGrapModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null,
  data: any | null,
}


export interface GridSettingListModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null,
  data: any | null,
  msg?: string | null,
  edit?: {
    loading: boolean,
    loaded: boolean
  } | null
}

export interface GridSettingAxisListModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null,
  data: any | null,
  msg?: string | null
}

export interface EligibilityPlanListModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null,
  data: any | null,
  msg?: string | null,
  edit?: {
    loading: boolean,
    loaded: boolean
  } | null
}

export interface UploadedFileDetailsModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null,
  data: UploadedFileDetailsData[] | null,
  msg?: string | null
}

export interface UploadedFileDetailsData {
  createdDate?: string | null,
  emp_code: string | null,
  fileRef: string | null,
  emp_name: string | null,
  entity_doj: string | null,
  current_rating: string | null,
  tenure_in_grade: string | null,
  grouped_business_unit: string | null,
  overall_experience: string | null,
  gross_salary: string | number | null,
}

export interface PreviouslyUploadedFilesData {
  id: string;
  creationDate: string;
  fileSizeInKb: string;
  fileName: string;
  rowsInserted: string;
  maxId: string;
  currentTime: string;
  category: string;
}


export interface EmployeeCriteriaModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null;
  data: any | null,
  msg?: string | null
}

export interface EmployeeCriteriaDetailModel {
  loading: boolean,
  loaded: boolean,
  status: boolean | null;
  data: any | null,
  msg?: string | null
}
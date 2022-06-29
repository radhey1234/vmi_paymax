export interface EmployeeEligibilityExclusionModel {
    loading: boolean,
    loaded: boolean,
    status: boolean | null;
    data: Data | null,
    edit?: {
        loading: boolean,
        loaded: boolean
    },
    msg?: string | null
}

export interface Data {
    id: string,
    createdDate: string,
    name: string,
    criterias: CriteriaData[] | null
}

export interface CriteriaData {
    criteria: string,
    condition: string,
    value: string
}

export interface SaveExclusion {
    planID?: number | null,
    name: string | null,
    planName?: string | null,
    criterias: CriteriaData[] | null,
    save_selected_eligibiliy?: string | null,
}

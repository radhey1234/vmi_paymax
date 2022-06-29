export interface PopulationSelectionModel {
    loading: boolean,
    loaded: boolean,
    status: boolean | null;
    data: Data | null,
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

export interface SavePoulation {
    id?: number | null,
    name: string | null,
    criterias: CriteriaData[] | null
}

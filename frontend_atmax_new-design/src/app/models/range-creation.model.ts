export interface RangeCreationModel {
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
    slabs: SlabsData[] | null
}

export interface SlabsData {
    from: string,
    to: string,
}

export interface SaveRangeCreation {
    id?: number | null,
    impactedField: string | null,
    name: string | null,
    slabs: SlabsData[] | null
}

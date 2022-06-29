export interface FormulaSettingModel {
    loading: boolean,
    loaded: boolean,
    status: boolean | null,
    data: Data | null,
    msg?: string | null
}

export interface Data {
    id: string,
    createdDate: string,
    selectField?: string,
    formulaLinkingMatrix: string,
    saveFormulaAs: string
}

export interface savedFormulaSetting {
    createdDate: string,
    selectField?: string,
    formulaLinkingMatrix: string,
    saveFormulaAs: string
}
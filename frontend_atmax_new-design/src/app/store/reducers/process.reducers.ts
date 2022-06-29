import { ProcessActions, ProcessActionTypes } from './../actions/process.actions';
import { ProcessModel } from './../../models/process.model';
export const processInitialState: ProcessModel = {
    data_preparation: {
        uploadedfiledetails: {
            loading: false,
            loaded: false,
            status: null,
            data: null
        }
    },
    plan_eligibility: {
        eligibility_plan_list: {
            loading: false,
            loaded: false,
            status: null,
            data: null,
        },
        salaryOfTotalEmployeeGraph: {
            loading: false,
            loaded: false,
            status: null,
            data: null
        }
    },
    grid: {
        employeeCriteria: {
            loading: false,
            loaded: false,
            status: null,
            data: null
        },
        employeeCriteriaDetail: {
            loading: false,
            loaded: false,
            status: false,
            data: null
        },
        gridSettiingAxisList: {
            loading: false,
            loaded: false,
            status: false,
            data: null
        },
        gridSettiingList: {
            loading: false,
            loaded: false,
            status: false,
            data: null,
            edit: {
                loading: false,
                loaded: false,
            }
        },
        anchorPointData: {
            loading: false,
            loaded: false,
            data: null,
            edit: {
                loading: false,
                loaded: false
            }
        }
    },
    simulation: {
        simulationList: {
            loading: false,
            loaded: false,
            data: null,
            edit: {
                loading: false,
                loaded: false
            }
        }
    }
}

export function processReducers(
    state = processInitialState,
    action: ProcessActions
): ProcessModel {

    switch (action.type) {
        case ProcessActionTypes.ELEIGIBILITY_LIST:
            return {
                ...state,
                plan_eligibility: {
                    eligibility_plan_list: {
                        loading: true,
                        loaded: false,
                        status: false,
                        data: null
                    },
                    salaryOfTotalEmployeeGraph: state.plan_eligibility.salaryOfTotalEmployeeGraph
                }
            }
        case ProcessActionTypes.ELEIGIBILITY_LIST_SUCCESS:
            return {
                ...state,
                plan_eligibility: {
                    eligibility_plan_list: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: action.payload
                    },
                    salaryOfTotalEmployeeGraph: state.plan_eligibility.salaryOfTotalEmployeeGraph
                }
            }
        case ProcessActionTypes.ELEIGIBILITY_LIST_FAIL:
            return {
                ...state,
                plan_eligibility: {
                    eligibility_plan_list: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: null
                    },
                    salaryOfTotalEmployeeGraph: state.plan_eligibility.salaryOfTotalEmployeeGraph
                }
            }
        case ProcessActionTypes.SALARY_EMP_GRAPH:
            return {
                ...state,
                plan_eligibility: {
                    eligibility_plan_list: state.plan_eligibility.eligibility_plan_list,
                    salaryOfTotalEmployeeGraph: {
                        loading: true,
                        loaded: false,
                        status: null,
                        data: null
                    }
                }

            }
        case ProcessActionTypes.SALARY_EMP_GRAPH_SUCCESS:
            return {
                ...state,
                plan_eligibility: {
                    eligibility_plan_list: state.plan_eligibility.eligibility_plan_list,
                    salaryOfTotalEmployeeGraph: {
                        loading: false,
                        loaded: true,
                        status: null,
                        data: action.payload
                    }
                }
            }
        case ProcessActionTypes.SALARY_EMP_GRAPH_FAIL:
            return {
                ...state,
                plan_eligibility: {
                    eligibility_plan_list: state.plan_eligibility.eligibility_plan_list,
                    salaryOfTotalEmployeeGraph: {
                        loading: false,
                        loaded: true,
                        status: null,
                        data: null
                    }
                }
            }
        case ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL:
            return {
                ...state,
                data_preparation: {
                    uploadedfiledetails: {
                        loading: true,
                        loaded: false,
                        status: false,
                        data: null
                    }
                }
            }
        case ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL_SUCCESS:
            return {
                ...state,
                data_preparation: {
                    uploadedfiledetails: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: action.payload
                    }
                }
            }
        case ProcessActionTypes.PREVIOUSLY_UPLOADED_FILES_DETAIL_FAIL:
            return {
                ...state,
                data_preparation: {
                    uploadedfiledetails: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: null
                    }
                }
            }
        case ProcessActionTypes.EMPLOYEE_CRITERIA:
            return {
                ...state,
                grid: {
                    employeeCriteria: {
                        loading: true,
                        loaded: false,
                        status: null,
                        data: null
                    },
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail
                }
            }
        case ProcessActionTypes.EMPLOYEE_CRITERIA_SUCCESS:
            return {
                ...state,
                grid: {
                    employeeCriteria: {
                        loading: false,
                        loaded: true,
                        status: action.payload.status,
                        data: action.payload
                    },
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail
                }
            }

        case ProcessActionTypes.EMPLOYEE_CRITERIA_FAIL:
            return {
                ...state,
                grid: {
                    employeeCriteria: {
                        loading: false,
                        loaded: false,
                        status: null,
                        data: null
                    },
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail
                }

            }

        case ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: {
                        loading: true,
                        loaded: false,
                        status: null,
                        data: null
                    },
                }
            }
        case ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL_SUCCESS:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: {
                        loading: false,
                        loaded: true,
                        status: action.payload.status,
                        data: action.payload
                    },
                }
            }

        case ProcessActionTypes.EMPLOYEE_CRITERIA_DETAIL_FAIL:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: {
                        loading: false,
                        loaded: false,
                        status: null,
                        data: null
                    },
                }

            }

        case ProcessActionTypes.GRID_AXIS:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingList: state.grid.gridSettiingList,
                    gridSettiingAxisList: {
                        loading: false,
                        loaded: false,
                        status: false,
                        data: null
                    }
                }
            }
        case ProcessActionTypes.GRID_AXIS_SUCCESS:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingList: state.grid.gridSettiingList,
                    gridSettiingAxisList: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: action.payload
                    }
                }
            }
        case ProcessActionTypes.GRID_AXIS_FAIL:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingList: state.grid.gridSettiingList,
                    gridSettiingAxisList: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: null
                    }
                }
            }


        case ProcessActionTypes.GRID_SETTING_LOAD:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingAxisList: state.grid.gridSettiingAxisList,
                    gridSettiingList: {
                        loading: false,
                        loaded: false,
                        status: false,
                        data: null,
                    }
                }
            }
        case ProcessActionTypes.GRID_SETTING_LOAD_SUCCESS:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingAxisList: state.grid.gridSettiingAxisList,
                    gridSettiingList: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: action.payload

                    }
                }
            }
        case ProcessActionTypes.GRID_SETTING_LOAD_FAIL:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingAxisList: state.grid.gridSettiingAxisList,
                    gridSettiingList: {
                        loading: false,
                        loaded: true,
                        status: false,
                        data: null
                    }
                }
            }


        case ProcessActionTypes.GRID_SETTING_EDIT:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingAxisList: state.grid.gridSettiingAxisList,
                    gridSettiingList: {
                        loading: state.grid.gridSettiingList.loading,
                        loaded: state.grid.gridSettiingList.loaded,
                        status: state.grid.gridSettiingList.status,
                        data: state.grid.gridSettiingList.data,
                        edit: {
                            loading: true,
                            loaded: false,
                        }
                    }
                }
            }
        case ProcessActionTypes.GRID_SETTING_EDIT_SUCCESS:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingAxisList: state.grid.gridSettiingAxisList,
                    gridSettiingList: {
                        loading: state.grid.gridSettiingList.loading,
                        loaded: state.grid.gridSettiingList.loaded,
                        status: state.grid.gridSettiingList.status,
                        data: state.grid.gridSettiingList.data,
                        edit: {
                            loading: false,
                            loaded: true,
                        }
                    }
                }
            }
        case ProcessActionTypes.GRID_SETTING_EDIT_FAIL:
            return {
                ...state,
                grid: {
                    employeeCriteria: state.grid.employeeCriteria,
                    employeeCriteriaDetail: state.grid.employeeCriteriaDetail,
                    gridSettiingAxisList: state.grid.gridSettiingAxisList,
                    gridSettiingList: {
                        loading: state.grid.gridSettiingList.loading,
                        loaded: state.grid.gridSettiingList.loaded,
                        status: state.grid.gridSettiingList.status,
                        data: state.grid.gridSettiingList.data,
                        edit: {
                            loading: false,
                            loaded: true,
                        }
                    }
                }
            }

        case ProcessActionTypes.ANCHOR_POINT:
            return {
                ...state,
                grid: {
                    ...state.grid,
                    anchorPointData: {
                        loading: true,
                        loaded: false,
                        data: null,
                        edit: {
                            loading: false,
                            loaded: false
                        }
                    }
                }

            }
        case ProcessActionTypes.ANCHOR_POINT_SUCCESS:
            return {
                ...state,
                grid: {
                    ...state.grid,
                    anchorPointData: {
                        loading: false,
                        loaded: true,
                        data: action.payload,
                        edit: {
                            loading: false,
                            loaded: false
                        }
                    }
                }
            }
        case ProcessActionTypes.ANCHOR_POINT_FAIL:
            return {
                ...state,
                grid: {
                    ...state.grid,
                    anchorPointData: {
                        loading: false,
                        loaded: true,
                        data: null,
                        edit: {
                            loading: false,
                            loaded: false
                        }
                    }
                }
            }

        case ProcessActionTypes.GRID_SETTING_POPUP_EDIT:
            return {
                ...state,
                grid: {
                    ...state.grid,
                    anchorPointData: {
                        ...state.grid.anchorPointData,
                        edit: {
                            loading: true,
                            loaded: false
                        }
                    }
                }

            }
        case ProcessActionTypes.GRID_SETTING_POPUP_EDIT_SUCCESS:
            return {
                ...state,
                grid: {
                    ...state.grid,
                    anchorPointData: {
                        ...state.grid.anchorPointData,
                        edit: {
                            loading: false,
                            loaded: true
                        }
                    }
                }
            }
        case ProcessActionTypes.GRID_SETTING_POPUP_EDIT_FAIL:
            return {
                ...state,
                grid: {
                    ...state.grid,
                    anchorPointData: {
                        ...state.grid.anchorPointData,
                        edit: {
                            loading: false,
                            loaded: true
                        }
                    }
                }
            }


        case ProcessActionTypes.SIMULATION_LIST:
            return {
                ...state,
                simulation: {
                    simulationList: {
                        loading: true,
                        loaded: false,
                        data: null,
                        edit: state.simulation.simulationList.edit
                    }
                }
            }
        case ProcessActionTypes.SIMULATION_LIST_SUCCESS:
            return {
                ...state,
                simulation: {
                    simulationList: {
                        loading: true,
                        loaded: false,
                        data: action.payload,
                        edit: state.simulation.simulationList.edit
                    }
                }
            }
        case ProcessActionTypes.SIMULATION_LIST_FAIL:
            return {
                ...state,
                simulation: {
                    simulationList: {
                        loading: true,
                        loaded: false,
                        data: null,
                        edit: state.simulation.simulationList.edit
                    }
                }
            }




        case ProcessActionTypes.SIMULATION_EDIT:
            return {
                ...state,
                simulation: {
                    simulationList: {
                        ...state.simulation.simulationList,
                        edit: {
                            loading: true,
                            loaded: false
                        }
                    }
                }
            }
        case ProcessActionTypes.SIMULATION_EDIT_SUCCESS:
            return {
                ...state,
                simulation: {
                    simulationList: {
                        ...state.simulation.simulationList,
                        edit: {
                            loading: false,
                            loaded: true
                        }
                    }
                }
            }
        case ProcessActionTypes.GRID_SETTING_EDIT_FAIL:
            return {
                ...state,
                simulation: {
                    simulationList: {
                        ...state.simulation.simulationList,
                        edit: {
                            loading: false,
                            loaded: false
                        }
                    }
                }
            }







    }
    return state;
}
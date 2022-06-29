import { EditSimulationPopupComponent } from './../../dialog/edit-simulation-popup/edit-simulation-popup.component';
import { getEmployeeEligibilitExclusionData } from './../../../store/selectors/employee-eligibility-exclusion.selectors';
import { CopyPopulationGroupComponent } from './../../dialog/copy-population-group/copy-population-group.component';
import { EditPopulationGroupComponent } from './../../dialog/edit-population-group/edit-population-group.component';
import { SendLockedDataValidationComponent } from './../../dialog/send-locked-data-validation/send-locked-data-validation.component';
import { EditDataComponent } from './../../dialog/edit-data/edit-data.component';
import { getPopulationSelectionData } from './../../../store/selectors/population-selection.selectors';
import { apiEndPoint } from './../../../../environments/environment';
import { element } from 'protractor';
import { getCriteria, getCriteriaDetail, prevUploadFilesDetailData, getEmployeePlanEligibilityListData, getGridAxisData, getGridSettingListData, getSalaryEmpGraphDta, getSimulationList } from './../../../store/selectors/process.selectors';
import { EmployeeCriteriaLoad, EmployeeCriteriaDetailLoad, PreviouslyUploadedFilesDetail, EligibilityListLoad, GridAxisLoad, GridSettingAdd, GridSettingLoad, DeleteGridSettingLoad, SalaryEmpGraphLoad, SimulationList, SimulationAdd, DeleteSimulationFail, DeleteSimulation } from './../../../store/actions/process.actions';
import { EditFormulaSettingComponent } from './../../dialog/edit-formula-setting/edit-formula-setting.component';
import { getFormulaSettingData } from './../../../store/selectors/formula-setting.selectors';
import { FormulaSettingLoad, FormulaSettingAdd, FormulaSettingDelete } from './../../../store/actions/formula-setting.actions';
import { RangeEditComponent } from './../../dialog/range-edit/range-edit.component';
import { getRangeCreationData } from './../../../store/selectors/range-creation.selectors ';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { RangeCreationAdd, RangeCreationLoad, RangeCreationDelete } from './../../../store/actions/range-creation.actions';
import { SaveRangeCreation } from './../../../models/range-creation.model';
import { PopulationSelectionAdd, PopulationSelectionDelete } from './../../../store/actions/population-selection.actions';
import { SavePoulation } from './../../../models/population-selection.model';
import { EligibilityExclusionAdd, EligibiliyExclusionDelete } from './../../../store/actions/employee-eligibility-exclusion.actions';
import { SaveExclusion } from './../../../models/employee-eligibility-exclusion.model';
import { AnchorPointOptionComponent } from './../../dialog/anchor-point-option/anchor-point-option.component';
import { map, catchError, take } from 'rxjs/operators';
import { EditPlanListComponent } from './../../dialog/edit-plan-list/edit-plan-list.component';
import { PlanAdd, PlanDelete } from './../../../store/actions/plan-eligibility-setting.actions';
import { DeviationListArr } from '../../../models/data-preparation.model';
import { NotifyService } from "./../../../service/notify.service";
import { ProcessGridSettingLoadSelectComponent } from "./../../dialog/process-grid-setting-load-select/process-grid-setting-load-select.component";
import { SidebarService } from "./../../sidebar.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  NgForm
} from "@angular/forms";
import { Chart } from "angular-highcharts";
import { MatDialog, MatTableDataSource, MatSort } from "@angular/material";
import {
  LetterGenerationComponent,
  LoadSimulationComponent,
  EditSimulationComponent,
  BudgetUtilisationComponent,
  ViewPopulationGroupComponent,
  EditGridSettingComponent,
} from "../../dialog";
import * as XLSX from "xlsx";
import { ApiService } from "src/app/service/api.service";
import { Store } from '@ngrx/store';
import { SummamryDataLoad, DevationDataLoad, PreviouslyUploadedFilesLoad, getPreviouslyUploadedFilesData, PlanListDataLoad, EligibilityExclusionLoad, PopulationSelectionLoad, PreviouslyUploadedFilesDelete } from 'src/app/store';
import { Data } from 'src/app/models/data-preparation.model';
import { Observable, throwError } from 'rxjs';
import { SnackBar } from 'src/app/shared/notification';
import * as moment from 'moment'
import { getPlanEligibilityData } from 'src/app/store/selectors/plan-eligibility-setting.selectors';
import { HttpEvent } from '@angular/common/http';
import { EditEmployeeEligibilityListComponent } from '../../dialog/edit-employee-eligibility-list/edit-employee-eligibility-list.component';

export interface UploadDataSummery {
  datasummery: string;
  data: string;
}
export interface DeviationData {
  Deviationlist: string;
  Deviationdata: string;
}
export interface LastOneYear {
  type: string;
  date: string;
  download: string;
  downloadpath?: string
  action: string;
}
export interface planlist {
  planname: string;
  planperiod: string;
  applicableyear_1: string;
  processname: string;
  applicableyear_2: string;
  action: string;
}
export interface rangelist {
  id?: string,
  name: string;
  impactedField: string;
  ranges: string;
  slabs?: any;
  action: string;
}
export interface savedgrid {
  gridname: string;
  impactedfield: string;
  xaxis: string;
  yaxis: string;
  action: string;
}
export interface savedformula {
  id?: string,
  formulafor: string;
  formula: string;
  action: string;
}

export interface population_groups_data {
  populationgroup: string;
  impactedfields: string;
  createddate: string;
  action: string;
}
export interface population_groups_simulate_data {
  populationgroup: string;
  impactedfields: string;
  createddate: string;
  processlinked: string;
  linkedplanname: string;
  linkedgrid: string;
  linkedformula: string;
  simulate: string;
}

export interface letter_template_data {
  name: string;
  templateapplicability: string;
  enabled_disabled: string;
  action: string;
}

export interface eligibilitylist {
  eligibiltyname: string;
  planname: string;
  processname: string;
  enabled_disabled: string;
  impactedcriteria: string;
  applicableyear: string;
  action: string;
}
export interface uploadDataEmloyeeList {
  type: string;
  date: string;
  grade: string;
}
export interface uploadDataEmloyeeListNew {
  employeecode: string;
  employeename: string;
  businessunit: string;
  department: string;
  dateofjoining: string;
  totalworkingexperience: string;
  currentsalary: string;
  rating: string;
  tenureingrade_1: string;
  tenureingrade_2: string;
}
export interface simulation2 {
  employeecode: string;
  name: string;
  grade: string;
  rating: string;
  department: string;
  currentsalary: string;
  benchmarksalary: string;
  comparatio: string;
  suggestedincrement: string;
  marketcorrectioninput: string;
  promotion: string;
  totalsuggestedincrement: string;
  suggestedsalary: string;
  action: string;
}

const UPLOAD_DATA_SUMMERY: UploadDataSummery[] = [
  { datasummery: "No of employees uploaded", data: "500" },
  {
    datasummery: "Min age as per date of Birth",
    data: "18"
  },
  {
    datasummery: "Max age as per date of Birth",
    data: "56"
  },
  {
    datasummery: "Min CTC",
    data: "1,70,000"
  },
  {
    datasummery: "Max CTC",
    data: "18,00,000"
  },
  {
    datasummery: "Total CTC of uploaded data",
    data: "3,20,00,000"
  },
  {
    datasummery: "Number of Grades",
    data: "5"
  }
];

const DEVIATION_DATA1: DeviationData[] = [
  {
    Deviationlist: "Blank Employee IDs",
    Deviationdata: "0"
  },
  {
    Deviationlist: "Blank Date of Joining",
    Deviationdata: "2"
  }
];
const DOCUMENTS_DATA: LastOneYear[] = [
  {
    type: "Employee List_21032019",
    date: "10:45 AM 21 March 2019",
    download: "108 KB",
    action: ""
  },
  {
    type: "Emp List_25082018",
    date: "08:30 PM 25 August 2018",
    download: "112 KB",
    action: ""
  }
];
const DATA_Emloyee_List: uploadDataEmloyeeListNew[] = [
  {
    employeecode: "E1001",
    employeename: "Emp001",
    businessunit: "Retail",
    department: "Sales",
    dateofjoining: "21 Mar 2012",
    totalworkingexperience: "8.2",
    currentsalary: "12,00,000",
    rating: "4",
    tenureingrade_1: "2.3",
    tenureingrade_2: "5.5"
  },
  {
    employeecode: "E1003",
    employeename: "Emp003",
    businessunit: "Manufacturing",
    department: "Operations",
    dateofjoining: "23 Oct 2012",
    totalworkingexperience: "3.2",
    currentsalary: "8,00,500",
    rating: "3",
    tenureingrade_1: "1.1",
    tenureingrade_2: "2.1"
  }
];
const PLAN_LIST_DATA: planlist[] = [
  {
    planname: "Appraisal period_2019",
    planperiod: "1 Jan 2019 to 31 Dec 2019",
    applicableyear_1: "1 Jan 2019 to 31 Dec 2019",
    processname: "Merit Increase",
    applicableyear_2: "18 Dec 2019",
    action: ""
  },
  {
    planname: "Bonus period_2019",
    planperiod: "1 Jan 2019 to 30 June 2019",
    applicableyear_1: "1 Jan 2019 to 31 Dec 2019",
    processname: "Bonus",
    applicableyear_2: "28 Dec 2019",
    action: ""
  }
];
const RANGE_LIST_DATA: rangelist[] = [
  {
    name: "Compa Ratio_ALL",
    impactedField: "Compa Ratio",
    ranges: "<0.8, 0.8 to 1.0, 1.0 to 1.2,>1.2",
    action: ""
  }
];
const SAVED_GRID_LIST_DATA: savedgrid[] = [
  {
    gridname: "Rating vs Grade",
    impactedfield: "Percent Increase",
    xaxis: "Rating",
    yaxis: "Grade",
    action: ""
  },
  {
    gridname: "Compa Ratio vs Rating",
    impactedfield: "Percent Increase",
    xaxis: "Rating",
    yaxis: "Compa Ratio",
    action: ""
  }
];

const SAVED_FORMULA_DATA: savedformula[] = [
  {
    formulafor: "MeritIncrease_New BU",
    formula: "0.5*Rating vs Grade + 1*Promotion",
    action: ""
  }
];

const POPULATION_GROUPS_DATA: population_groups_data[] = [
  {
    populationgroup: "Sales New geography",
    impactedfields: "Department, Location",
    createddate: "28 Dec 2019",
    action: ""
  },
  {
    populationgroup: "Technology",
    impactedfields: "Department",
    createddate: "28 Dec 2019",
    action: ""
  },
  {
    populationgroup: "New BU",
    impactedfields: "BU",
    createddate: "29 Dec 2019",
    action: ""
  }
];

const POPULATION_GROUPS_SIMULATION_DATA: population_groups_simulate_data[] = [
  {
    populationgroup: "Sales New geography",
    impactedfields: "Department, Location",
    createddate: "28 Dec 2019",
    processlinked: "Merit Increase",
    linkedplanname: "Appraisal period_2019",
    linkedgrid: "Compa Ratio_ALL vs Rating",
    linkedformula: " ",
    simulate: "Load"
  },
  {
    populationgroup: "Technology",
    impactedfields: "Department",
    createddate: "28 Dec 2019",
    processlinked: "Merit Increase",
    linkedplanname: "Appraisal period_2019",
    linkedgrid: "Rating vs Grade",
    linkedformula: "0.5*Rating vs Grade + 1*Promotion",
    simulate: "Load"
  }
];
const LETTER_TEMPLATE_DATA: letter_template_data[] = [
  {
    name: "Increment Letter with Promotion_2019",
    templateapplicability: "Promoted",
    enabled_disabled: "Enable",
    action: ""
  },
  {
    name: "Increment Letter_2019",
    templateapplicability: "Eligible Employees without Promotion",
    enabled_disabled: "Enable",
    action: ""
  },
  {
    name: "Bonus Letter_2019",
    templateapplicability: "Eligible Employees",
    enabled_disabled: "Enable",
    action: ""
  },
  {
    name: "Bonus Letter_2019",
    templateapplicability: "26-Dec-2019",
    enabled_disabled: "Enable",
    action: ""
  }
];

const ELIGIBILITY_LIST: eligibilitylist[] = [
  {
    eligibiltyname: "Joining date",
    planname: "Appraisal period_2019",
    processname: "Merit Increase",
    enabled_disabled: "Enabled",
    impactedcriteria: "Date of Joining",
    applicableyear: "19 Dec 2019",
    action: ""
  },
  {
    eligibiltyname: "Recent Promotion",
    planname: "Appraisal period_2019",
    processname: "Process name",
    enabled_disabled: "Enabled",
    impactedcriteria: "Promotion date",
    applicableyear: "19 Dec 2019",
    action: ""
  },
  {
    eligibiltyname: "Resigned Employee",
    planname: "Appraisal period_2019",
    processname: "Process name",
    enabled_disabled: "Enabled",
    impactedcriteria: "Employee Status",
    applicableyear: "19 Dec 2019",
    action: ""
  },
  {
    eligibiltyname: "Bottom performer",
    planname: "Appraisal period_2019",
    processname: "Process name",
    enabled_disabled: "Enabled",
    impactedcriteria: "Rating",
    applicableyear: "19 Dec 2019",
    action: ""
  }
];
const SIMULATION_LIST2: any[] = [
  {
    employeecode: "10001",
    name: "Ram Singham",
    grade: "A",
    rating: "Poor",
    department: "Database",
    currentsalary: "24,08,010",
    benchmarksalary: "14,06,938",
    comparatio: "1.68",
    suggestedincrement: "2%",
    marketcorrectioninput: " ",
    promotion: " ",

    totalpercentincrement:'2%',
    businesscorrectionpercent: "2%",
    totalhikepercent:"4%" ,
    increasedsalary: "24,56,170",
    finalsalary:"25,04,330" ,
    validatedbyrole:'' ,
    validatedbyname: '',
    validationcomment:'' ,
    finalinputcomments:'' ,
    finalinput:'' ,
    action: "",
  },
  {
    employeecode: "95905",
    name: "Shyam Pal",
    grade: "A1",
    rating: "Average",
    department: "IT Audit",
    currentsalary: "24,88,071",
    benchmarksalary: "11,10,244",
    comparatio: "2.22",
    suggestedincrement: "6%",
    marketcorrectioninput: " ",
    promotion: "6% ",

    totalpercentincrement:'3%',
    businesscorrectionpercent: "15%",
    totalhikepercent:"4%" ,
    increasedsalary: "27,86,640",
    finalsalary:"28,61,282" ,
    validatedbyrole: '',
    validatedbyname:'' ,
    validationcomment:'' ,
    finalinputcomments: '',
    finalinput:'' ,
    action: "",
  },
 
];

export interface PeriodicElement111 {
  populationgroup: string;
  impactedfields: string;
  createddate: string;
  processlinked: string;
  headcount: string;
  linkedformula: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement111[] = [
  {populationgroup: 'Sales New geography', impactedfields: 'Department, Location', createddate: '28 Dec 2019 ', processlinked: 'Merit Increase', headcount: '235', linkedformula: '', action: ''},
  {populationgroup: 'Technology', impactedfields: 'Department', createddate: '28 Dec 2019 ', processlinked: 'Merit Increase', headcount: '156', linkedformula: '0.5*Rating vs Grade + 1*Promotion', action: ''},
];
// AOA : array of array
type AOA = any[][];
@Component({
  selector: "app-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.scss"]
})
export class ProcessComponent implements OnInit {
  displayedColumns1: string[] = ['populationgroup', 'impactedfields', 'createddate', 'processlinked', 'headcount', 'linkedformula', 'action'];
  dataSource = ELEMENT_DATA;


  displayedColumns: string[] = ["datasummery", "data"];
  UploadDataSummery = new MatTableDataSource(UPLOAD_DATA_SUMMERY);
  displayedColumns2: string[] = ["Deviationlist", "Deviationdata"];
  DeviationData = new MatTableDataSource(DEVIATION_DATA1);
  LastOneYearDisplayedColumns: string[] = ["type", "date", "download"];
  PreviousLastOneYearDisplayedColumns: string[] = [
    "fileName",
    "creationDate",
    "fileSizeInKb",
    "action"
  ];
  LastOneYearDataSource = new MatTableDataSource(DOCUMENTS_DATA);
  uploadDataEmloyeeListDisplayedColumns: string[] = [
    "employeecode",
    "employeename",
    "businessunit",
    "department",
    "dateofjoining",
    "totalworkingexperience",
    "currentsalary",
    "rating",
    "tenureingrade_1",
    "tenureingrade_2"
  ];
  uploadDataEmloyeeListDataSource = new MatTableDataSource([]);
  planlistDisplayedColumns: string[] = [
    "planname",
    "planperiod",
    "applicableyear_1",
    "processname",
    "applicableyear_2",
    "action"
  ];
  planlistDataSource = new MatTableDataSource(PLAN_LIST_DATA);
  eligibilitylistDisplayedColumns: string[] = [
    "eligibiltyname",
    "planname",
    "processname",
    "enabled_disabled",
    "impactedcriteria",
    "applicableyear",
    "action"
  ];
  // rangeCreationDataSource = RANGE_LIST_DATA;
  rangeCreationDataSource = new MatTableDataSource();
  rangeCreationDisplayedColumns: string[] = [
    "name",
    "impactedField",
    "ranges",
    "action"
  ];

  // savedGridDataSource = SAVED_GRID_LIST_DATA;
  savedGridDataSource = new MatTableDataSource();
  savedGridDisplayedColumns: string[] = [
    "gridname",
    "impactedfield",
    "xaxis",
    "yaxis",
    "action"
  ];

  // savedFormulaDataSource = SAVED_FORMULA_DATA;
  savedFormulaDataSource = new MatTableDataSource();

  savedFormulaDisplayedColumns: string[] = ["formulafor", "formula", "action"];

  // populationGroupsDataSource = POPULATION_GROUPS_DATA;
  populationGroupsDataSource = new MatTableDataSource();
  populationGroupsDisplayedColumns: string[] = [
    "populationgroup",
    "impactedfields",
    "createddate",
    "action"
  ];

  populationGroupsSimuationDataSource = POPULATION_GROUPS_SIMULATION_DATA;
  populationGroupsSimuationDisplayedColumns: string[] = [
    "populationgroup",
    "impactedfields",
    "createddate",
    "processlinked",
    "linkedplanname",
    "linkedgrid",
    "linkedformula",
    "simulate"
  ];

  letterTemplateDataSource = LETTER_TEMPLATE_DATA;
  letterTemplateDisplayedColumns: string[] = [
    "name",
    "templateapplicability",
    "enabled_disabled",
    "action"
  ];

  // eligibilitylistDataSource = ELIGIBILITY_LIST;
  eligibilitylistDataSource = new MatTableDataSource();
  simulation2DisplayedColumns: string[] = [
    "employeecode",
    "name",
    "grade",
    "rating",
    "department",
    "currentsalary",
    "benchmarksalary",
    "comparatio",
    "suggestedincrement",
    "marketcorrectioninput",
    "promotion",
    "totalpercentincrement",
    "increasedsalary",
    "action"
  ];
  simulation2DataSource = new MatTableDataSource(SIMULATION_LIST2);

  simualtionListDataSource = new MatTableDataSource();
  simualtionListDataDisplayedColumns: string[] = [
    "name",
    "impactedfields",
    "createddate",
    "action"
  ];

  // date = new FormControl(new Date());
  date = new FormControl();
  // serializedDate = new FormControl(new Date().toISOString());
  serializedDate = new FormControl();
  serializedApplicableToDate = new FormControl('');
  ptype = null;
  /** Default 的 excel file-name 文字 */
  sheetJsExcelName = "null.xlsx";
  refExcelData: Array<any>;
  excelTransformNum = [];
  sheetCellRange;
  excelDataEncodeToJson;

  /**
   * sheet.js
   */
  origExcelData: AOA = [
    ["Data: 2018/10/26"],
    ["Data: 2018/10/26"],
    ["Data: 2018/10/26"]
  ];

  // Form Group
  uploadEmpDataForm: FormGroup;
  uploadEmpTestPerformDataForm: FormGroup;
  uploadEmpCtcDataForm: FormGroup;
  uploadEmpBonusDataForm: FormGroup;

  @ViewChild("uploadEmpDataFile", { static: false })
  uploadEmpDataFile: ElementRef;
  @ViewChild("uploadEmpTestPerformDataFile", { static: false })
  uploadEmpTestPerformDataFile: ElementRef;
  @ViewChild("uploadEmpCtcDataFile", { static: false })
  uploadEmpCtcDataFile: ElementRef;
  @ViewChild("uploadEmpBonusDataFile", { static: false })
  uploadEmpBonusDataFile: ElementRef;

  uploadEmpDataFileName: string | null;
  uploadCtcDataFileName: string | null;
  uploadBonusDataFileName: string | null;
  uploadPerformenceDataFileName: string | null;

  employeeEligibilityFormData: SaveExclusion | null;
  populationSelelctionData: SavePoulation | null;
  rangeCreationFormData: SaveRangeCreation | null;

  uploadFormRecord: any;
  data$: Observable<Data | null>;
  devationData$: Observable<DeviationListArr | null>;

  constructor(
    private dialog: MatDialog,
    private header: SidebarService,
    private _fb: FormBuilder,
    private apiService: ApiService,
    private notifyService: NotifyService,
    private snackbar: SnackBar,
    private store: Store<{}>
  ) {
    this.uploadEmpDataForm = this._fb.group({
      uploadEmpDataFile: null
    });
    this.uploadEmpTestPerformDataForm = this._fb.group({
      uploadEmpTestPerformDataFile: null
    });
    this.uploadEmpCtcDataForm = this._fb.group({
      uploadEmpCtcDataFile: null
    });
    this.uploadEmpBonusDataForm = this._fb.group({
      uploadEmpBonusDataFile: null
    });
    this.uploadEmpDataFileName = null;
    store.dispatch(new SummamryDataLoad());
    store.dispatch(new DevationDataLoad());
  }

  getErrors(ctrl) {
    return Object.keys(ctrl.errors);
  }

  employeeEligibilityRulesForm = this._fb.group({
    planName: [null, Validators.required],
    rules: this._fb.array([
      this._fb.group({
        criteria: [null, Validators.required],
        condition: [null, Validators.required],
        value: [null, Validators.required]
      })
    ]),
    eligibilityAs: [null, Validators.required]
  });

  planCreationRulesForm = this._fb.group({
    processApplicable: [null, Validators.required],
    planName: [null, Validators.required],
    planPeriodFrom: [null],
    planPeriodTo: [null],
    applicableCalenderFrom: [null],
    applicableCalenderTo: [null],
    effectiveDate: [null]
  });

  gridSettingForm = this._fb.group({
    xAxis: [null, Validators.required],
    yAxis: [null, Validators.required],
    result: [null, Validators.required],
    impactField: [null, Validators.required],
    name: [null, Validators.required],
  });

  submitPlan(event) {
    if (!this.planCreationRulesForm.value.planPeriodFrom) {
      return this.snackbar.error({
        msg: 'Plan Period from is rquired',
        action: 'Close'
      });
    }
    if (!this.planCreationRulesForm.value.planPeriodTo) {
      return this.snackbar.error({
        msg: 'Plan Period to is rquired',
        action: 'Close'
      });
    }

    if (!this.planCreationRulesForm.value.applicableCalenderFrom) {
      return this.snackbar.error({
        msg: 'Applicable Calender from is rquired',
        action: 'Close'
      });
    }

    if (!this.planCreationRulesForm.value.applicableCalenderTo) {
      return this.snackbar.error({
        msg: 'Applicable Calender to is rquired',
        action: 'Close'
      });
    }

    if (!this.planCreationRulesForm.value.effectiveDate) {
      return this.snackbar.error({
        msg: 'Effective Date is rquired',
        action: 'Close'
      });
    }

    const planPeriodFrom = moment(this.planCreationRulesForm.value.planPeriodFrom).format("MM/DD/YYYY");
    const planPeriodTo = moment(this.planCreationRulesForm.value.planPeriodTo).format("MM/DD/YYYY");
    const applicableCalenderFrom = moment(this.planCreationRulesForm.value.applicableCalenderFrom).format("MM/DD/YYYY");
    const applicableCalenderTo = moment(this.planCreationRulesForm.value.applicableCalenderTo).format("MM/DD/YYYY");
    const effectiveDate = moment(this.planCreationRulesForm.value.effectiveDate).format("MM/DD/YYYY");
    const processApplicable = this.planCreationRulesForm.value.processApplicable;
    const planName = this.planCreationRulesForm.value.planName;

    this.store.dispatch(new PlanAdd({
      processApplicable: processApplicable,
      planName: planName,
      planPeriodFrom: planPeriodFrom,
      planPeriodTo: planPeriodTo,
      applicableCalenderFrom: applicableCalenderFrom,
      applicableCalenderTo: applicableCalenderTo,
      effectiveDate: effectiveDate
    }));
  }

  get rules() {
    return this.employeeEligibilityRulesForm.get("rules") as FormArray;
  }

  addEmployeeEligibilityRules() {
    return this.rules.push(
      this._fb.group({
        criteria: [null, Validators.required],
        condition: [null, Validators.required],
        value: [null, Validators.required]
      })
    );
  }

  removeEmployeeEligibilityRules(index: any) {
    return this.rules.removeAt(index);
  }

  /**
   * Population Selection for the Grid
   */
  populationSelectionGridRulesForm = this._fb.group({
    rulesgrid: this._fb.array([
      this._fb.group({
        criteria: [null, Validators.required],
        condition: [null, Validators.required],
        value: [null, Validators.required]
      })
    ]),
    selectedPopulation: [null]
  });
  get rulesgrid() {
    return this.populationSelectionGridRulesForm.get("rulesgrid") as FormArray;
  }

  addPopulationSelectionGridRules() {
    return this.rulesgrid.push(
      this._fb.group({
        criteria: [null, Validators.required],
        condition: [null, Validators.required],
        value: [null, Validators.required]
      })
    );
  }

  removePopulationSelectionGridRules(index: any) {
    return this.rulesgrid.removeAt(index);
  }

  savePopulation() {
    console.log(this.populationSelectionGridRulesForm.controls)
  }

  /**
   * Range Creation Form Group
   */

  rangeCreationRulesForm = this._fb.group({
    impactFieldName: [null, Validators.required],
    rangerules: this._fb.array([
      this._fb.group({
        from: [null, Validators.required],
        to: [null, Validators.required]
      })
    ]),
    rangeName: [null, Validators.required]
  });
  get rangerules() {
    return this.rangeCreationRulesForm.get("rangerules") as FormArray;
  }

  addRangeCreationRules(val1, val2) {

    return this.rangerules.push(
      this._fb.group({
        from: [(val1) ? val1 : null, Validators.required],
        to: [(val2) ? val2 : null, Validators.required]
      })
    );
  }

  removeRangeCreationRules(index: any) {
    return this.rangerules.removeAt(index);
  }

  /**
   * Simulation Analysis
   */
  simulationAnalysisRulesForm = this._fb.group({
    simulationrules: this._fb.array([
      this._fb.group({
        criteria: [null, Validators.required],
        condition: [null, Validators.required],
        value: [null, Validators.required]
      })
    ]),
    selectedSimulation: [null, Validators.required]
  });
  get simulationrules() {
    return this.simulationAnalysisRulesForm.get("simulationrules") as FormArray;
  }

  addSimulationAnalysisRules() {
    return this.simulationrules.push(
      this._fb.group({
        criteria: [null, Validators.required],
        condition: [null, Validators.required],
        value: [null, Validators.required]
      })
    );
  }

  removeSimulationAnalysisRules(index: any) {
    return this.simulationrules.removeAt(index);
  }

  /**
   * FOrmula Setting rules form
   */
  formulaSettingRulesForm = this._fb.group({
    formulaLinkingMatrix: [null, Validators.required],
    saveFormulaAs: [null, Validators.required]
  });

  summaryTotalEmployees = null;

  loadSummamryTotalGraph() {
    this.store.dispatch(new SalaryEmpGraphLoad());

  }

  salaryEmpTotalGraphLoad(totalEmp, totalPopulation) {
    let max = totalEmp;
    if (totalEmp > totalPopulation) {
      max = totalPopulation;
    }
    this.summaryTotalEmployees = new Chart({
      chart: {
        type: "line"
      },
      title: {
        text: "Salary of total employees and selected",
        align: "left",
        margin: 30,
        style: {
          color: "#898C95"
        }
      },
      xAxis: {
        categories: ["Total No of employees", "Selected population"]
      },
      yAxis: {
        title: {
          text: " ",
          style: {
            color: "#898C95"
          }
        },
        min: 0,
        max: max,
        tickInterval: 25
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: "column",
          showInLegend: false,
          data: [
            {
              y: totalEmp,
              dataLabels: {
                enabled: true,
                shape: "box",
                backgroundColor: "#FFF",
                borderWidth: 1,
                borderColor: "#F6B843",
                borderRadius: 3,
                style: {
                  color: "#F6B843",
                  textOutline: "none"
                },
                x: 50
              }
            },
            {
              y: totalPopulation,
              dataLabels: {
                enabled: true,
                shape: "box",
                backgroundColor: "#FFF",
                borderWidth: 1,
                borderColor: "#2CEB84",
                borderRadius: 3,
                style: {
                  color: "#2CEB84",
                  textOutline: "none"
                },
                x: 50
              }
            }
          ],
          pointWidth: 50,
          color: "#e0e0e0",
          states: {
            hover: {
              color: "#e0e0e0"
            }
          }
        }
      ],
      plotOptions: {
        column: {
          cursor: "pointer"
        }
      }
    });
  }



  ctcExcelUploadDataKey = {
    additional_allowence: "",
    administrative_fee: "",
    advisor_fee: "",
    assistance_allowance: "",
    basic: "",
    basic_stipend: "",
    bonus: "",
    car_EMI: "",
    car_maintenance: "",
    city_compensatory_allowance: "",
    city_living_allow: "",
    creationDate: "",
    driver_salary: "",
    effective_date_of_CTC: "",
    employee_code: "",
    esi_employer_contribution: "",
    exgratia: "",
    food_subsidy: "",
    gratuity: "",
    hra: "",
    id: "",
    leave_travel_allowance: "",
    medical_allowance: "",
    medical_fee: "",
    min_guaranteed_fee: "",
    nps_contribution: "",
    pdp: "",
    petrol_exp: "",
    pf: "",
    pf_employer_cont: "",
    retainership_fee: "",
    shift_allowance: "",
    special_allowance: "",
    speciality_allowance: "",
    stipend: "",
    team_leader_allowance: "",
    total_ctc: "",
    tvp: ""
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('formulaSettingForm', { static: false }) formulaSettingForm: NgForm;

  previouslyUploadedFilesData$: Observable<any>;
  planEligibilityData$: Observable<any>;
  employeeEligibilityListData$: Observable<any>;
  rangeCreationData$: Observable<any>;
  formulaSettingData$: Observable<any>;
  previouslyUploadedFilesDetailData$: Observable<any>;
  gridSettingListData$: Observable<any>;


  populationGroupsData$: Observable<any>;

  criteriaData$: Observable<any>;
  salaryEmpGraphData$: Observable<any>;
  criteriaDataListOption: any[] = [];
  public showFileDetailTable = false;

  ngOnInit() {

    this.header.header = "Process";
    this.simulation2DataSource.sort = this.sort;
    this.uploadDataEmloyeeListDataSource.sort = this.sort;
    this.ptype = this.header.ptype;

    this.data$ = this.store.select(state => state["uploadedDataSummary"].data);
    this.data$.subscribe(data => {
      // console.log(data);
      // @ts-ignore
      this.UploadDataSummery = new MatTableDataSource(data);
    });

    this.devationData$ = this.store.select(state => state["devationListData"].data);
    this.devationData$.subscribe(data => {
      // @ts-ignore
      this.DeviationData = new MatTableDataSource(data);
    });

    this.store.dispatch(new EmployeeCriteriaLoad())


    this.criteriaData$ = this.store.select(getCriteria);
    this.criteriaData$.subscribe(data => {
      if (data) {
        data.map(item => {
          for (const property in item) {
            if (property != 'createdDate') {
              this.criteriaDataListOption.push({
                key: property.toString(),
                value: item[property].toString()
              });
            }
          }
        });
        this.criteriaDataListSelectOption = this.criteriaDataListOption;
        this.filteredList5 = this.criteriaDataListSelectOption.slice();
      }
    });

    this.empCriteriaDetailValue$ = this.store.select(getCriteriaDetail);
    this.empCriteriaDetailValue$.subscribe(data => {
      // console.log(this.populationCriteriaIndex);
      if (this.selectName == 'EMPELIGIBILITY') {
        const index = this.empEligibiltiRulesDropdownIndex;
        this.empEligibilityRulesValue[index] = data;
      }
      else if (this.selectName == 'SIMULATION_ANALYSIS_SELECTION') {
        const index = this.simulationCriteriaIndex;
        this.simulationAnalysisCriteriaValue[index] = data;
      } else if (this.selectName == 'POUPULATION_SELECTION') {
        const index = this.populationCriteriaIndex;
        this.populationSelectionValue[index] = data;
      }

    })

    this.previouslyUploadedFilesDetailData$ = this.store.select(prevUploadFilesDetailData);
    this.previouslyUploadedFilesDetailData$.subscribe(data => {
      if (data) {
        // console.log(data);
        this.showFileDetailTable = true;
        let dataArray = [];
        data.map(res => {
          dataArray.push({
            employeecode: res.emp_code,
            employeename: res.emp_name,
            businessunit: res.grouped_business_unit,
            department: "Sales",
            dateofjoining: res.entity_doj,
            totalworkingexperience: res.overall_experience,
            currentsalary: res.gross_salary,
            rating: res.current_rating,
            tenureingrade_1: res.tenure_in_grade,
            tenureingrade_2: res.tenure_in_grade
          })
        });
        if (dataArray) {
          this.uploadDataEmloyeeListDataSource = new MatTableDataSource(dataArray);
        }
      }
    })

    this.loadTab1()



  }


  loadTab1() {
    this.store.dispatch(new PreviouslyUploadedFilesLoad())
    this.previouslyUploadedFilesData$ = this.store.select(getPreviouslyUploadedFilesData)
    let dataArray = [];
    this.previouslyUploadedFilesData$.subscribe((data: any) => {
      if (data) {
        data.map((res) => {
          dataArray.push({
            ...res,
            downloadpath: apiEndPoint(`api/employee/download/${res.id}`)
          })
        })
        this.LastOneYearDataSource = new MatTableDataSource(dataArray);
      }
    })


  }
  loadTab2() {
    this.store.dispatch(new PlanListDataLoad())
    this.store.dispatch(new EligibilityListLoad());
    this.planEligibilityData$ = this.store.select(getPlanEligibilityData)
    this.planEligibilityData$.subscribe((data: any) => {
      if (data) {
        this.planlistDataSource = new MatTableDataSource(data)
      }
    })

    this.employeeEligibilityListData$ = this.store.select(getEmployeePlanEligibilityListData);
    this.employeeEligibilityListData$.subscribe((data: any) => {
      if (data) {
        const dataArray = [];
        if (data.hasOwnProperty("process_name")) {
          let impactedCriteria = '';
          data.name.criterias.map(info => {
            impactedCriteria += info.value + ", ";
          });
          if (impactedCriteria != '') {
            impactedCriteria = impactedCriteria.slice(0, -1);
          }
          dataArray.push({
            ...data,
            eligibiltyname: data.name['name'],
            planname: data.plan_name,
            processname: data.process_name,
            enabled_disabled: data.enabled,
            impactedcriteria: impactedCriteria,
            applicableyear: data.applicable_calender,
          })
        } else {
          data.map(res => {
            let impactedCriteria = '';
            res.name.criterias.map(info => {
              impactedCriteria += info.value + ", ";
            });
            if (impactedCriteria != '') {
              impactedCriteria = impactedCriteria.slice(0, -1);
            }
            dataArray.push({
              ...res,
              eligibiltyname: res.name['name'],
              planname: res.plan_name,
              processname: res.process_name,
              enabled_disabled: res.enabled,
              impactedcriteria: impactedCriteria,
              applicableyear: res.applicable_calender,
            })
          })
        }
        this.eligibilitylistDataSource = new MatTableDataSource(dataArray);
        // console.log(data);
      }
    })

    this.store.dispatch(new EligibilityExclusionLoad());

    this.salaryEmpGraphData$ = this.store.select(getSalaryEmpGraphDta);
    this.salaryEmpGraphData$.subscribe(data => {
      if (data) {
        // console.log(data);
        //@ts-ignore
        this.salaryEmpTotalGraphLoad(data.total_employees, data.selected_population);
      }
    })
  }

  loadTab3() {
    this.store.dispatch(new PopulationSelectionLoad())
    this.store.dispatch(new RangeCreationLoad())
    this.store.dispatch(new FormulaSettingLoad())
    this.store.dispatch(new GridSettingLoad());
    this.store.dispatch(new GridAxisLoad());

    this.rangeCreationData$ = this.store.select(getRangeCreationData);
    this.rangeCreationData$.subscribe((data: any) => {
      let rangeData: rangelist[] | null = [];
      if (data) {
        // console.log(data);
        data.map(res => {
          // console.log(res);
          // if (res.name) {
          let rangeList = "";
          let min = "";
          let max = "";
          if (res.slabs) {
            res.slabs.map((item, index) => {
              if (index == 0 && typeof item.from != "undefined") {
                min = item.from;
              }

              if (typeof item.from != "undefined") {
                rangeList += `${item.from}`;
              }
              if (typeof item.to != "undefined") {
                rangeList += ` to ${item.to}, `;
              }
              // if (typeof item.form != "undefined" && typeof item.to != "undefined") {
              // rangeList += `${item.from} to ${item.to}, `;
              // }
              if (index == (res.slabs.length - 1) && typeof item.to != "undefined") {
                max = item.to;
              }
            })

            if (rangeList != '') {
              rangeList = rangeList.slice(0, -1);
              rangeList = `<${min}, ${rangeList}>${max}`;
              // console.log(rangeList);
            }
          }
          rangeData.push({
            id: res.id,
            name: res.name,
            impactedField: res.impactedField,
            slabs: res.slabs,
            ranges: rangeList,
            action: ""
          });
          // }
        });

        if (rangeData) {
          this.rangeCreationDataSource = new MatTableDataSource(rangeData);
        }

      }
    })

    this.formulaSettingData$ = this.store.select(getFormulaSettingData);
    this.formulaSettingData$.subscribe((data: any) => {
      let SAVED_FORMULA_DATA_ARRAY: savedformula[] = [];
      if (data) {
        data.map(res => {
          SAVED_FORMULA_DATA_ARRAY.push({
            id: res.id,
            formulafor: res.formulaLinkingMatrix,
            formula: res.saveFormulaAs,
            action: ''
          });
        })
      }
      if (SAVED_FORMULA_DATA_ARRAY) {
        this.savedFormulaDataSource = new MatTableDataSource(SAVED_FORMULA_DATA_ARRAY);
      }
    })

    this.populationGroupsData$ = this.store.select(getPopulationSelectionData);
    this.populationGroupsData$.subscribe((data: any) => {
      let dataArray = [];
      if (data) {
        data.map(res => {
          let impactedfields = '';
          if (res.criterias) {
            res.criterias.map(list => {
              impactedfields += list.value + ", ";
            });
          }
          impactedfields = impactedfields.slice(0, -2);
          dataArray.push({
            ...res,
            populationgroup: res.name,
            impactedfields: impactedfields,
            createddate: new Date(res.createdDate)
          });

        })
        this.populationGroupsDataSource = new MatTableDataSource(dataArray);
      }
    })

    this.gridAxisData$ = this.store.select(getGridAxisData);
    this.gridAxisData$.subscribe((data: any) => {
      if (data) {
        this.gridAxisData = data;
      }
    })

    this.gridSettingListData$ = this.store.select(getGridSettingListData);
    this.gridSettingListData$.subscribe(data => {
      if (data) {
        let dataArray = [];
        data.map((res) => {
          dataArray.push({
            ...res,
            gridname: res.name,
            impactedfield: res.impactField,
            xaxis: res.xAxis,
            yaxis: res.yAxis
          })
        })
        this.savedGridDataSource = new MatTableDataSource(dataArray);
      }
    })


    // console.log(this.criteriaDataListOption);
    // this.populationSelectionValue = [];
  }

  loadTab4() {
    this.store.dispatch(new SimulationList());

    this.simulaitionList$ = this.store.select(getSimulationList);
    this.simulaitionList$.subscribe((data: any) => {
      let dataArray = [];
      if (data) {
        data.map(res => {
          let impactedfields = '';
          if (res.criterias) {
            res.criterias.map(list => {
              impactedfields += list.value + ", ";
            });
          }
          impactedfields = impactedfields.slice(0, -2);
          dataArray.push({
            ...res,
            name: res.name,
            impactedfields: impactedfields,
            createddate: new Date(res.createdDate)
          });

        })
        this.simualtionListDataSource = new MatTableDataSource(dataArray);
      }
    })

  }

  loadTab5() {

  }

  public criteriaDataListSelectOption: any = [];
  public filteredList5 = [];
  public populationSelectionValue: any[] = [];
  public empEligibilityRulesValue: any[] = [];
  public simulationAnalysisCriteriaValue: any[] = [];
  empCriteriaDetailValue$: Observable<any>;
  simulaitionList$: Observable<any>;
  simulaitionList: any;;
  populationCriteriaIndex = null;
  empEligibiltiRulesDropdownIndex = null;
  simulationCriteriaIndex = null;
  gridAxisData$: Observable<any>;
  gridAxisData: any;
  public selectName = null;



  tabChange(event) {
    switch (event.index) {
      case 0:
        this.loadTab1()
        break;
      case 1:
        this.loadTab2()
        break;
      case 2:
        this.loadTab3()
        break;
      case 3:
        this.loadTab4()
        break;
      case 4:
        this.loadTab5()
        break;

      default:
        break;
    }
  }


  anotherArray = this.criteriaDataListOption;
  selectedValue = null;
  filterListCriteria(val) {
    // console.log(this.populationSelectionGridRulesForm)
    this.criteriaDataListOption = this.anotherArray.filter(list => {
      console.log(val);
      return list.value.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

  matSelectKeydownEvent($event) {
    if ($event.code == 'Space') {
      $event.stopPropagation()
    }
    // console.log($event);
  }



  LetterGeneration() {
    const dialogRef = this.dialog.open(LetterGenerationComponent, {
      panelClass: "customModalClass"
    });
  }

  LoadSimulationPopup() {
    const dialogRef = this.dialog.open(LoadSimulationComponent, {
      panelClass: "simulationpop"
    });
  }
  SendLockedDataValidation() {
    const dialogRef = this.dialog.open(SendLockedDataValidationComponent, {
      panelClass: "customModalClass"
    });
  }
  EditData() {
    const dialogRef = this.dialog.open(EditDataComponent, {
      panelClass: "simulationpopedit"
    });
  }
  editSimulationPopup() {
    const dialogRef = this.dialog.open(EditSimulationComponent, {
      panelClass: "simulationpopedit"
    });
  }

  processGridSettingLoadSelectPopup() {

  }


  loadAnchorPointPopup(id) {
    let data = {
      id
    }
    const dialogRef = this.dialog.open(AnchorPointOptionComponent, {
      panelClass: "processgridsetting",
      data: data,
      // disableClose: true
    });
  }
  loadcustomPercentagePopup(id) {
    let data = {
      id
    }
    const dialogRef = this.dialog.open(ProcessGridSettingLoadSelectComponent, {
      panelClass: "processgridsetting",
      data: data,
      // disableClose: true
    });
  }

  budgetUtilisationPopup() {
    const dialogRef = this.dialog.open(BudgetUtilisationComponent, {
      panelClass: "simulationpop"
    });
  }

  selectChange($event) {
    console.log($event.value);
    this.processGridSettingLoadSelectPopup();
  }

  simulationFilterChange($event) {
    this.budgetUtilisationPopup();
  }

  inputCtcExcelOnChange(evt) {
    const target: HTMLInputElement = evt.target;
    if (target.files.length === 0) {
      throw new Error("Please Upload File");
    }
    if (target.files.length > 1) {
      throw new Error("Cannot use multiple files");
    }
    this.sheetJsExcelName = evt.target.files.item(0).name;
    console.log(this.sheetJsExcelName);
    const reader: FileReader = new FileReader();
    this.CTCreaderExcel(reader);
    reader.readAsArrayBuffer(target.files[0]);
    // this.readerExcel(reader);
    // reader.readAsArrayBuffer(target.files[0]);
    // this.sheetBufferRender = target.files[0];
    // this.isEmptyDrop = false;
    // this.isExcelDrop = true;
  }

  CTCreaderExcel(reader, index = 0) {
    /* reset array */
    this.origExcelData = [];
    reader.onload = (e: any) => {
      const data: string = e.target.result;
      const wBook: XLSX.WorkBook = XLSX.read(data, { type: "array" });
      // this.localWorkBook = wBook;
      const wsname: string = wBook.SheetNames[index];
      // this.sheetNameForTab = wBook.SheetNames;
      // this.totalPage = this.sheetNameForTab.length;
      // this.selectDefault = this.sheetNameForTab[index];
      const wSheet: XLSX.WorkSheet = wBook.Sheets[wsname];
      // this.localwSheet = wSheet;
      this.sheetCellRange = XLSX.utils.decode_range(wSheet["!ref"]);
      // this.sheetMaxRow = this.sheetCellRange.e.r;
      this.origExcelData = <AOA>XLSX.utils.sheet_to_json(wSheet, {
        header: 1,
        range: wSheet["!ref"],
        raw: true
      });
      this.refExcelData = this.origExcelData
        .slice(1)
        .map(value => Object.assign([], value));
      /* 抓 range & 清除占存 A->Z */
      this.excelTransformNum = [];
      for (let idx = 0; idx <= this.sheetCellRange.e.c; idx++) {
        this.excelTransformNum[idx] = this.transform(idx);
      }

      /* 加入 order 的佔位(#) */
      // this.refExcelData.map(x => x.unshift('#'));
      // this.excelTransformNum.unshift('order');
      // console.log(this.refExcelData);
      // console.log(this.excelTransformNum);
      // return this.refExcelData;
      this.excelDataEncodeToJson = this.refExcelData.map(item =>
        item.reduce((obj, val, i) => {
          obj[Object.keys(this.ctcExcelUploadDataKey)[i]] = val;
          return obj;
        }, {})
      );
      const formatData = [];
      for (index = 0; index < this.excelDataEncodeToJson.length; index++) {
        formatData.push({
          ...this.ctcExcelUploadDataKey,
          ...this.excelDataEncodeToJson[index]
        });
      }
      console.log(formatData);
    };
  }
  transform(value) {
    return (
      (value >= 26 ? this.transform(((value / 26) >> 0) - 1) : "") +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[value % 26 >> 0]
    );
  }


  onUploadEmpDataFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      // this.uploadEmpDataForm.get('uploadEmpDataFile').setValue(file);

      var formData = new FormData();
      formData.append("file", file);

      //@ts-ignore
      for (var pair of formData.entries()) {
        this.uploadFormRecord = pair[1];
        // this.uploadEmpDataFileName = pair[1].name;
      }

      // @ts-ignore
      this.apiService.uploadEmpData(formData).subscribe(
        data => {
          //@ts-ignore
          this.notifyService.showAlert(data.status, data.message);
          this.uploadEmpDataForm.reset();
          //@ts-ignore
          if (data.status == 200) {
            this.uploadEmpDataFileName = this.uploadFormRecord.name;
            this.store.dispatch(new SummamryDataLoad());
          }
          // console.log(this.uploadFormRecord);
        },
        err => {
          // console.log(err);
          //@ts-ignore
          if (err.error) {
            this.notifyService.showAlert(err.error.status, err.error.message);
            this.uploadEmpDataForm.reset();
          } else {
            this.notifyService.showAlert(err.status, err.message);
            this.uploadEmpDataForm.reset();
          }
        }
      );
    }
  }
  onUploadEmpTestPerformDataFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      // this.uploadEmpDataForm.get('uploadEmpDataFile').setValue(file);

      var formData = new FormData();
      formData.append("file", file);
      //@ts-ignore
      for (var pair of formData.entries()) {
        this.uploadFormRecord = pair[1];
      }

      // @ts-ignore
      this.apiService.uploadPerformenceData(formData).subscribe(
        data => {
          //@ts-ignore
          this.notifyService.showAlert(data.status, data.message);
          this.uploadEmpTestPerformDataForm.reset();
          //@ts-ignore
          if (data.status == 200) {
            this.uploadPerformenceDataFileName = this.uploadFormRecord.name;
          }
        },
        err => {
          console.log(err);
          //@ts-ignore
          if (err.error) {
            this.notifyService.showAlert(err.error.status, err.error.message);
            this.uploadEmpTestPerformDataForm.reset();
          } else {
            this.notifyService.showAlert(err.status, err.message);
            this.uploadEmpTestPerformDataForm.reset();
          }
        }
      );
    }
  }
  onUploadEmpCtcDataFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      // this.uploadEmpDataForm.get('uploadEmpDataFile').setValue(file);

      var formData = new FormData();
      formData.append("file", file);
      //@ts-ignore
      for (var pair of formData.entries()) {
        this.uploadFormRecord = pair[1];
      }

      this.apiService.uploadCtcData(formData)
        .subscribe(
          data => {
            console.log('a');
            //@ts-ignore
            this.notifyService.showAlert(data.status, data.message);
            this.uploadEmpCtcDataForm.reset();
            //@ts-ignore
            if (data.status == 200) {
              console.log(this.uploadFormRecord);
              this.uploadCtcDataFileName = this.uploadFormRecord.name;
              this.store.dispatch(new SummamryDataLoad());
            }
          },
          err => {
            console.log('b');
            console.log(err);
            //@ts-ignore
            if (err.error) {
              this.notifyService.showAlert(err.error.status, err.error.message);
              this.uploadEmpCtcDataForm.reset();
            } else {
              this.notifyService.showAlert(err.status, err.message);
              this.uploadEmpCtcDataForm.reset();
            }
          }
        );
    }
  }
  onUploadEmpBonusDataFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      // this.uploadEmpDataForm.get('uploadEmpDataFile').setValue(file);

      var formData = new FormData();
      formData.append("file", file);
      //@ts-ignore
      for (var pair of formData.entries()) {
        this.uploadFormRecord = pair[1];
      }

      // @ts-ignore
      this.apiService.uploadBonusData(formData).subscribe(
        data => {
          //@ts-ignore
          this.notifyService.showAlert(data.status, data.message);
          this.uploadEmpBonusDataForm.reset();
          //@ts-ignore
          if (data.status == 200) {
            this.uploadBonusDataFileName = this.uploadFormRecord.name;
            this.store.dispatch(new SummamryDataLoad());
          }
        },
        err => {
          console.log(err);
          //@ts-ignore
          if (err.error) {
            this.notifyService.showAlert(err.error.status, err.error.message);
            this.uploadEmpBonusDataForm.reset();
          } else {
            this.notifyService.showAlert(err.status, err.message);
            this.uploadEmpBonusDataForm.reset();
          }
        }
      );
    }
  }

  public viewDetailFileName = "";

  showDetails(id, element) {
    this.viewDetailFileName = element.fileName.split('.')[0];
    this.showFileDetailTable = false;
    this.store.dispatch(new PreviouslyUploadedFilesDetail(id));
  }

  editPlanList(plan) {
    console.log(plan);
    this.dialog.open(EditPlanListComponent, {
      data: plan,
      disableClose: true,
      panelClass: "customModalClass",
      width: '40%'
    });
  }

  deletePlanList(plan) {
    if (!confirm('Are you sure want to delete? This action cannot be undone.')) {
      return false;
    }
    this.store.dispatch(new PlanDelete(
      plan.id
    ));
  }

  editPopulationGroup(info) {
    this.dialog.open(EditPopulationGroupComponent, {
      data: info,
      disableClose: true,
      panelClass: 'customModalClass',
      width: '40%'
    })
  }
  copyPopulationGroup(info) {
    this.dialog.open(CopyPopulationGroupComponent, {
      data: info,
      disableClose: true,
      panelClass: 'customModalClass',
      width: '40%'
    })
  }
  viewPopulationGroup(info) {
    this.dialog.open(ViewPopulationGroupComponent, {
      data: info,
      disableClose: true,
      panelClass: 'customModalClass',
      width: '40%'
    })
  }

  delPopulation(id) {
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(new PopulationSelectionDelete(id));
    }
  }

  editEmployeeEligibilityList(info) {
    this.dialog.open(EditEmployeeEligibilityListComponent, {
      data: info,
      disableClose: true,
      panelClass: 'customModalClass',
      width: '40%'
    })
  }

  deleteEmployeeEligibilityList(id) {
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(new EligibiliyExclusionDelete(id));
    }
  }

  editGridSetting(info) {
    this.dialog.open(EditGridSettingComponent, {
      data: info,
      disableClose: true,
      panelClass: 'customModalClass',
      width: '40%'
    })
  }

  deleteGridSetting(id) {
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(new DeleteGridSettingLoad(id));
    }
  }

  processEligibilityRules() {
    if (this.employeeEligibilityRulesForm.valid) {
      // console.log(this.employeeEligibilityRulesForm.value);
      // solution
      var hasDuplicate = false;
      this.employeeEligibilityRulesForm.value.rules.map(v => v.criteria).sort().sort((a, b) => {
        if (a === b) hasDuplicate = true
      });
      if (hasDuplicate) {
        return this.snackbar.error({
          msg: "Duplicate Criteria Not allowed",
          action: "Close"
        })
      };

      this.employeeEligibilityFormData = {
        planID: this.employeeEligibilityRulesForm.value.planName,
        criterias: this.employeeEligibilityRulesForm.value.rules,
        name: this.employeeEligibilityRulesForm.value.eligibilityAs,
        // save_selected_eligibiliy: this.employeeEligibilityRulesForm.value.eligibilityAs,
      };

      // console.log(this.employeeEligibilityFormData);
      this.store.dispatch(new EligibilityExclusionAdd(this.employeeEligibilityFormData));

    }
  }
  populationSelectionGrid() {
    //@ts-ignore
    const selectedPopulation = document.getElementById("selectedPopulation").value;
    if (selectedPopulation == '' || selectedPopulation == null) {
      return this.snackbar.error({
        msg: 'Selected Population Period from is rquired',
        action: 'Close'
      });
    }

    if (this.populationSelectionGridRulesForm.valid) {

      var hasDuplicate = false;
      this.populationSelectionGridRulesForm.value.rulesgrid.map(v => v.criteria).sort().sort((a, b) => {
        if (a === b) hasDuplicate = true
      });
      if (hasDuplicate) {
        return this.snackbar.error({
          msg: "Duplicate Criteria Not allowed",
          action: "Close"
        })
      };

      this.populationSelelctionData = {
        criterias: this.populationSelectionGridRulesForm.value.rulesgrid,
        name: selectedPopulation,
        // save_selected_eligibiliy: this.employeeEligibilityRulesForm.value.eligibilityAs,
      };
      this.store.dispatch(new PopulationSelectionAdd(this.populationSelelctionData));
      // console.log(this.employeeEligibilityFormData);
      // this.store.dispatch(new EligibilityExclusionAdd(this.employeeEligibilityFormData));

    }
  }

  rangeCreationFormSubmit() {
    console.log(this.rangeCreationRulesForm.value);
    if (this.rangeCreationRulesForm.valid) {
      this.rangeCreationFormData = {
        impactedField: this.rangeCreationRulesForm.value.impactFieldName,
        slabs: this.rangeCreationRulesForm.value.rangerules,
        name: this.rangeCreationRulesForm.value.rangeName,
      };
      // console.log(this.rangeCreationFormData);
      this.store.dispatch(new RangeCreationAdd(this.rangeCreationFormData));
    }
  }

  editRange(element) {
    this.dialog.open(RangeEditComponent, {
      data: element,
      disableClose: true,
      panelClass: "modal-md-custom",
      width: '40%'
    });
  }

  deleteRange(element, id) {
    // console.log(element, id);
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(new RangeCreationDelete(id));
    }
  }

  copyPlanChange(event) {
    const data = event.value;
    this.planCreationRulesForm.setValue({
      processApplicable: data.processApplicable,
      planName: data.planName,
      planPeriodFrom: new Date(data.planPeriodFrom),
      planPeriodTo: new Date(data.planPeriodTo),
      applicableCalenderFrom: new Date(data.applicableCalenderFrom),
      applicableCalenderTo: new Date(data.applicableCalenderTo),
      effectiveDate: new Date(data.effectiveDate)
    })
  }

  formulaSettingSave() {
    if (this.formulaSettingRulesForm.valid) {
      this.store.dispatch(new FormulaSettingAdd(this.formulaSettingRulesForm.value, this.formulaSettingRulesForm, this.formulaSettingForm))
    }
  }

  editFormulaSetting(data) {
    // console.log(data);
    this.dialog.open(EditFormulaSettingComponent, {
      panelClass: "modal-md-custom",
      width: '40%',
      disableClose: true,
      data: data
    })
  }

  deleteFormulaSetting(id) {
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(new FormulaSettingDelete(id));
    }
  }

  filterListCareUnit(val) {
    console.log(val);
    // this.criteriaDataListOption = this.criteriaDataListOption.filter((unit) => unit.label.indexOf(val) > -1);
    // this.listCareUnits = this.listCareUnits.filter((unit) => unit.label.indexOf(val) > -1);
  }

  populationCriteriaSelectionChange(element, index) {
    // console.log(element, index);
    this.selectName = 'POUPULATION_SELECTION';
    this.populationCriteriaIndex = index;
    this.store.dispatch(new EmployeeCriteriaDetailLoad(element.value));
  }

  empEligibilityRulesSelectionChange(element, index) {
    this.selectName = 'EMPELIGIBILITY';
    this.empEligibiltiRulesDropdownIndex = index;
    this.store.dispatch(new EmployeeCriteriaDetailLoad(element.value));
  }

  simulationCriteriaSelectionChange(element, index) {
    // console.log(element, index);
    this.selectName = 'SIMULATION_ANALYSIS_SELECTION';
    this.simulationCriteriaIndex = index;
    this.store.dispatch(new EmployeeCriteriaDetailLoad(element.value));
  }



  deletePreviousUploadedFiles(id) {
    // console.log(id);
    this.store.dispatch(new PreviouslyUploadedFilesDelete(id));
  }

  saveGridSetting() {
    // console.log(this.gridSettingForm.value);
    if (this.gridSettingForm.valid) {
      this.store.dispatch(new GridSettingAdd(this.gridSettingForm.value));
    }
  }

  /**
   * Simulation Analysis
   */
  simulationAnalysisForm() {
    if (this.simulationAnalysisRulesForm.valid) {
      // console.log(this.simulationAnalysisRulesForm.value);

      var hasDuplicate = false;
      this.simulationAnalysisRulesForm.value.simulationrules.map(v => v.criteria).sort().sort((a, b) => {
        if (a === b) hasDuplicate = true
      });
      if (hasDuplicate) {
        return this.snackbar.error({
          msg: "Duplicate Criteria Not allowed",
          action: "Close"
        })
      };


      let dataArray = {
        criterias: this.simulationAnalysisRulesForm.value.simulationrules,
        name: this.simulationAnalysisRulesForm.value.selectedSimulation
      };
      this.store.dispatch(new SimulationAdd(dataArray));
    }
  }

  editSimulation(data) {
    const editSimultionPopup = this.dialog.open(EditSimulationPopupComponent, {
      data: data,
      panelClass: "modal-md-custom",
      width: '75%',
    });
  }

  delSimulation(id) {
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(new DeleteSimulation(id));
    }
  }


  /**
   * -------------------------------------------------
   * View List Table Change Logic
   * -------------------------------------------------
   */

  viewListData($event) {
    console.log($event.value);
    if($event.value == 'data_simulation') {
      this.removeItemTableArr(
        [
          'businesscorrectionpercent',
          'totalhikepercent',
          'increasedsalary',
          'finalsalary',
          'validatedbyrole',
          'validatedbyname',
          'validationcomment',
          'finalinputcomments',
          'finalinput',
          'action',
        ]
      )
      this.addItemTableArr(['totalpercentincrement','increasedsalary','action'])

    } else if($event.value == 'data_validation') {
      this.removeItemTableArr(['totalpercentincrement','increasedsalary','action'])
      this.addItemTableArr(
        [
          'businesscorrectionpercent',
          'totalhikepercent',
          'increasedsalary',
          'finalsalary',
          'validatedbyrole',
          'validatedbyname',
          'validationcomment',
          'finalinputcomments',
          'finalinput',
          'action',
        ]
      )
    }
  }

  removeItemTableArr(arr) {
    let tableColumns = this.simulation2DisplayedColumns;
    arr.forEach((item,key) => {
      var index = tableColumns.indexOf(item);
      if(index!==-1) tableColumns.splice(index,1)
    });
  }
  addItemTableArr(arr) {
    let tableColumns = this.simulation2DisplayedColumns;
    arr.forEach((item,key) => {
      tableColumns.push(item);
    });
  }





}

import { getEmployeeEligibilityEditState } from './../../../store/selectors/employee-eligibility-exclusion.selectors';
import { getPlanEligibilityData } from './../../../store/selectors/plan-eligibility-setting.selectors';
import { PlanListDataLoad } from './../../../store/actions/plan-eligibility-setting.actions';
import { SnackBar } from './../../../shared/notification/SnackBar';
import { Observable } from 'rxjs';
import { getCriteria, getCriteriaDetail } from './../../../store/selectors/process.selectors';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeCriteriaDetailLoad, PopulationSelectionEdit, EligibiliyExclusionEdit } from 'src/app/store';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-edit-employee-eligibility-list',
  templateUrl: './edit-employee-eligibility-list.component.html',
  styleUrls: ['./edit-employee-eligibility-list.component.scss']
})
export class EditEmployeeEligibilityListComponent implements OnInit {

  criteriaDataListOption: any[] = [];
  criteriaData$: Observable<any>;
  public criteriaDataListSelectOption: any = [];
  public populationSelectionValue: any[] = [];
  empCriteriaDetailValue$: Observable<any>;
  populationCriteriaIndex = null;
  populationSelelctionData: any | null;
  planEligibilityData$: Observable<any>;
  planlistDataSource = new MatTableDataSource([]);
  getEmployeeEligibilityEditState$: Observable<any>;





  constructor(
    public dialogRef: MatDialogRef<EditEmployeeEligibilityListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private store: Store<{}>,
    private snackbar: SnackBar,
  ) { }

  /**
   * Population Selection for the Grid
   */
  empeligibilityRulesForm = this._fb.group({
    id: [this.data.name.id],
    planName: [this.data.name.planID, Validators.required],
    rulesgrid: this._fb.array([
    ]),
    saveEliigibilityName: [this.data.eligibiltyname, Validators.required]
  });
  get rulesgrid() {
    return this.empeligibilityRulesForm.get("rulesgrid") as FormArray;
  }

  addPopulationSelectionGridRules(_criteria = null, _con = null, _value = null) {
    return this.rulesgrid.push(
      this._fb.group({
        criteria: [_criteria, Validators.required],
        condition: [_con, Validators.required],
        value: [_value, Validators.required]
      })
    );
  }

  removePopulationSelectionGridRules(index: any) {
    return this.rulesgrid.removeAt(index);
  }

  ngOnInit() {
    console.log(this.data);
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

        if (this.data.name.criterias) {
          this.data.name.criterias.map((res, i) => {
            // console.log(res);
            this.addPopulationSelectionGridRules(
              res.criteria,
              res.condition,
              res.value);
            this.populationSelectionValue[i] = [res.value];
          })
          // console.log(this.populationSelectionValue);
        }
      }
    });

    this.empCriteriaDetailValue$ = this.store.select(getCriteriaDetail);
    this.empCriteriaDetailValue$.subscribe(data => {
      if (data) {
        // console.log(data);
        const index = this.populationCriteriaIndex;
        this.populationSelectionValue[index] = data;
        // console.log(this.populationSelectionValue);
      }

    });

    this.store.dispatch(new PlanListDataLoad())
    this.planEligibilityData$ = this.store.select(getPlanEligibilityData)
    // this.planEligibilityData$.subscribe((data: any) => {
    //   if (data) {
    //     console.log(data);
    //     this.planlistDataSource = new MatTableDataSource(data)
    //   }
    // })

    this.getEmployeeEligibilityEditState$ = this.store.select(getEmployeeEligibilityEditState);
    this.getEmployeeEligibilityEditState$.subscribe(data => {
      console.log(data);
    })

  }

  populationCriteriaSelectionChange(index) {
    this.populationSelectionValue[index] = ["Select"];


  }

  populationCriteriaValueChange(index) {
    console.log(this.empeligibilityRulesForm.get("rulesgrid"));
    // console.log();
    const { criteria } = this.empeligibilityRulesForm.get("rulesgrid").value[index];
    this.populationCriteriaIndex = index;
    this.store.dispatch(new EmployeeCriteriaDetailLoad(criteria));
  }

  editEmployeeEligibilityRulesForm() {

    if (this.empeligibilityRulesForm.valid) {
      console.log(this.empeligibilityRulesForm.value);

      var hasDuplicate = false;
      this.empeligibilityRulesForm.value.rulesgrid.map(v => v.criteria).sort().sort((a, b) => {
        if (a === b) hasDuplicate = true
      });
      if (hasDuplicate) {
        return this.snackbar.error({
          msg: "Duplicate Criteria Not allowed",
          action: "Close"
        })
      };

      this.empeligibilityRulesForm.value.rulesgrid.map(v => {
        if (v.value == null) {
          return this.snackbar.error({
            msg: "Please choose value for the criteria",
            action: "Close"
          })
        }
      })

      this.populationSelelctionData = {
        criterias: this.empeligibilityRulesForm.value.rulesgrid,
        name: this.empeligibilityRulesForm.value.saveEliigibilityName,
        planID: this.empeligibilityRulesForm.value.planName,
        // save_selected_eligibiliy: this.employeeEligibilityRulesForm.value.eligibilityAs,
      };
      this.store.dispatch(new EligibiliyExclusionEdit(this.populationSelelctionData, this.data.name.id, this.dialogRef));
    }
    // console.log('asasa');
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }


}


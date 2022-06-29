import { SnackBar } from './../../../shared/notification/SnackBar';
import { EmployeeCriteriaDetailLoad, UpdateSimulation } from './../../../store/actions/process.actions';
import { Observable } from 'rxjs';
import { getCriteria, getCriteriaDetail, getSimulationEditLoaded } from './../../../store/selectors/process.selectors';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-simulation-popup',
  templateUrl: './edit-simulation-popup.component.html',
  styleUrls: ['./edit-simulation-popup.component.scss']
})
export class EditSimulationPopupComponent implements OnInit {

  criteriaData$: Observable<any>;
  public criteriaDataListSelectOption: any = [];
  public criteriaDataListOption = [];
  public simulationAnalysisCriteriaValue = [];
  simulationCriteriaIndex = null;
  criteriaDetailValue$: Observable<any>;
  getSimulationEditLoaded$: Observable<any>;
  public timeout = null;

  constructor(
    private dialogRef: MatDialogRef<EditSimulationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = data,
    private store: Store<{}>,
    private _fb: FormBuilder,
    private snackBar: SnackBar

  ) { }

  /**
   * Simulation Analysis
   */
  simulationAnalysisRulesForm = this._fb.group({
    simulationrules: this._fb.array([
    ]),
    selectedSimulation: [this.data.name, Validators.required]
  });
  get simulationrules() {
    return this.simulationAnalysisRulesForm.get("simulationrules") as FormArray;
  }

  addSimulationAnalysisRules(_criteria = null, _con = null, _value = null) {
    return this.simulationrules.push(
      this._fb.group({
        criteria: [_criteria, Validators.required],
        condition: [_con, Validators.required],
        value: [_value, Validators.required]
      })
    );
  }

  removeSimulationAnalysisRules(index: any) {
    return this.simulationrules.removeAt(index);
  }

  ngOnInit() {
    this.criteriaData$ = this.store.select(getCriteria);
    this.criteriaData$.subscribe(data => {
      if (data) {
        data.forEach((item) => {
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

        if (this.data.criterias) {
          this.data.criterias.map((res, i) => {
            // console.log(res);
            this.addSimulationAnalysisRules(
              res.criteria,
              res.condition,
              res.value);
            this.simulationAnalysisCriteriaValue[i] = [res.value];
          })
          // console.log(this.populationSelectionValue);
        }
      }
    });


    this.criteriaDetailValue$ = this.store.select(getCriteriaDetail);
    this.criteriaDetailValue$.subscribe(data => {
      if (data) {
        const index = this.simulationCriteriaIndex;
        this.simulationAnalysisCriteriaValue[index] = data;
      }

    });

    this.getSimulationEditLoaded$ = this.store.select(getSimulationEditLoaded);
  }

  simulationCriteriaSelectionChange(index) {
    this.simulationAnalysisCriteriaValue[index] = ["Select"];
    this.simulationAnalysisRulesForm.value.simulationrules[index]['value'] = null;
  }

  simulationCriteriaValueChange(index) {
    console.log('clicked');
    this.simulationAnalysisCriteriaValue[index] = ["Select"];
    const { criteria } = this.simulationAnalysisRulesForm.get("simulationrules").value[index];
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.simulationCriteriaIndex = index;
      this.store.dispatch(new EmployeeCriteriaDetailLoad(criteria));
    }, 1)
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }

  simulationAnalysisForm() {

    if (this.simulationAnalysisRulesForm.valid) {


      let error = false;
      var hasDuplicate = false;
      this.simulationAnalysisRulesForm.value.simulationrules.map(v => v.criteria).sort().sort((a, b) => {
        if (a === b) hasDuplicate = true
      });
      if (hasDuplicate) {
        error = true;
        return this.snackBar.error({
          msg: "Duplicate Criteria Not allowed",
          action: "Close"
        })
      };

      this.simulationAnalysisRulesForm.value.simulationrules.map(v => {
        if (!v.value) {
          error = true;
          return this.snackBar.error({
            msg: "Please choose value for the criteria",
            action: "Close"
          })
        }
      })


      console.log(this.simulationAnalysisRulesForm.value);
      let dataArray = {
        criterias: this.simulationAnalysisRulesForm.value.simulationrules,
        name: this.simulationAnalysisRulesForm.value.selectedSimulation
      };
      if (error == false) {
        this.store.dispatch(new UpdateSimulation(dataArray, this.data.id, this.dialogRef));
      }
    }
  }

}

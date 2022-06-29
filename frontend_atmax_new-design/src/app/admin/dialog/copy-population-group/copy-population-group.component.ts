import { PopulationSelectionECopy } from './../../../store/actions/population-selection.actions';
import { getCriteria, getCriteriaDetail } from './../../../store/selectors/process.selectors';
import { SnackBar } from './../../../shared/notification/SnackBar';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { SavePoulation } from './../../../models/population-selection.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeCriteriaDetailLoad } from 'src/app/store';

@Component({
  selector: 'app-copy-population-group',
  templateUrl: './copy-population-group.component.html',
  styleUrls: ['./copy-population-group.component.scss']
})
export class CopyPopulationGroupComponent implements OnInit {

  criteriaDataListOption: any[] = [];
  criteriaData$: Observable<any>;
  public criteriaDataListSelectOption: any = [];
  public populationSelectionValue: any[] = [];
  empCriteriaDetailValue$: Observable<any>;
  populationCriteriaIndex = null;
  populationSelelctionData: SavePoulation | null;





  constructor(
    public dialogRef: MatDialogRef<CopyPopulationGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private store: Store<{}>,
    private snackbar: SnackBar,
  ) { }

  /**
   * Population Selection for the Grid
   */
  populationSelectionGridRulesForm = this._fb.group({
    id: [this.data.id],
    rulesgrid: this._fb.array([
    ]),
    selectedPopulation: [this.data.name, Validators.required]
  });
  get rulesgrid() {
    return this.populationSelectionGridRulesForm.get("rulesgrid") as FormArray;
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

        if (this.data.criterias) {
          this.data.criterias.map((res, i) => {
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
        console.log(data);
        const index = this.populationCriteriaIndex;
        this.populationSelectionValue[index] = data;
        console.log(this.populationSelectionValue);
      }

    });

  }

  populationCriteriaSelectionChange(index) {
    this.populationSelectionValue[index] = ["Select"];


  }

  populationCriteriaValueChange(index) {
    console.log(this.populationSelectionGridRulesForm.get("rulesgrid"));
    // console.log();
    const { criteria } = this.populationSelectionGridRulesForm.get("rulesgrid").value[index];
    this.populationCriteriaIndex = index;
    this.store.dispatch(new EmployeeCriteriaDetailLoad(criteria));
  }

  editPopulationValueGroupForm() {
    // console.log(this.populationSelectionGridRulesForm.value);
    //@ts-ignore
    const selectedPopulation = document.getElementById("selectedPopulation").value;
    if (this.populationSelectionGridRulesForm.valid) {
      this.populationSelelctionData = {
        criterias: this.populationSelectionGridRulesForm.value.rulesgrid,
        name: this.populationSelectionGridRulesForm.value.selectedPopulation,
        // save_selected_eligibiliy: this.employeeEligibilityRulesForm.value.eligibilityAs,
      };
      // console.log(this.populationSelelctionData);
      this.store.dispatch(new PopulationSelectionECopy(this.populationSelelctionData, this.dialogRef));
    }
    // console.log('asasa');
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }


}

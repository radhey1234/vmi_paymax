import { SavePoulation } from './../../../models/population-selection.model';
import { SnackBar } from './../../../shared/notification/SnackBar';
import { Observable } from 'rxjs';
import { getCriteria, getCriteriaDetail } from './../../../store/selectors/process.selectors';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeCriteriaDetailLoad, PopulationSelectionEdit } from 'src/app/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-population-group',
  templateUrl: './edit-population-group.component.html',
  styleUrls: ['./edit-population-group.component.scss']
})
export class EditPopulationGroupComponent implements OnInit {


  criteriaDataListOption: any[] = [];
  criteriaData$: Observable<any>;
  public criteriaDataListSelectOption: any = [];
  public populationSelectionValue: any[] = [];
  empCriteriaDetailValue$: Observable<any>;
  populationCriteriaIndex = null;
  populationSelelctionData: SavePoulation | null;





  constructor(
    public dialogRef: MatDialogRef<EditPopulationGroupComponent>,
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
    // console.log(this.data);
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
        // console.log(data);
        const index = this.populationCriteriaIndex;
        this.populationSelectionValue[index] = data;
        // console.log(this.populationSelectionValue);
      }

    });

  }

  populationCriteriaSelectionChange(index) {
    this.populationSelectionValue[index] = ["Select"];


  }

  populationCriteriaValueChange(index) {
    // console.log(this.populationSelectionGridRulesForm.get("rulesgrid"));
    // console.log();
    const { criteria } = this.populationSelectionGridRulesForm.get("rulesgrid").value[index];
    this.populationCriteriaIndex = index;
    this.store.dispatch(new EmployeeCriteriaDetailLoad(criteria));
  }

  editPopulationValueGroupForm() {
    // console.log(this.populationSelectionGridRulesForm.value);
    //@ts-ignore
    const selectedPopulation = document.getElementById("selectedPopulation").value;
    // console.log(selectedPopulation);
    // if (selectedPopulation == '' || selectedPopulation == null) {
    //   return this.snackbar.error({
    //     msg: 'Name the selected population',
    //     action: 'Close'
    //   });
    // }

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

      this.populationSelectionGridRulesForm.value.rulesgrid.map(v => {
        if (v.value == null) {
          return this.snackbar.error({
            msg: "Please choose value for the criteria",
            action: "Close"
          })
        }
      })
      this.populationSelelctionData = {
        criterias: this.populationSelectionGridRulesForm.value.rulesgrid,
        name: this.populationSelectionGridRulesForm.value.selectedPopulation,
        // save_selected_eligibiliy: this.employeeEligibilityRulesForm.value.eligibilityAs,
      };
      // console.log(this.populationSelelctionData);
      this.store.dispatch(new PopulationSelectionEdit(this.populationSelelctionData, this.data.id, this.dialogRef));
    }
    // console.log('asasa');
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }


}

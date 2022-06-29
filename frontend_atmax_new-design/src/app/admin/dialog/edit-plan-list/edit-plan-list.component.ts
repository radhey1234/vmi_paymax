import { PlanEdit } from './../../../store/actions/plan-eligibility-setting.actions';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-plan-list',
  templateUrl: './edit-plan-list.component.html',
  styleUrls: ['./edit-plan-list.component.scss']
})
export class EditPlanListComponent implements OnInit {

  // planPeriodFrom = this.datepipe.transform((new Date().getTime()) - 3888000000, 'dd/MM/yyyy'); ;

  disableSave: boolean = false

  constructor(
    public dialogRef: MatDialogRef<EditPlanListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private store: Store<{}>
  ) { }

  planCreationRulesForm = this._fb.group({
    id: [this.data.id],
    processApplicable: [this.data.processApplicable, Validators.required],
    planName: [this.data.planName, Validators.required],
    planPeriodFrom: [new Date(this.data.planPeriodTo), Validators.required],
    planPeriodTo: [new Date(this.data.planPeriodTo), Validators.required],
    applicableCalenderFrom: [new Date(this.data.applicableCalenderFrom), Validators.required],
    applicableCalenderTo: [new Date(this.data.applicableCalenderTo), Validators.required],
    effectiveDate: [new Date(this.data.effectiveDate), Validators.required]
  });

  ngOnInit() {
    console.log(this.data);
    // this.planPeriodFrom = new FormControl(new Date());
  }

  editPlan(event) {

    if (this.planCreationRulesForm.valid) {
      this.disableSave = true


      const planPeriodFrom = moment(this.planCreationRulesForm.value.planPeriodFrom).format("MM/DD/YYYY");
      const planPeriodTo = moment(this.planCreationRulesForm.value.planPeriodTo).format("MM/DD/YYYY");
      const applicableCalenderFrom = moment(this.planCreationRulesForm.value.applicableCalenderFrom).format("MM/DD/YYYY");
      const applicableCalenderTo = moment(this.planCreationRulesForm.value.applicableCalenderTo).format("MM/DD/YYYY");
      const effectiveDate = moment(this.planCreationRulesForm.value.effectiveDate).format("MM/DD/YYYY");
      const processApplicable = this.planCreationRulesForm.value.processApplicable;
      const planName = this.planCreationRulesForm.value.planName;

      this.store.dispatch(new PlanEdit({
        id: this.data.id,
        processApplicable: processApplicable,
        planName: planName,
        planPeriodFrom: planPeriodFrom,
        planPeriodTo: planPeriodTo,
        applicableCalenderFrom: applicableCalenderFrom,
        applicableCalenderTo: applicableCalenderTo,
        effectiveDate: effectiveDate
      }, this.dialogRef));


    }

  }

}

import { FormulaSettingEdit } from './../../../store/actions/formula-setting.actions';
import { EditSimulationComponent } from './../edit-simulation/edit-simulation.component';
import { Store } from '@ngrx/store';
import { Validators, FormBuilder, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-formula-setting',
  templateUrl: './edit-formula-setting.component.html',
  styleUrls: ['./edit-formula-setting.component.scss']
})
export class EditFormulaSettingComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private store: Store<{}>,
    public dialogRef: MatDialogRef<EditSimulationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  /**
   * FOrmula Setting rules form
   */
  formulaSettingRulesForm = this._fb.group({
    formulaLinkingMatrix: [this.data.formulafor, Validators.required],
    saveFormulaAs: [this.data.formula, Validators.required]
  });

  @ViewChild('formulaSettingForm', { static: false }) formulaSettingForm: NgForm;



  ngOnInit() {
    // console.log(this.data);
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }

  formulaSettingSave() {
    if (this.formulaSettingRulesForm.valid) {
      this.store.dispatch(new FormulaSettingEdit(this.formulaSettingRulesForm.value, this.data.id, this.dialogRef, this.formulaSettingRulesForm, this.formulaSettingForm))
    }
  }

}

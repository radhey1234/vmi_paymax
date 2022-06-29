import { RangeCreationEdit } from './../../../store/actions/range-creation.actions';
import { SaveRangeCreation } from './../../../models/range-creation.model';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-range-edit',
  templateUrl: './range-edit.component.html',
  styleUrls: ['./range-edit.component.scss']
})
export class RangeEditComponent implements OnInit {

  rangeCreationFormData: SaveRangeCreation | null;
  constructor(
    private _fb: FormBuilder,
    private store: Store<{}>,
    public dialogRef: MatDialogRef<RangeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  /**
   * Range Creation Form Group
   */

  rangeCreationRulesForm = this._fb.group({
    impactFieldName: [this.data.impactedField, Validators.required],
    rangerules: this._fb.array([
      // this._fb.group({
      //   from: [null, Validators.required],
      //   to: [null, Validators.required]
      // })
    ]),
    rangeName: [this.data.name, Validators.required]
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

  ngOnInit() {
    if (this.data.slabs) {
      this.data.slabs.map(item => {
        this.addRangeCreationRules(item.from, item.to);
      })
    }
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }

  rangeCreationFormSubmit() {
    if (this.rangeCreationRulesForm.valid) {
      this.rangeCreationFormData = {
        impactedField: this.rangeCreationRulesForm.value.impactFieldName,
        slabs: this.rangeCreationRulesForm.value.rangerules,
        name: this.rangeCreationRulesForm.value.rangeName,
      };
      // console.log(this.rangeCreationFormData);
      this.store.dispatch(new RangeCreationEdit(this.rangeCreationFormData, this.data.id, this.dialogRef));
    }
  }

}

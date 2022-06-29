import { EditGridSettingLoad } from './../../../store/actions/process.actions';
import { getGridAxisData, getEditLoadedState } from './../../../store/selectors/process.selectors';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { dialog } from './../index';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-edit-grid-setting',
  templateUrl: './edit-grid-setting.component.html',
  styleUrls: ['./edit-grid-setting.component.scss']
})
export class EditGridSettingComponent implements OnInit {

  gridAxisData$: Observable<any>;
  gridEditData$: Observable<any>;
  gridAxisData: any;



  constructor(
    private _fb: FormBuilder,
    private store: Store<{}>,
    public dialog: MatDialogRef<EditGridSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadingBarService: LoadingBarService
  ) { }

  gridSettingForm = this._fb.group({
    xAxis: [this.data.xAxis, Validators.required],
    yAxis: [this.data.yAxis, Validators.required],
    result: [this.data.result, Validators.required],
    impactField: [this.data.impactField, Validators.required],
    name: [this.data.gridname, Validators.required],
  });

  ngOnInit() {
    console.log(this.data);

    this.gridAxisData$ = this.store.select(getGridAxisData);
    this.gridAxisData$.subscribe((data: any) => {
      if (data) {
        this.gridAxisData = data;
      }
    })
    this.gridEditData$ = this.store.select(getEditLoadedState);
    this.gridEditData$.subscribe((data: any) => {
      // if (data) {
      console.log('Edit- ', data);
      // }
    })


  }

  saveGridSetting() {
    // console.log(this.gridSettingForm.value);

    if (this.gridSettingForm.valid) {
      this.store.dispatch(new EditGridSettingLoad(this.gridSettingForm.value, this.data.id, this.dialog));
    }
  }

  saveBtn() {
    document.getElementById('saveForm').click();
  }

}

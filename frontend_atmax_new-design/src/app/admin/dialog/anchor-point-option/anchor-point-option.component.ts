import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { getAnchorPointDataLoaded, getGridSettingPopupLoaded } from './../../../store/selectors/process.selectors';
import { Observable } from 'rxjs';
import { AnchorPointLoad, UpdateGridSettingPopup } from './../../../store/actions/process.actions';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { dialog } from './../index';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { getAnchorPointData } from 'src/app/store/selectors/process.selectors';

@Component({
  selector: 'app-anchor-point-option',
  templateUrl: './anchor-point-option.component.html',
  styleUrls: ['./anchor-point-option.component.scss']
})
export class AnchorPointOptionComponent implements OnInit {

  getAnchorPointData$: Observable<any>;
  anchorDataLoaded$: Observable<any>;
  getAnchorPointData: any;
  saveTemplate: any;
  mappingArrayIndex: any;
  getGridSettingPopupLoaded$: Observable<any>;
  lastChangeInput: Element | null = null;
  public xAxisValue = [];
  public yAxisValue = [];


  constructor(
    public dialogRef: MatDialogRef<AnchorPointOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<{}>,
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.store.dispatch(new AnchorPointLoad(this.data.id));


    this.anchorDataLoaded$ = this.store.select(getAnchorPointDataLoaded);
    this.getAnchorPointData$ = this.store.select(getAnchorPointData);
    this.getAnchorPointData$.subscribe(data => {
      if (data) {
        this.getAnchorPointData =
        {
          ...data,
          xAxisLabel: Object.keys(data.x_axis)[0],
          yAxisLabel: Object.keys(data.y_axis)[0],
        };

        this.getAnchorPointData['xAxis'] = data.x_axis[this.getAnchorPointData.xAxisLabel];
        this.getAnchorPointData['xAxis'].forEach((item, i) => {
          if (!item.data) {
            this.xAxisValue.push(0);
            // this.getAnchorPointData['xAxis'][i]['xvalue'] = 0;
          } else {
            this.xAxisValue.push(item.data);

          }
        });
        this.getAnchorPointData['yAxis'] = data.y_axis[this.getAnchorPointData.yAxisLabel];
        this.getAnchorPointData['yAxis'].forEach((item, i) => {
          if (!item.data) {
            this.yAxisValue.push(0);
            // this.getAnchorPointData['yAxis'][i]['yvalue'] = 0;
          } else {
            this.yAxisValue.push(item.data);
          }
        });
        if (data.type == 'Absolute Increment') {
          this.getAnchorPointData['suffix'] = '';
        } else {
          this.getAnchorPointData['suffix'] = '%';
        }
        let dataArray = [];
        let { x_axis, y_axis, mapping } = data;
        this.saveTemplate = {
          x_axis,
          y_axis,
          mapping
        }
        this.mappingArrayIndex = [];
        for (var res in data.mapping) {
          this.mappingArrayIndex.push(res);
          dataArray.push(data.mapping[res]);
        }

        this.getAnchorPointData['mapData'] = dataArray;
        console.log(this.saveTemplate);
      }
    })

    this.getGridSettingPopupLoaded$ = this.store.select(getGridSettingPopupLoaded);
    this.getGridSettingPopupLoaded$.subscribe(data => {
      if (data) {
        console.log('Data- ' + data);
      }
    })



  }

  saveData() {

    // console.log(this.saveTemplate);
    var saveInput = Object.assign(this.saveTemplate);

    // delete saveInput['mapping'];
    // console.log(saveInput, this.saveTemplate);

    // return;
    // let xAxisLabel = this.getAnchorPointData.xAxisLabel;
    // let yAxisLabel = this.getAnchorPointData.yAxisLabel;
    // setTimeout(() => {
    //   saveInput.x_axis[xAxisLabel].forEach((element, i) => {
    //     saveInput.x_axis[xAxisLabel][i]['xvalue'] = undefined;
    //   });
    //   console.log(saveInput, this.saveTemplate);
    // }, 3000)
    console.log(saveInput);
    this.store.dispatch(new UpdateGridSettingPopup(saveInput, this.data.id, this.dialogRef));
  }
  changeInput(index, seq, $event) {
    const value = $event.target.value;
    this.lastChangeInput = $event.target;
    let changeInputRowIndex = Object.keys(this.saveTemplate.mapping).indexOf(index);
    this.saveTemplate.mapping[index].map((item, i) => {
      if (item.sequence == seq) {
        this.saveTemplate.mapping[index][i]['value'] = (value - 0);
      }
    })

    this.getAnchorPointData['mapData'].forEach((element, rIndex) => {
      element.forEach((elem, cIndex) => {
        if ((elem.sequence == seq) && (rIndex == changeInputRowIndex)) {
          return;
        } else {
          // find x
          // let x = this.getAnchorPointData['xAxis'][cIndex]['xvalue'];
          let x = this.xAxisValue[cIndex];
          // find y
          // let y = this.getAnchorPointData['yAxis'][rIndex]['yvalue'];
          let y = this.yAxisValue[rIndex];
          // console.log("x-" + x, "y-" + y);
          let val = value;
          let xPercent = (x / 100).toFixed(2);
          let yPercent = (y / 100).toFixed(2);
          // console.log(xPercent, yPercent, val);
          //@ts-ignore
          this.getAnchorPointData['mapData'][rIndex][cIndex]['value'] = (val * xPercent * yPercent).toFixed(2);
        }
      });
    });

    // console.log(this.saveTemplate);
  }

  changeYaxisInput(index, $event) {
    let yAxisLabel = Object.keys(this.saveTemplate.y_axis)[0];
    this.getAnchorPointData['yAxis'].forEach((item, i) => {
      if (index == i) {
        // this.getAnchorPointData['yAxis'][i]['yvalue'] = ($event.target.value - 0);
        this.saveTemplate.y_axis[yAxisLabel][i]['data'] = ($event.target.value - 0);
        this.yAxisValue[i] = ($event.target.value - 0);
      }
    });
    if (this.lastChangeInput != null) {
      const e = new Event("change");
      this.lastChangeInput.dispatchEvent(e);
    }
    console.log(this.saveTemplate);
  }
  changeXaxisInput(index, $event) {
    let xAxisLabel = Object.keys(this.saveTemplate.x_axis)[0];

    this.getAnchorPointData['xAxis'].forEach((item, i) => {
      if (index == i) {
        // this.getAnchorPointData['xAxis'][i]['xvalue'] = ($event.target.value - 0);
        this.saveTemplate.x_axis[xAxisLabel][i]['data'] = ($event.target.value - 0);
        this.xAxisValue[i] = ($event.target.value - 0);
      }
    });
    if (this.lastChangeInput != null) {
      const e = new Event("change");
      this.lastChangeInput.dispatchEvent(e);
    }
    console.log(this.saveTemplate);

  }

}

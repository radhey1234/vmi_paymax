import { getAnchorPointDataLoaded, getGridSettingPopupLoaded } from './../../../store/selectors/process.selectors';
import { UpdateGridSettingPopup, AnchorPointLoad } from './../../../store/actions/process.actions';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { getAnchorPointData } from 'src/app/store/selectors/process.selectors';


export interface BudgetBusinessUnit {
  businessunit: string;
  headcount: string;
  currentsalarycost: string;
  budgetedincrease: string;
  budgetedincreaseamount: string;
}


const ELEMENT_DATA23: BudgetBusinessUnit[] = [

  {
    businessunit: 'Sales',
    headcount: '20',
    currentsalarycost: '2,00,00,000',
    budgetedincrease: '9%',
    budgetedincreaseamount: '18,00,000',

  },
  {
    businessunit: 'Operations',
    headcount: '30',
    currentsalarycost: '1,00,50,000',
    budgetedincrease: '8%',
    budgetedincreaseamount: '80,00,500',

  },
  {
    businessunit: 'Technology',
    headcount: '60',
    currentsalarycost: '5,00,00,500',
    budgetedincrease: '7%',
    budgetedincreaseamount: ' 35,00,000',

  }


];

@Component({
  selector: 'app-process-grid-setting-load-select',
  templateUrl: './process-grid-setting-load-select.component.html',
  styleUrls: ['./process-grid-setting-load-select.component.scss']
})
export class ProcessGridSettingLoadSelectComponent implements OnInit {

  displayedColumns: string[] = ['businessunit', 'headcount', 'currentsalarycost', 'budgetedincrease', 'budgetedincreaseamount'];
  dataSourceonett = ELEMENT_DATA23;


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
    public dialogRef: MatDialogRef<ProcessGridSettingLoadSelectComponent>,
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
          if (!item.xvalue) {
            this.xAxisValue.push(0);
            // this.getAnchorPointData['xAxis'][i]['xvalue'] = 0;
          }
        });
        this.getAnchorPointData['yAxis'] = data.y_axis[this.getAnchorPointData.yAxisLabel];
        this.getAnchorPointData['yAxis'].forEach((item, i) => {
          if (!item.xvalue) {
            this.yAxisValue.push(0);
            // this.getAnchorPointData['yAxis'][i]['yvalue'] = 0;
          }
        });
        this.getAnchorPointData['suffix'] = '%';
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
    console.log(saveInput);
    this.store.dispatch(new UpdateGridSettingPopup(saveInput, this.data.id, this.dialogRef));
  }
  changeInput(index, seq, $event) {
    const value = $event.target.value;
    this.lastChangeInput = $event.target
    this.saveTemplate.mapping[index].map((item, i) => {
      if (item.sequence == seq) {
        this.saveTemplate.mapping[index][i]['value'] = (value - 0);
      }
    })

    // console.log(this.saveTemplate);
  }

}

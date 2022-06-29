import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
const report_list: PeriodicElement[] = [
  {reportid: '', reportname: '', module: '', createdate: '', action:'',},
];
export interface PeriodicElement {
  reportname: string;
  reportid: string;
  module: string;
  createdate: string;
  action:string
}

export interface ModuleSelectListModel {
  id: string,
  name: string,
  key?: string
}

const DataArr:ModuleSelectListModel[] = [
  {
    id: '5631612sbdbsdbsd',
    name: 'A'
  },
  {
    id: '5631612sbdbsdbs1d',
    name: 'B'
  },
  {
    id: '5631612sbdbsdbs2d',
    name: 'C'
  },
  {
    id: '5631612sbdbsdbs3d',
    name: 'D'
  },
]

@Component({
  selector: 'app-create-new-builder-report',
  templateUrl: './create-new-builder-report.component.html',
  styleUrls: ['./create-new-builder-report.component.scss']
})

export class CreateNewBuilderReportComponent implements OnInit {
  displayedColumns: string[] = ['reportid', 'reportname', 'module', 'createdate', 'action'];
  dataSource = report_list;
  selected = 'option2';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup:FormGroup;
  fourFormGroup:FormGroup;
  moduleList:ModuleSelectListModel[] = []
  selectedModule = []

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      selectModuleList: [null, Validators.required]
    });
    this.threeFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.mockData().subscribe((data)=>{
      if(data) {
        this.moduleList = data
      }
    })

  }

  mockData() {
    return of(DataArr).pipe(delay(500));
  }

  selectModuleChnage($event) {
    // console.log($event);
    console.log(this.secondFormGroup.value)
  }
}
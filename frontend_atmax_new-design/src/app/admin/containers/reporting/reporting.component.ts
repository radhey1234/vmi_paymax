import { SidebarService } from './../../sidebar.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import 'hammerjs';

export interface PeriodicElement {
  name: string;
  doj: string;
  grade: string;
  rating: string;
  salary: number;
  cratio: string;
  manager: string;
}
export interface PeriodicElement1 {
  name: string;
  firstc: string;
  listoffiled: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: '', doj: '', grade: '', rating: '', salary: 1, cratio: '', manager: '' },

];
const ELEMENT_DATA1: PeriodicElement1[] = [
  { name: 'ReportName_01012020', firstc: '01-Jan-2020', listoffiled: 'Full name, Date of Joining, Grade, Designation, Rating Salary, Compa Ratio, L1 Manager'},
  { name: 'Performance Report', firstc: '31-Dec-2019', listoffiled: 'Employee Name, Rating'},
  { name: 'Compa Ratio Report', firstc: '26-Dec-2019', listoffiled: 'Employee Code,Employee Name Department, Grade, Compa Ratio'}

];
@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {
  displayedColumns1: string[] = ['name', 'firstc', 'listoffiled', 'action'];
  dataSource1 = ELEMENT_DATA1;
  ptype = null;
  constructor(
    private header: SidebarService
  ) { }
  columns: any[] = [
    { field: 'Full Name' },
    { field: 'Date of Joning' },
    { field: 'Grade' },
    { field: 'Designation' },
    { field: 'Rating' },
    { field: 'Salary' },
    { field: 'Coma Ratio' },
    { field: 'L1 Manager' },
  ];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatSort) sort: MatSort;

  previousIndex: number;
  checked:boolean = true;

  ngOnInit() {
    this.setDisplayedColumns();
    this.header.header = "Reporting"
    this.ptype = this.header.ptype;
    // this.dataSource.sort = this.sort;
  }

  setDisplayedColumns() {
    this.columns.forEach((colunm, index) => {
      colunm.index = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  dragStarted(event: CdkDragStart, index: number) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.columns, this.previousIndex, index);
      this.setDisplayedColumns();
    }
  }
}

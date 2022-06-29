import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';


export interface PeriodicElement103{
  name: string;
  employee: string;
  grade: string;
  Rating:string;
  department:string;
  currentsalary:string;
  location:string;
  promotion:string;
  delete:string;
  comment:string;
}

const va_DATA: PeriodicElement103[] = [
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
];


@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
  vadisplayedColumns: string[] = [ 'name', 'employee', 'grade', 'Rating', 'department', 'currentsalary', 'location', 'promotion', 'delete', 'comment'];
  dataSource103 = new MatTableDataSource(va_DATA);
  selected = 'option2';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource103.sort = this.sort;
  }

}

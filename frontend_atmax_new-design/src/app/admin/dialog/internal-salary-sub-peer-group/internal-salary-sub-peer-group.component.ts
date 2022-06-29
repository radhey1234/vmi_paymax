import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';

export interface InternalSalarayBenchmarking {
  employeecode: string,
  name: string,
  grade: string,
  rating: string,
  department: string,
  currentsalary: string,
  benchmarksalary: string,
  comparatio: string,
  percentrank: string,
  rangepenetration: string,

}

@Component({
  selector: 'app-internal-salary-sub-peer-group',
  templateUrl: './internal-salary-sub-peer-group.component.html',
  styleUrls: ['./internal-salary-sub-peer-group.component.scss']
})
export class InternalSalarySubPeerGroupComponent implements OnInit {

  displayedColumnsInternalSalaryBenchmarking: string[] = [
    "employeecode",
    "name",
    "grade",
    "rating",
    "department",
    "currentsalary",
    "benchmarksalary",
    "comparatio",
    "percentrank",
    "rangepenetration"
  ];

  dataInterSalaryBenchMarking: MatTableDataSource<InternalSalarayBenchmarking>;
  constructor() {
    const internalSalaryBenchmarking = [
      {
        employeecode: "10001",
        name: "Ram Singham",
        grade: "A",
        rating: "Poor",
        department: "Database",
        currentsalary: "24,08,010",
        benchmarksalary: "14,06,938",
        comparatio: "1.68",
        percentrank: "100.00",
        rangepenetration: "100%",

      },
      {
        employeecode: "95905",
        name: "Shyam Pal",
        grade: "A1",
        rating: "Average",
        department: "IT Audit",
        currentsalary: "24,88,071",
        benchmarksalary: "11,10,244",
        comparatio: "2.22",
        percentrank: "72.88",
        rangepenetration: "98%",

      },
      {
        employeecode: "72920",
        name: "Mukesh",
        grade: "B1",
        rating: "Great",
        department: "Database",
        currentsalary: "15,96,672",
        benchmarksalary: "15,96,672",
        comparatio: "1.01",
        percentrank: "25.00",
        rangepenetration: "89%",

      },
      {
        employeecode: "93002",
        name: "Dham B",
        grade: "C",
        rating: "Good",
        department: "Database",
        currentsalary: "19,02,071",
        benchmarksalary: "24,53,328",
        comparatio: "0.69",
        percentrank: "42.86",
        rangepenetration: "56%",

      },
      {
        employeecode: "00203",
        name: "Sharad N",
        grade: "A1",
        rating: "Average",
        department: "IT Audit",
        currentsalary: "49,23,072",
        benchmarksalary: "45,10,080",
        comparatio: "0.97",
        percentrank: "73.91",
        rangepenetration: "60%",

      }


    ];
    this.dataInterSalaryBenchMarking = new MatTableDataSource(internalSalaryBenchmarking);

  }

  ngOnInit() {
  }

}

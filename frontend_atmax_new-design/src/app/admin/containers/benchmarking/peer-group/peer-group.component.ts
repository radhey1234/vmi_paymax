import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SidebarService } from './../../../sidebar.service';
import { Component, OnInit, ViewChild } from '@angular/core';



export interface ExternalSalarayBenchmarking {
  employeecode: string,
  name: string,
  grade: string,
  rating: string,
  department: string,
  currentsalary: string,
  benchmarksalary: string,
  comparatio: string,
  marketdata1: string,
  marketratio1: string,
  marketdata2: string,
  marketratio2: string,
  marketcorrectioninput: string
}

@Component({
  selector: 'app-peer-group',
  templateUrl: './peer-group.component.html',
  styleUrls: ['./peer-group.component.scss']
})

export class PeerGroupComponent implements OnInit {

  dataExterSalaryBenchMarking: MatTableDataSource<ExternalSalarayBenchmarking>;

  displayedColumnsExternalSalaryBenchmarking: string[] = [
    "employeecode",
    "name",
    "grade",
    "rating",
    "department",
    "currentsalary",
    "benchmarksalary",
    "comparatio",
    "marketdata1",
    "marketratio1",
    "marketdata2",
    "marketratio2",
    "marketcorrectioninput"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private service: SidebarService
  ) {
    const exterSalaryBenchMarking = [
      {
        employeecode: "10001",
        name: "Ram Singham",
        grade: "A",
        rating: "Poor",
        department: "Database",
        currentsalary: "24,08,010",
        benchmarksalary: "14,06,938",
        comparatio: "1.68",
        marketdata1: "24,08,010",
        marketratio1: "1.41",
        marketdata2: "24,08,010",
        marketratio2: "1.41",
        marketcorrectioninput: "Input",

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
        marketdata1: "24,88,071",
        marketratio1: "2.4",
        marketdata2: "24,88,071",
        marketratio2: "2.4",
        marketcorrectioninput: "Input",

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
        marketdata1: "15,96,672",
        marketratio1: "1.05",
        marketdata2: "15,96,672",
        marketratio2: "1.05%",
        marketcorrectioninput: "Input",

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
        marketdata1: "19,02,071",
        marketratio1: "0.32",
        marketdata2: "19,02,071",
        marketratio2: "0.32",
        marketcorrectioninput: "Input",

      }


    ];
    this.dataExterSalaryBenchMarking = new MatTableDataSource(exterSalaryBenchMarking);
  }

  ngOnInit() {
    this.service.header = "Peer Group"
    this.service.backbutton = true;
    this.service.backlink = "bench-marking";
    window.scroll(0, 0);
  }
  ngOnDestroy(): void {
    this.service.backbutton = false
    this.service.backlink = null;
  }

}

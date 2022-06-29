import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EditBenchMarkingMarketDataComponent } from './../../dialog/edit-bench-marking-market-data/edit-bench-marking-market-data.component';
import { InternalSalarySubPeerGroupComponent } from './../../dialog/internal-salary-sub-peer-group/internal-salary-sub-peer-group.component';
import { SidebarService } from './../../sidebar.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MarketCorrectInputComponent } from '../../dialog';

export interface UserDataOne {
  name: string;
  ratio: string;
  grade: string;
  rating: string;
  currentsallery: string;
  suggestedincrement: string;
  suggestedsallery: string;
  marketcorrection: string;
  promotion: string;
  businesscorrection: string;
  code: string;

}

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

export interface MarketData {
  name: string,
  date: string,
  action: string
}

export interface LastOneYear1 {
  type: string;
  date: string;
  download: string;
}
const DOCUMENTS_DATA: LastOneYear1[] = [
  { type: "Appraisal letter' 18", date: '26 Mar 2020', download: "1.0079" },
  { type: "promotion letter' 18", date: '26 Mar 2020', download: "4.0026" },
  { type: "Appraisal letter, 17", date: '29 Mar 2020', download: "6.941" }
];

@Component({
  selector: 'app-benchmarking',
  templateUrl: './benchmarking.component.html',
  styleUrls: ['./benchmarking.component.scss']
})
export class BenchmarkingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'ratio', 'grade', 'rating', 'currentsallery', 'suggestedincrement', 'marketcorrection', 'promotion', 'businesscorrection'];

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

  displayedColumnsMarketData: string[] = [
    "name",
    "date",
    "action"
  ];

  dataSource: MatTableDataSource<UserDataOne>;
  dataInterSalaryBenchMarking: MatTableDataSource<InternalSalarayBenchmarking>;
  dataExterSalaryBenchMarking: MatTableDataSource<ExternalSalarayBenchmarking>;
  dataMarketData: MatTableDataSource<MarketData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  LastOneYear1DisplayedColumns: string[] = ['type', 'date', 'download'];
  LastOneYear1DataSource = DOCUMENTS_DATA;
  package = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: SidebarService,
    private dialog: MatDialog,
    private _fb: FormBuilder
  ) {
    const users = [
      {
        code: '123',
        name: 'Rohit Kumar',
        ratio: '1',
        grade: 'A',
        rating: 'Good',
        currentsallery: '2408000',
        suggestedincrement: '2%',
        suggestedsallery: '240800',
        marketcorrection: '',
        promotion: '',
        businesscorrection: '',
      },
      {
        code: '12',
        name: 'Rohit Kumar',
        ratio: '1',
        grade: 'A',
        rating: 'Good',
        currentsallery: '2408000',
        suggestedincrement: '2%',
        suggestedsallery: '240800',
        marketcorrection: '',
        promotion: '',
        businesscorrection: '',
      },
    ];

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

      },
      {
        employeecode: "10293",
        name: "Nidhi Paul",
        grade: "B",
        rating: "Good",
        department: "Database",
        currentsalary: "7,73,245",
        benchmarksalary: "8,01,965",
        comparatio: "0.88",
        percentrank: "12.77",
        rangepenetration: "10%",

      },
      {
        employeecode: "83939",
        name: "Sim T",
        grade: "B1",
        rating: "Great",
        department: "IT Audit",
        currentsalary: "44,11,123",
        benchmarksalary: "37,28,198",
        comparatio: "1.00",
        percentrank: "80.00",
        rangepenetration: "25%",

      },
      {
        employeecode: "99300",
        name: "Sally C",
        grade: "C",
        rating: "Average",
        department: "Database",
        currentsalary: "20,33,289",
        benchmarksalary: "29,52,288",
        comparatio: "1.09",
        percentrank: "21.74",
        rangepenetration: "75%",

      }
    ];
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
        marketdata1: "49,23,072",
        marketratio1: "0.45",
        marketdata2: "49,23,072",
        marketratio2: "0.45",
        marketcorrectioninput: "Input",

      },
      {
        employeecode: "10293",
        name: "Nidhi Paul",
        grade: "B",
        rating: "Good",
        department: "Database",
        currentsalary: "7,73,245",
        benchmarksalary: "8,01,965",
        comparatio: "0.88",
        marketdata1: "7,73,245",
        marketratio1: "0.91",
        marketdata2: "7,73,245",
        marketratio2: "0.91",
        marketcorrectioninput: "Input",

      },
      {
        employeecode: "83939",
        name: "Sim T",
        grade: "B1",
        rating: "Great",
        department: "IT Audit",
        currentsalary: "44,11,123",
        benchmarksalary: "37,28,198",
        comparatio: "1.00",
        marketdata1: "44,11,123",
        marketratio1: "1.43",
        marketdata2: "44,11,123",
        marketratio2: "1.43",
        marketcorrectioninput: "Input",

      },
      {
        employeecode: "99300",
        name: "Sally C",
        grade: "C",
        rating: "Average",
        department: "Database",
        currentsalary: "20,33,289",
        benchmarksalary: "29,52,288",
        comparatio: "1.09",
        marketdata1: "20,33,289",
        marketratio1: "3.4",
        marketdata2: "20,33,289",
        marketratio2: "3.4",
        marketcorrectioninput: "Input",

      }
    ];

    const marketData = [
      {
        name: 'Market Data 1.xlsx',
        date: '27 Dec 2019',
        action: ''
      },
      {
        name: 'Market Data 2.xlsx',
        date: '27 Dec 2019',
        action: ''
      }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.dataInterSalaryBenchMarking = new MatTableDataSource(internalSalaryBenchmarking);
    this.dataExterSalaryBenchMarking = new MatTableDataSource(exterSalaryBenchMarking);
    this.dataMarketData = new MatTableDataSource(marketData);

  }

  benchmarkRulesForm = this._fb.group({
    rules: this._fb.array([this._fb.group({
      criteria: [null, Validators.required],
      condition: [null, Validators.required],
      value: [null, Validators.required]
    })]),
  })

  get rules() {
    return this.benchmarkRulesForm.get("rules") as FormArray;
  }

  addbenchmarkRules() {
    return this.rules.push(this._fb.group({
      criteria: [null, Validators.required],
      condition: [null, Validators.required],
      value: [null, Validators.required]
    }));
  }

  removebenchmarkRules(index: any) {
    return this.rules.removeAt(index);
  }



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.package = this.activatedRoute.snapshot.paramMap.get('ptype');
    // console.log(this.activatedRoute.snapshot);
    this.package = this.service.ptype;
    this.service.header = "Benchmarking"



  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  internalSalarySubPeerGroupPopup() {
    const dialogRef = this.dialog.open(InternalSalarySubPeerGroupComponent, {
      panelClass: 'customModalClass'
    });
  }

  editMarketDataPopup() {
    const dialogRef = this.dialog.open(EditBenchMarkingMarketDataComponent, {
      panelClass: 'editbenchmarking'
    });
  }

  editMarketCorrectionInputPopup() {
    const dialogRef = this.dialog.open(MarketCorrectInputComponent, {
      panelClass: 'marketcorrectinput'
    });
  }



}

import { BonusFeedbackComponent } from './../../dialog/bonus-feedback/bonus-feedback.component';
import { SidebarService } from './../../sidebar.service';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { CompensationFeedbackComponent, AddEmployeeComponent } from '../../dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface UserData {
  childs?: MatTableDataSource<UserData>;
  name: string;
  ratio: string;
  grade: string;
  rating: {
    text: string;
    color: string;
  };
  currentsallery: string;
  suggestedincrement: string;
  suggestedsallery: string;
  marketcorrection: string;
  promotion: string;
  businesscorrection: string;
  totalsalaryhike: string;
  totalcorrection: string;
  eligiblebonus?: string;
  achievedbonus: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

export interface TableLabel {
  amount: String;
  label: String;
}

export interface PeriodicElement100 {
  name: string;
  employee: string;
  grade: string;
  Rating:string;
  department:string;
  ccurrentsalary:string;
  llocation:string;
  promotion:string;
  delete:string;
  comment:string;
}

export interface PeriodicElement104 {
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
export interface PeriodicElement101 {
  name: string;
  employee: string;
  grade: string;
  Rating:string;
  department:string;
  validatedbyrole:string;
  validatedbyname:string;
  addeddeleted:string;
  finalinput:string;
  validationComments:string;
  validationfinalinput:string;
}

const v_DATA: PeriodicElement100[] = [
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', ccurrentsalary:'24,42,000', llocation:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', ccurrentsalary:'24,42,000', llocation:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', ccurrentsalary:'24,42,000', llocation:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', ccurrentsalary:'24,42,000', llocation:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', ccurrentsalary:'24,42,000', llocation:'Mumbai', promotion:'', delete:'', comment:'' ,},
];
const v_DATA_c: PeriodicElement104[] = [
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', currentsalary:'24,42,000', location:'Mumbai', promotion:'', delete:'', comment:'' ,},
];
const c_b_DATA: PeriodicElement101[] = [
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', validatedbyrole:'Pay Manager', validatedbyname:'Mala P', addeddeleted:'', finalinput:'', validationComments:'' ,validationfinalinput:'',},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', validatedbyrole:'Pay Manager', validatedbyname:'Mala P', addeddeleted:'', finalinput:'', validationComments:'' ,validationfinalinput:'',},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', validatedbyrole:'Pay Manager', validatedbyname:'Mala P', addeddeleted:'', finalinput:'', validationComments:'' ,validationfinalinput:'',},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', validatedbyrole:'Pay Manager', validatedbyname:'Mala P', addeddeleted:'', finalinput:'', validationComments:'' ,validationfinalinput:'',},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', validatedbyrole:'Pay Manager', validatedbyname:'Mala P', addeddeleted:'', finalinput:'', validationComments:'' ,validationfinalinput:'',},
  {name: 'Santosh Kumar', employee: '50124', grade: 'A', Rating:'Good', department:'IT', validatedbyrole:'Pay Manager', validatedbyname:'Mala P', addeddeleted:'', finalinput:'', validationComments:'' ,validationfinalinput:'',},
 
];




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TeamComponent implements OnInit {

  c_b_displayedColumns: string[] = [ 'name', 'employee', 'grade', 'Rating', 'department', 'validatedbyrole', 'validatedbyname', 'addeddeleted', 'finalinput', 'validationComments', 'validationfinalinput'];
  dataSource101 = new MatTableDataSource(c_b_DATA);

vdisplayedColumns: string[] = [ 'name', 'employee', 'grade', 'Rating', 'department', 'ccurrentsalary', 'llocation', 'promotion', 'delete', 'comment'];
  dataSource100 = new MatTableDataSource(v_DATA);

  v1displayedColumns: string[] = [ 'name', 'employee', 'grade', 'Rating', 'department', 'currentsalary', 'location', 'promotion', 'delete', 'comment'];
  dataSource104 = new MatTableDataSource(v_DATA_c);

  displayedColumns: string[] = ['name', 'ratio', 'grade', 'rating', 'currentsallery', 'suggestedincrement', 'suggestedsalary', 'marketcorrection', 'promotion', 'businesscorrection', 'totalsalaryhike', 'action'];
  dataSource: MatTableDataSource<UserData>;
  expandedElement: UserData | null;
  selected = 'option2';
  tc1: boolean = true;
  tc2: boolean = false;

  allChildExpnad: boolean = false;

  first: TableLabel = {
    amount: '50,000,000',
    label: 'Allocated Budget'
  };
  second: TableLabel = {
    amount: '50,250,000',
    label: 'Utilized Budget'
  };
  third: TableLabel = {
    amount: '-250,000',
    label: 'Available Budget'
  };
  panelOpenState = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<UserData>>;

  constructor(
    private dialog: MatDialog,
    private header: SidebarService,
    private cd: ChangeDetectorRef
  ) {
    const users = [
      {
        name: "Santosh Kumar",
        ratio: "1.68",
        grade: "A",
        rating: {
          text: "Good",
          color: "#1BC39D"
        },
        currentsallery: "24,08,010",
        suggestedincrement: "2%",
        suggestedsallery: "24,42,000",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "2%",
        eligiblebonus: "250,000",
        totalcorrection: '0',
        achievedbonus: '0',
        childs: new MatTableDataSource([
          {
            name: "Ram Kumar",
            ratio: "1.68",
            grade: "A",
            rating: {
              text: "Good",
              color: "#1BC39D"
            },
            currentsallery: "24,08,010",
            suggestedincrement: "2%",
            suggestedsallery: "24,42,000",
            marketcorrection: " ",
            promotion: " ",
            businesscorrection: " ",
            totalsalaryhike: "2%",
            totalcorrection: '5%',
            eligiblebonus: "250,000",
            achievedbonus: '',
          },
          {
            name: "Biswajit Gupta",
            ratio: "1.68",
            grade: "A",
            rating: {
              text: "Good",
              color: "#1BC39D"
            },
            currentsallery: "24,08,010",
            suggestedincrement: "2%",
            suggestedsallery: "24,42,000",
            marketcorrection: " ",
            promotion: " ",
            businesscorrection: " ",
            totalsalaryhike: "2%",
            totalcorrection: '10%',
            eligiblebonus: "250,000",
            achievedbonus: '',
          }
        ])

      },
      {
        name: "Shyam Pal",
        ratio: "2.22",
        grade: "A",
        rating: {
          text: "Poor",
          color: "#FF5D5D"
        },
        currentsallery: "24,88,071",
        suggestedincrement: "1%",
        suggestedsallery: "25,28,071",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "1%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([
          {
            name: "Jatin Das",
            ratio: "1.68",
            grade: "A",
            rating: {
              text: "Good",
              color: "#1BC39D"
            },
            currentsallery: "24,08,010",
            suggestedincrement: "2%",
            suggestedsallery: "24,42,000",
            marketcorrection: " ",
            promotion: " ",
            businesscorrection: " ",
            totalsalaryhike: "2%",
            eligiblebonus: "250,000",
            totalcorrection: '',
            achievedbonus: '',
          }
        ])

      },
      {
        name: "Mukesh",
        ratio: "1.01",
        grade: "B+",
        rating: {
          text: "Good",
          color: "#1BC39D"
        },
        currentsallery: "15,96,672",
        suggestedincrement: "13%",
        suggestedsallery: "17,96,672",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "13%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([])
      },
      {
        name: "Dham B",
        ratio: "0.69",
        grade: "C",
        rating: {
          text: "Good",
          color: "#1BC39D"
        },
        currentsallery: "19,02,071",
        suggestedincrement: "15%",
        suggestedsallery: "20,90,001",
        marketcorrection: "15%",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "30%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([])

      },
      {
        name: "Sharad N",
        ratio: "0.97",
        grade: "A+",
        rating: {
          text: "Great",
          color: "#327A17"
        },
        currentsallery: "49,23,072",
        suggestedincrement: "20%",
        suggestedsallery: "54,23,072",
        marketcorrection: " ",
        promotion: "5%",
        businesscorrection: " ",
        totalsalaryhike: "25%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([])

      },
      {
        name: "Nidhi Paul",
        ratio: "0.88",
        grade: "B",
        rating: {
          text: "Average",
          color: "#DD842B"
        },
        currentsallery: "7,73,245",
        suggestedincrement: "0%",
        suggestedsallery: "7,73,245",
        marketcorrection: "5%",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "5%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([])

      },
      {
        name: "Sim T",
        ratio: "1.00",
        grade: "B+",
        rating: {
          text: "Good",
          color: "#1BC39D"
        },
        currentsallery: "44,11,123",
        suggestedincrement: "17%",
        suggestedsallery: "47,32,400",
        marketcorrection: " ",
        promotion: "10%",
        businesscorrection: " ",
        totalsalaryhike: "27%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([])

      },
      {
        name: "Sally C",
        ratio: "1.09",
        grade: "C",
        rating: {
          text: "Poor",
          color: "#FF5D5D"
        },
        currentsallery: "20,33,289",
        suggestedincrement: "10%",
        suggestedsallery: "22,53,300",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: "2%",
        totalsalaryhike: "12%",
        eligiblebonus: "250,000",
        totalcorrection: '',
        achievedbonus: '',
        childs: new MatTableDataSource([])
      }

    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.header.header = "Team"
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleRow(element: UserData) {
    element.childs && (element.childs as MatTableDataSource<UserData>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
  }
  AddEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      panelClass: 'customModalClass',
    });
  }
  compensationFeedback() {
    if (this.tc1) {
      const dialogRef = this.dialog.open(CompensationFeedbackComponent, {
        width: '650px'
      });
    } else {
      const dialogRef = this.dialog.open(BonusFeedbackComponent, {
        width: '650px'
      });
    }
  }

  changeTableData(type) {
    switch (type) {
      case 1:
        this.tc1 = true;
        this.tc2 = false;
        this.allChildExpnad = false;
        this.first = {
          amount: '50,000,000',
          label: 'Allocated Budget'
        }
        this.second = {
          amount: '50,250,000',
          label: 'Utilized Budget'
        }
        this.third = {
          amount: '-250,000',
          label: 'Available Budget'
        }
        var remove = ['totalcorrection', 'totalsalaryhike', 'eligiblebonus', 'achievedbonus', 'action'];
        for (var i in remove) {
          let index = this.displayedColumns.indexOf(remove[i]);
          if (index > -1) {
            this.displayedColumns.splice(index, 1);
          }
        }
        this.displayedColumns = this.displayedColumns.concat(['marketcorrection', 'promotion', 'businesscorrection', 'totalsalaryhike', 'action']);
        break;

      case 2:
        this.tc1 = false;
        this.tc2 = true;
        this.allChildExpnad = true;
        this.first = {
          amount: '5,500,000',
          label: 'Bonus Pool'
        }
        this.second = {
          amount: '4,250,000',
          label: 'Utilized Bonus Pool'
        }
        this.third = {
          amount: '1,250,000',
          label: 'Available Pool'
        }
        var remove = ['marketcorrection', 'promotion', 'businesscorrection', 'totalsalaryhike', 'action'];
        for (var i in remove) {
          let index = this.displayedColumns.indexOf(remove[i]);
          if (index > -1) {
            this.displayedColumns.splice(index, 1);
          }
        }
        this.displayedColumns = this.displayedColumns.concat(['totalcorrection', 'totalsalaryhike', 'eligiblebonus', 'achievedbonus', 'action']);
        break;

      default:
        break;
    }
  }

}

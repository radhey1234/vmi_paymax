import { Component, OnInit } from '@angular/core';

export interface PeriodicElement8 {
  name: string;
  designation: string;
  department: string;
  tenureincompany: string;
  tenureinrole: string;
  location: string;
  salary: string;
  rangepercentage: string;
  // rangepercentagegraf:string;
}

const ELEMENT_DATA8: PeriodicElement8[] = [
  {
    name: "Nick Sng",
    designation: "Executive",
    department: "Database",
    tenureincompany: "0.5",
    tenureinrole: "0.5",
    location: "Delhi",
    salary: "10,05,296",
    rangepercentage: "88%",
    // rangepercentagegraf: "",

  },
  {
    name: "K Tapas",
    designation: "Sr. Executive",
    department: "Database",
    tenureincompany: "0.8",
    tenureinrole: "0.8",
    location: "Delhi",
    salary: "15,80,800",
    rangepercentage: "72%",
    // rangepercentagegraf: "",

  },
  {
    name: "Ryan Jordan",
    designation: "Manager",
    department: "Database",
    tenureincompany: "1.8",
    tenureinrole: "1.0",
    location: "Delhi",
    salary: "28,50,596",
    rangepercentage: "94%",
    // rangepercentagegraf: "",
  },

];


@Component({
  selector: 'app-manage-analytics-team-member',
  templateUrl: './manage-analytics-team-member.component.html',
  styleUrls: ['./manage-analytics-team-member.component.scss']
})
export class ManageAnalyticsTeamMemberComponent implements OnInit {
  displayedColumns8: string[] = [
    "name",
    "designation",
    "department",
    "tenureincompany",
    "tenureinrole",
    "location",
    "salary",
    "rangepercentage",
    // "rangepercentagegraf",
  ];
  dataSource8 = ELEMENT_DATA8;
  constructor() { }

  ngOnInit() {
  }

}

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SidebarService } from './../../../sidebar.service';
import { Component, OnInit, ViewChild } from '@angular/core';



export interface SubPeerGroupList {
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
  totalsalaryhike: string;
}

@Component({
  selector: 'app-team-peer-group-list',
  templateUrl: './team-peer-group-list.component.html',
  styleUrls: ['./team-peer-group-list.component.scss']
})
export class TeamPeerGroupListComponent implements OnInit {

  dataSubPeerGroupList: MatTableDataSource<SubPeerGroupList>;

  displayedColumnsSubPeerGroupList: string[] = [
    "name",
    "ratio",
    "grade",
    "rating",
    "currentsallery",
    "suggestedincrement",
    "suggestedsallery",
    "marketcorrection",
    "promotion",
    "businesscorrection",
    "totalsalaryhike",
    "action"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: SidebarService) {
    const subPeerGroupList = [
      {
        name: "Santosh Kumar",
        ratio: "1.68",
        grade: "A",
        rating: "Good",
        currentsallery: "24,08,010",
        suggestedincrement: "2%",
        suggestedsallery: "24,42,010",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "2%",

      },
      {
        name: "Shyam Pal",
        ratio: "2.02",
        grade: "A",
        rating: "Poor",
        currentsallery: "24,88,071",
        suggestedincrement: "1%",
        suggestedsallery: "24,88,071",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "1%",

      },
      {
        name: "Mukesh",
        ratio: "1.01",
        grade: "B+",
        rating: "Good",
        currentsallery: "15,96,672",
        suggestedincrement: "13%",
        suggestedsallery: "15,96,672",
        marketcorrection: " ",
        promotion: " ",
        businesscorrection: "3%",
        totalsalaryhike: "16%",

      },
      {
        name: "Dham B",
        ratio: "0.69",
        grade: "C",
        rating: "Good",
        currentsallery: "19,02,071",
        suggestedincrement: "15%",
        suggestedsallery: "19,02,071",
        marketcorrection: "15%",
        promotion: " ",
        businesscorrection: " ",
        totalsalaryhike: "30%",
      }



    ];
    this.dataSubPeerGroupList = new MatTableDataSource(subPeerGroupList);
  }

  ngOnInit() {
    this.service.header = "Peer Group List"
    this.service.backbutton = true;
    this.service.backlink = "team";
    window.scroll(0, 0);

    this.dataSubPeerGroupList.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.service.backbutton = false
    this.service.backlink = null;
  }

}

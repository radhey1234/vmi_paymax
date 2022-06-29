import { SidebarService } from './../../sidebar.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SalaryStructureDocPopupComponent } from '../../dialog';

export interface SalaryStructure {
  description: string;
  current: string;
  revised: string;
}

export interface Documents {
  type: string;
  date: string;
  download: string;
}

const SALARY_STRUCTURE_DATA: SalaryStructure[] = [
  {
    description: "Basic",
    current: "1,85,250",
    revised: "2,29,500",

  },
  {
    description: "HRA",
    current: "92,625",
    revised: "1,14,750",

  },
  {
    description: "FBP",
    current: "2,55,535",
    revised: "3,34,531",

  },
  {
    description: "PF Contribution",
    current: "71,280",
    revised: "71,280",

  },
  {
    description: "Gratuity",
    current: "8,910",
    revised: "11,039",

  },
  {
    description: "Insurance",
    current: "3,900",
    revised: "3,900",

  },
  {
    description: "Base Gross Salary(A)",
    current: "6,17,500",
    revised: "7,65,000",

  },
  {
    description: "Incentive(B)",
    current: "32,500",
    revised: "85,000",

  }

];

const DOCUMENTS_DATA: Documents[] = [
  {
    type: "Appraisal Letter18",
    date: "26-Mar-2020",
    download: "Download",

  },
  {
    type: "Promotion Letter'18",
    date: "26-Mar-2020",
    download: "Download",

  },
  {
    type: "Appraisal Letter'17",
    date: "29-Mar-2019",
    download: "Download",

  }

];



@Component({
  selector: 'app-salary-structure',
  templateUrl: './salary-structure.component.html',
  styleUrls: ['./salary-structure.component.scss']
})
export class SalaryStructureComponent implements OnInit {
  salaryStructureDisplayedColumns: string[] = ['descrition', 'current', 'revised'];
  salaryStructureDataSource = SALARY_STRUCTURE_DATA;
  documentsDisplayedColumns: string[] = ['type', 'date', 'download'];
  documentsDataSource = DOCUMENTS_DATA;
  constructor(private dialog: MatDialog, private header: SidebarService) {

  }

  ngOnInit() {
    this.header.header = "Salary Structure"
  }

  appraiselLetterPopup() {
    const dialogRef = this.dialog.open(SalaryStructureDocPopupComponent, {
      panelClass: 'customModalClass',
    });
  }

}

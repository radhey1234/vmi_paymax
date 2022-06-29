import { SidebarService } from './../../sidebar.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { BudgetBusinessUnitComponent, BudgetpopulationGroupComponent } from '../../dialog';
export interface PeriodicElementB {
  department: string;
  headcount: string;
  currentsalary: string;
  budgeting: string;
  budgetingincrease: string;
  updatedbudget: string;
  updatedbudgetamount: string,
  newsalary: string;
}

const UPLOAD_EDIT_DATA: PeriodicElementB[] = [
  { department: 'Sales', headcount: '20', currentsalary: '2,00,00,000', budgeting: '9%', budgetingincrease: '18,00,000', updatedbudget: '10%', updatedbudgetamount: '20,00,000', newsalary: '2,20,00,000', },
  { department: 'Opeations', headcount: '30', currentsalary: '1,00,50,000', budgeting: '8%', budgetingincrease: '80,00,500', updatedbudget: '7%', updatedbudgetamount: '70,00,000', newsalary: '1,70,50,000', },
  { department: 'Technology', headcount: '60', currentsalary: '6,00,00,500', budgeting: '7%', budgetingincrease: '35,00,000', updatedbudget: '9%', updatedbudgetamount: '45,00,000', newsalary: '545,00,500', },


];
@Component({
  selector: 'app-budgeting',
  templateUrl: './budgeting.component.html',
  styleUrls: ['./budgeting.component.scss']
})
export class BudgetingComponent implements OnInit {
  uploaddataeditdisplayedColumns: string[] = ['department', 'headcount', 'currentsalary', 'budgeting', 'budgetingincrease', 'updatedbudget', 'updatedbudgetamount', 'newsalary'];
  uploaddataeditdataSource = new MatTableDataSource(UPLOAD_EDIT_DATA);
  constructor(private dialog: MatDialog,    private header: SidebarService
  ) { }

  ngOnInit() {
    this.header.header = "Budgeting"
  }
  BudgetBusinessUnit() {
    const dialogRef = this.dialog.open(BudgetBusinessUnitComponent, {
      panelClass: 'customModalClassedit'
    });
}
BudgetpopulationGroup() {
  const dialogRef = this.dialog.open(BudgetpopulationGroupComponent, {
    panelClass: 'customModalClassgroup'
  });
}
}

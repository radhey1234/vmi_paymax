import { Component, OnInit } from '@angular/core';
export interface BudgetpopulationGroup {
  populationgroups: string;
  headcount: string;
  currentsalarycost: string;
  budgetedincrease:string;
  budgetedincreaseamount: string;
}

const ELEMENT_DATA22: BudgetpopulationGroup[] = [
 
  {
    populationgroups: 'Sales New Geography',
    headcount: '10',
    currentsalarycost: '2,00,00,000',
    budgetedincrease: '9%',
    budgetedincreaseamount: '18,00,000',
            
},
{
    populationgroups: 'Operations',
    headcount: '30',
    currentsalarycost: '1,00,50,000',
    budgetedincrease: '8%',
    budgetedincreaseamount: '80,00,500',
            
},
{
    populationgroups: 'New BU',
    headcount: '20',
    currentsalarycost: '5,00,00,500',
    budgetedincrease: '7%',
    budgetedincreaseamount: '35,00,000',
            
},
{
    populationgroups: 'Others',
    headcount: '40',
    currentsalarycost: '5,00,00,500',
    budgetedincrease: '7%',
    budgetedincreaseamount: '35,00,000',
            
}


  
];
@Component({
  selector: 'app-budgetpopulation-group',
  templateUrl: './budgetpopulation-group.component.html',
  styleUrls: ['./budgetpopulation-group.component.scss']
})
export class BudgetpopulationGroupComponent implements OnInit {
  displayedColumns: string[] = ['populationgroups', 'headcount', 'currentsalarycost', 'budgetedincrease','budgetedincreaseamount'];
  dataSourceonet = ELEMENT_DATA22;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

export interface BudgetBusinessUnit {
  businessunit: string;
  headcount: string;
  currentsalarycost: string;
  budgetedincrease:string;
  budgetedincreaseamount: string;
}

const ELEMENT_DATA23: BudgetBusinessUnit[] = [
 
{
  businessunit: 'Sales',
  headcount: '20',
  currentsalarycost: '2,00,00,000',
  budgetedincrease: '9%',
  budgetedincreaseamount: '18,00,000',
          
},
{
  businessunit: 'Operations',
  headcount: '30',
  currentsalarycost: '1,00,50,000',
  budgetedincrease: '8%',
  budgetedincreaseamount: '80,00,500',
          
},
{
  businessunit: 'Technology',
  headcount: '60',
  currentsalarycost: '5,00,00,500',
  budgetedincrease: '7%',
  budgetedincreaseamount:' 35,00,000',
          
}

  
];
@Component({
  selector: 'app-budget-business-unit',
  templateUrl: './budget-business-unit.component.html',
  styleUrls: ['./budget-business-unit.component.scss']
})
export class BudgetBusinessUnitComponent implements OnInit {
  displayedColumns: string[] = ['businessunit', 'headcount', 'currentsalarycost', 'budgetedincrease','budgetedincreaseamount'];
  dataSourceonett = ELEMENT_DATA23;
  constructor() { }

  ngOnInit() {
  }

}

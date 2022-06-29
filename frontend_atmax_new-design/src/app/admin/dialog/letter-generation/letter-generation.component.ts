import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  salaryhead: string;
  current: string;
  revised: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {salaryhead: "Fixed Pay", current: '617,500',  revised: '750,000'},
  {salaryhead: "Variable Pay", current: '32,500',  revised: '100,000'},
  {salaryhead: "Total Salary", current: '650,000',  revised: '850,000'},
 
];

@Component({
  selector: 'app-letter-generation',
  templateUrl: './letter-generation.component.html',
  styleUrls: ['./letter-generation.component.scss']
})
export class LetterGenerationComponent implements OnInit {
  displayedColumns: string[] = ['salaryhead', 'current', 'revised'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

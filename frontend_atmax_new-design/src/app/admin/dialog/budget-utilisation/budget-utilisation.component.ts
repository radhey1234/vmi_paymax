import { Chart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-utilisation',
  templateUrl: './budget-utilisation.component.html',
  styleUrls: ['./budget-utilisation.component.scss']
})
export class BudgetUtilisationComponent implements OnInit {

  ratingGradeHistorychart = new Chart({
    // chart: {
    //   zoomType: "xy"
    // },
    title: {
      text: "",
      align: "left",
      margin: 0,
      style: {
        color: "#898C95"
      }
    },
    xAxis: [
      {
        categories: ["Q1", "Q2", "Q3", "Q4"],
        crosshair: true
      }
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}"
        },
      },
      {
        // Secondary yAxis
        labels: {
          format: "{value}%"
        },
        categories: ['4', '6', '8', '10', '12'],
        opposite: true
      }
    ],
    tooltip: {
      shared: true
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "bottom",
      floating: true,
      labelFormatter: function () {
        // @ts-ignore
        return '<span style="color: ' + this.color + '">' + this.name + '</span>';
      },
      symbolHeight: 0.001,
      symbolWidth: 0.001,
      symbolRadius: 0.001
    },
    series: [
      {
        name: "",
        type: "column",
        color: "#F5B333",
        yAxis: 1,
        data: [0.3, 0.6, 1, 1.2],
        pointWidth: 15
      },
      {
        name: "",
        type: "spline",
        color: "#FF3232",
        data: [80, 110, 140, 170]
      }
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit() {
  }

}

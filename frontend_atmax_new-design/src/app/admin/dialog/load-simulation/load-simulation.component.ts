import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-load-simulation',
  templateUrl: './load-simulation.component.html',
  styleUrls: ['./load-simulation.component.scss']
})
export class LoadSimulationComponent implements OnInit {

  constructor() { }

  simulationChart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "",
      align: "center",
      margin: 0,
      style: {
        color: "#898C95"
      }
    },
    xAxis: {
      // type: "category",
      categories: [
        "Allocated Budget",
        "Utilised Budget"
      ]
    },
    yAxis: {
      title: {
        text: " ",
        style: {
          color: "#efa30f"
        }
      },
      min: 10000000,
      max: 60000000,
      tickInterval: 10000000
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: "column",
        showInLegend: false,
        data: [
          {
            y: 50000000,
            color: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, "#f0a515"],
                [1, "#ffce6f"]
              ]
            },
          },
          {
            y: 40000000,
            color: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, "#ff5d5d"],
                [1, "#ff7f7f"]
              ]
            }
          }],
        pointWidth: 100,
        color: "#efa30f",
        states: {
          hover: {
            color: "#efa30f"
          }
        }
      },
    ],
    plotOptions: {
      series: {
        color: '#FF0000',
        dataLabels: {
          enabled: true,
        }
      },
      column: {
        cursor: "pointer"
      }
    },
  });

  ngOnInit() {
  }

}

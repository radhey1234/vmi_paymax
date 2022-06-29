import { CookieService } from 'ngx-cookie';
import { SidebarService } from './../../sidebar.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  salaryProgresschart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Salary Progress",
      align: "left",
      margin: 30,
      style: {
        color: "#898C95"
      }
    },
    xAxis: {
      categories: ["2017", "2018", "2019", "2020"]
    },
    yAxis: {
      title: {
        text: "Salary (in lakhs)",
        style: {
          color: "#898C95"
        }
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        return `Salary ${this.y}L`
      }
    },
    series: [
      {
        type: "column",
        showInLegend: false,
        data: [
          3,
          4,
          7,
          {
            y: 9,
            dataLabels: {
              enabled: true,
              shape: 'box',
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: "#00AE99",
              borderRadius: 3,
              formatter: function (){
                return `${this.y}L`
              },
              style: {
                color: '#00AE99',
                textOutline: 'none'
              },
              y: -50
          }
          }
        ],
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#00AE99"],
            [1, "#00EFCF"]
          ]
        },
        pointWidth: 13,
        borderRadius: 7
      }
    ],
    plotOptions: {
      column: {
        cursor: "pointer"
      }
    }
  });
  ratingGradeHistorychart = new Chart({
    chart: {
      zoomType: "xy"
    },
    title: {
      text: "Rating & Grade History",
      align: "left",
      margin: 30,
      style: {
        color: "#898C95"
      }
    },
    xAxis: [
      {
        categories: ["2017", "2018", "2019"],
        crosshair: true
      }
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}"
        },
        title: {
          text: "Rating"
        },
        min: 0,
        max: 4
      },
      {
        // Secondary yAxis
        title: {
          text: "Grade",
          rotation: 270
        },
        labels: {
          format: "{value}"
        },
        categories: ['E', 'D2', 'D1', 'C2', 'C1', 'B2', 'B1', 'A2', 'A1'],
        min: 0,
        max: 8,
        opposite: true
      }
    ],
    tooltip: {
      shared: true
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
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
        name: "Rating",
        type: "column",
        color: "#F5B333",
        yAxis: 0,
        data: [2, 3, {
          y: 3,
          dataLabels: {
            enabled: true,
            shape: 'box',
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: "#F5B333",
            borderRadius: 3,
            style: {
                color: '#F5B333',
                textOutline: 'none'
            },
            y: -10
          },
          marker: {
            radius: 10
          }
        }],
        pointWidth: 15
      },
      {
        name: "Grade",
        type: "spline",
        color: "#FF3232",
        lineWidth: 6,
        marker: {
          radius: 6,
          animation: {
            duration: 500
          }
        },
        yAxis:1,
        data: [3,4,{
          y: 4,
          dataLabels: {
            enabled: true,
            shape: 'box',
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: "#FF3232",
            borderRadius: 3,
            style: {
                color: '#FF3232',
                textOutline: 'none'
            },
            verticalAlign: 'middle',
            x: 25
          }
        }],

      }
    ],
    credits: {
      enabled: false
    }
  });
  constructor(
    private header: SidebarService,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    this.header.header = "Dash Board"
    // console.log(this._cookieService.get("isLoggedIn"));
  }
}

import { SidebarService } from "./../../sidebar.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { Chart } from "angular-highcharts";
import * as Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import funnel from "highcharts/modules/funnel";

// Exporting(Highcharts);
funnel(Highcharts);

// declare var require: any;
// require('highcharts/modules/funnel')(Chart);

@Component({
  selector: "app-team-snapshot",
  templateUrl: "./team-snapshot.component.html",
  styleUrls: ["./team-snapshot.component.scss"]
})
export class TeamSnapshotComponent implements OnInit {
  // @ts-ignore
  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  constructor(private header: SidebarService) { }

  performanceDistributionChart = new Chart({
    chart: {
      type: "areaspline"
    },
    title: {
      text: "Performance Distribution",
      align: "left",
      style: {
        color: "#898c95"
      }
    },
    xAxis: {
      categories: ["Poor", "Average", "Good", "High", "Best"]
    },
    yAxis: {
      labels: {
        format: '{value}%'
      },
      title: {
        text: ""
      },
      min: 0,
      max: 80,
      tickInterval: 10
    },
    credits: {
      enabled: false
    },
    tooltip: {
      valueSuffix: '%',
      useHTML: true,
      formatter: function () {
        // just to see , what data you can access
        return `<b>${this.x}</b> <br/> <b>Employee Distribution:</b> ${this.y}%`;
      },
      // formatter: function (tooltip) {

      //   const header = `<span style="color: blue;">${this.y}%</span><br/>`
      //   // @ts-ignore
      //   return header;
      // }
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.3,
        dataLabels: {
          enabled: true,
          formatter: function () {
            return `${this.y}%`
          },
          style: {
            fontWeight: "normal",
            color: "#898c95"
          }
        },
        lineColor: "#3575A3",
        marker: {
          enabled: true,
          radius: 6,
          fillColor: "#3575a3"
        },
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#80A8C5"],
            [1, "#FFFFFF"]
          ]
        }
      }
    },
    series: [
      // @ts-ignore
      {
        name: "Rating",
        // showInLegend: false,
        data: [5, 11, 66, 11, 5]
      }
    ]
  });


  ngOnInit() {
    this.header.header = "Team Snapshot";

    Highcharts.chart(this.container.nativeElement, {
      // @ts-ignore

      chart: {
        type: "funnel"
      },
      title: {
        text: "Funnel of Employee Status",
        align: "left",
        style: {
          color: "#898c95"
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.name} ({point.y:,.0f})",
            style: {
              fontWeight: 'normal',
              strokeWidth: 0
            }
            // color: "black",
            // softConnector: true
          },
          // center: ['40%', '50%'],
          // neckWidth: '30%',
          // neckHeight: '25%',
          // @ts-ignore
          width: "80%"
        },
        funnel: {
          dataLabels: {
            alignTo: "connectors"
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [
        // @ts-ignore
        {
          name: "Unique users",
          data: [
            ["Total Count", 500],
            ["Eligible Employee", 400],
            ["Data Shared", 300],
            ["Input Received", 200],
            ["Closed", 100]
          ]
        }
      ],
      credits: {
        enabled: false
      }
    });
  }
}

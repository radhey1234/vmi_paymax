import { SalaryStructureDocPopupComponent } from './../../../dialog/salary-structure-doc-popup/salary-structure-doc-popup.component';
import { dialog } from './../../../dialog/index';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/admin/sidebar.service';
import { Chart } from 'angular-highcharts';
import { MatDialog } from '@angular/material';


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
  selector: 'app-employee-increment',
  templateUrl: './employee-increment.component.html',
  styleUrls: ['./employee-increment.component.scss']
})
export class EmployeeIncrementComponent implements OnInit {

  salaryStructureDisplayedColumns: string[] = ['descrition', 'current', 'revised'];
  salaryStructureDataSource = SALARY_STRUCTURE_DATA;
  documentsDisplayedColumns: string[] = ['type', 'date', 'download'];
  documentsDataSource = DOCUMENTS_DATA;

  constructor(private service: SidebarService, private dialog: MatDialog) { }

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
    tooltip: {
      formatter: function () {
        return `Salary ${this.y}L`
      }
    },
    credits: {
      enabled: false
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
            y: 8.5,
            dataLabels: {
              enabled: true,
              shape: 'box',
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: "#00AE99",
              borderRadius: 3,
              formatter: function () {
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
      text: "Rating History",
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
        }
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
        data: [2, 3,
          {
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
              y: -30
            }
          }],
        pointWidth: 15
      }
    ],
    credits: {
      enabled: false
    }
  });

  salaryComparisanWithDirectTeam = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Salary Comparisan <br/>With Direct Team",
      align: "left",
      style: {
        color: "#898C95"
      }
    },

    yAxis: {
      title: {
        text: "Lakhs"
      },
      min: 0,
      max: 10,
      tickInterval: 1
    },
    xAxis: {
      labels: {
        format: " "
      }
    },
    tooltip: {
      valueSuffix: 'L'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      labelFormatter: function () {
        return (
          // @ts-ignore
          '<span style="color: ' + this.color + '">' + this.name + "</span>"
        );
      }
    },
    series: [
      // @ts-ignore
      {
        name: "Team Members Salary",
        color: "#4CC2ED",
        marker: {
          radius: 8
        },
        data: [6, 9, 6, 9, 6, 9],
        lineWidth: 5
      },
      // @ts-ignore
      {
        name: "Individual Salary",
        color: "green",
        marker: {
          radius: 0
        },
        data: [8.5, 8.5, 8.5, 8.5, 8.5, 8.5],
        lineWidth: 1
      }
    ],
    credits: {
      enabled: false
    }
    // legend: {
    //   verticalAlign: "top",
    //   layout: "horizontal"
    // }
  });
  gradeHistory = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Grade History",
      align: "left",
      style: {
        color: "#898C95"
      }
    },

    yAxis: {
      title: {
        text: "Grade"
      },
      min: 0,
      max: 10,
      tickInterval: 1
    },
    xAxis: {
      labels: {
        format: " "
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      labelFormatter: function () {
        return (
          // @ts-ignore
          '<span style="color: ' + this.color + '">' + this.name + "</span>"
        );
      },
      symbolHeight: 0.001,
      symbolWidth: 0.001,
      symbolRadius: 0.001
    },
    series: [
      // @ts-ignore
      {
        name: "Grade",
        color: "#FF3232",
        marker: {
          radius: 8
        },
        data: [5, 6, {
          y: 6,
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
            y: -25
          }
        }],
        lineWidth: 7
      }
    ],
    credits: {
      enabled: false
    }
    // legend: {
    //   verticalAlign: "top",
    //   layout: "horizontal"
    // }
  });
  employeeDistribution = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Employee Distribution",
      align: "left",
      style: {
        color: "#898C95"
      }
    },

    yAxis: {
      title: {
        text: " "
      },
      min: 0,
      max: 80,
      tickInterval: 10
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      labelFormatter: function () {
        return (
          // @ts-ignore
          '<span style="color: ' + this.color + '">' + this.name + "</span>"
        );
      },
      symbolHeight: 0.001,
      symbolWidth: 0.001,
      symbolRadius: 0.001
    },
    series: [
      // @ts-ignore
      {
        name: " ",
        showInLegend: false,
        color: "#DE177B",
        marker: {
          radius: 8
        },
        data: [10, 15, {
          y: 70,
          dataLabels: {
            enabled: true,
            shape: 'box',
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: "#DE177B",
            borderRadius: 3,
            style: {
              color: '#DE177B',
              textOutline: 'none'
            },
            y: -40
          }
        }, 20, 15],
        lineWidth: 7
      }
    ],
    credits: {
      enabled: false
    }
    // legend: {
    //   verticalAlign: "top",
    //   layout: "horizontal"
    // }
  });

  plotChart = new Chart({
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Salary Comparison with Peers',
      align: "left",
      style: {
        color: "#898C95"
      }
    },
    xAxis: {
      labels: {
        format: ' '
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: ' '
      }
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      labelFormatter: function () {
        return (
          // @ts-ignore
          '<span style="color: ' + this.color + '">' + this.name + "</span>"
        );
      }
    },
    // @ts-ignore
    series: [{
      name: 'Peers',
      color: '#A66FFF',
      marker: {
        radius: 8
      },
      data: [
        [0, 6.1], [1.5, 9.4], [2.9, 7.9],
        [4.1, 8.2],
        [5, 6.2],
        [5.9, 8.1],
        [7, 4.5],
        [8.5, 10],
        [8.9, 8],
        [9.5, 4],
        [10, 8.5],
        [11.5, 6]

      ]

    },
    // @ts-ignore
    {
      name: "Individual Salary",
      color: "green",
      marker: {
        radius: 0
      },
      data: [8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5],
      lineWidth: 1
    }
    ],
    credits: {
      enabled: false
    }

  }

  )
  ngOnInit() {
    this.service.header = "Employee Increment"
    this.service.backbutton = true;
    this.service.backlink = "team";
    window.scroll(0, 0);
  }

  ngOnDestroy(): void {
    this.service.backbutton = false
    this.service.backlink = null;
  }

  appraiselLetterPopup() {
    const dialogRef = this.dialog.open(SalaryStructureDocPopupComponent, {
      panelClass: 'customModalClass',
    });
  }

}

import { MatDialog } from '@angular/material';
import { SidebarService } from "./../../sidebar.service";
import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from "@angular/core";
import { Chart } from "angular-highcharts";
import { ManageAnalyticsTeamMemberComponent } from '../../dialog';
// import * as Highcharts from 'highcharts';

declare var Highcharts;

export interface PeriodicElement8 {
  name: string;
  designation: string;
  department: string;
  tenureincompany: string;
  tenureinrole: string;
  location: string;
  salary: string;
  rangepercentage: string;
  // rangepercentageone: string;
}

const ELEMENT_DATA8: PeriodicElement8[] = [
  {
    name: "Charls Evans",
    designation: "Manager",
    department: "IT Audit",
    tenureincompany: "2.1",
    tenureinrole: "1.0",
    location: "Delhi",
    salary: "25,00,000",
    rangepercentage: "90%",
    // rangepercentageone: ""

  },
  {
    name: "Shyam Pal",
    designation: "Executive",
    department: "IT Audit",
    tenureincompany: "3.2",
    tenureinrole: "2.5",
    location: "Mumbai",
    salary: "23,00,700",
    rangepercentage: "121%",
    // rangepercentageone: ""

  },
  {
    name: "Abahay",
    designation: "Executive",
    department: "IT Audit",
    tenureincompany: "3.5",
    tenureinrole: "3.5",
    location: "Bangalore",
    salary: "67,00,070",
    rangepercentage: "94%",
    // rangepercentageone: ""

  },
  {
    name: "Chee Long",
    designation: "Asst. Manager",
    department: "IT Audit",
    tenureincompany: "4.5",
    tenureinrole: "0.8",
    location: "Delhi",
    salary: "59,00,000",
    rangepercentage: "-21%",
    // rangepercentageone: ""

  }



];
@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"]
})
export class AnalyticsComponent implements OnInit {
  displayedColumns8: string[] = [
    "name",
    "designation",
    "department",
    "tenureincompany",
    "tenureinrole",
    "location",
    "salary",
    "rangepercentage",
    // "rangepercentageone"
  ];
  dataSource8 = ELEMENT_DATA8;

  package = null;
  constructor(
    private dialog: MatDialog,
    private service: SidebarService,
    private header: SidebarService
  ) { }


  categories = ["A", "B", "C", "D", "E", "F"];
  salarySpreadGradeChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: "Salary Spread Vs Grades",
      align: "left",
      style: {
        color: "#898C95"
      }
    },
    xAxis: [
      {
        categories: this.categories,
        reversed: false,
        labels: {
          step: 1
        },
        accessibility: {
          description: "Age (male)"
        }
      },
      // {
      //   // mirror axis on right side
      //   opposite: true,
      //   reversed: false,
      //   categories: this.categories,
      //   linkedTo: 0,
      //   labels: {
      //     step: 1
      //   },
      //   accessibility: {
      //     description: "Age (female)"
      //   }
      // }
    ],
    yAxis: {
      title: {
        text: null
      },
      tickInterval: 10,
      labels: {
        formatter: function () {
          return 'P' + Math.abs(this.value);
        }
      },
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 5%"
      }
    },

    plotOptions: {
      series: {
        stacking: "normal"
      }
    },

    series: [
      // @ts-ignore
      {
        name: "P0 to P40",
        color: "#E572BD",
        // @ts-ignore
        data: [-30, -40, -20, -40, -30, -20]
      },
      // @ts-ignore
      {
        name: "P0 to P30",
        color: "#DE7325",
        // @ts-ignore
        data: [30, 20, 20, 10, 30, 20]
      }
    ],
    credits: {
      enabled: false
    }
  });

  payParityForGenderChart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Pay Parity For Gender",
      align: "left",
      style: {
        color: "#898C95"
      }
    },

    yAxis: {
      title: {
        text: "Salary (In millions)"
      },
      min: 0,
      max: 7,
      tickInterval: 0.5
    },
    xAxis: {
      categories: ["A", "B", "C", "D", "E", "F"],
      title: {
        text: "(Grades)"
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
        name: "Males",
        color: "red",
        // @ts-ignore
        marker: {
          radius: 8
        },
        data: [0.5, 1, 1.6, 2.5, 4.6, 5.5]
      },
      // @ts-ignore
      {
        name: "Females",
        color: "violet",
        marker: {
          symbol: "triangle",
          radius: 8
        },
        data: [1, 1.1, 1.3, 3.5, 4.1, 5]
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

  compaRatioComparison = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Compa Ratio Comparison",
      align: "left",
      style: {
        color: "#898C95"
      }
    },

    yAxis: {
      title: {
        text: "Rating"
      },
      min: 0.6,
      max: 1.5,
      tickInterval: 0.1
    },
    xAxis: {
      categories: []
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
        name: "Exit",
        color: "#F4AC22",
        marker: {
          symbol: "circle",
          radius: 8
        },
        data: [0.8, 0.6, 1, 0.7, 1.4, 1]
      },
      // @ts-ignore
      {
        name: "Hired",
        color: "#9851F8",
        marker: {
          symbol: "triangle",
          radius: 8
        },
        data: [0.9, 0.6, 1, 0.8, 1, 0.6]
      },
      // @ts-ignore
      {
        name: "Current",
        color: "#FF5555",
        marker: {
          symbol: "square",
          radius: 8
        },
        data: [0.6, 0.9, 0.8, 0.8, 1, 0.6]
      }
    ],
    credits: {
      enabled: false
    }
  });

  salaryRangeGrade = {

    chart: {
      type: 'boxplot'
    },

    title: {
      text: ''
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F'],
      title: {
        text: '(Grades)'
      }
    },

    yAxis: {
      title: {
        text: 'Salary (in Millions)'
      },
      min: 0,
      max: 6,
      tickInterval: 1,
      // plotLines: [{
      //   value: 932,
      //   color: 'red',
      //   width: 1,
      //   label: {
      //     text: 'Theoretical mean: 932',
      //     align: 'center',
      //     style: {
      //       color: 'gray'
      //     }
      //   }
      // }]
    },

    series: [{
      name: 'Observations',
      data: [
        [0.0, 0, 0.2, 0.3, 0.5, 1],
        [1, 0.5, 0.6, 0.7, 1.1, 1.5],
        [2, 1, 1.2, 1.8, 2.0, 2.5],
        [3, 1.5, 2.0, 2.3, 2.5, 3],
        [4, 3.5, 3.8, 4.0, 4.5, 4.9],
        [5, 4.5, 4.8, 5.2, 5.4, 5.9],
        // [1, 0.1, 0.2, 0.5, 0.8, 1],
        // [2, 0.5, 0.7, 1, 1.2, 1.5],
        // [3, 0.8, 0.9, 2, 2.2, 2.5],
        // [4, 0.6, 0.7, 1, 1.2, 1.5],
        // [5, 0.6, 0.7, 1, 1.2, 1.5],
        // [733, 853, 939, 980, 1080],
        // [714, 762, 817, 870, 918],
        // [724, 802, 806, 871, 950],
        // [834, 836, 864, 882, 910]
      ],
      tooltip: {
        headerFormat: '<em>Experiment No {point.key}</em><br/>'
      }
    }, {
      name: 'Outliers',
      color: Highcharts.getOptions().colors[0],
      type: 'scatter',
      data: [ // x, y positions where 0 is the first category
        [0, 0],
        // [0, .2],
        // [0, .4],
        // [0, .6],
        // [0, .8],
        // [0, 1],
        // [0, 1.2],
        // [0, 1.4],
        [1, 1.1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        // [1, 3],
        // [2, 4],
        // [3, 5],
        // [4, 6],
        // [5, 2],

      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: Highcharts.getOptions().colors[0]
      },
      tooltip: {
        pointFormat: 'Observation: {point.y}'
      }
    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
  };
  employeeCostStack = {
    chart: {
      type: 'waterfall'
    },

    title: {
      text: "Employee Cost Stack",
      align: "left",
      style: {
        color: "#898C95"
      }
    },
    plotOptions: {
      column: {
        borderWidth: 0
      }
    },
    xAxis: {
      type: 'category',

    },

    yAxis: {
      title: {
        text: 'Cost (in Millions)'
      },
      min: 50,
      max: 300,
      tickInterval: 50
    },

    legend: {
      enabled: false
    },

    tooltip: {
      // pointFormat: '<b>${point.y:,.2f}</b> USD'
    },
    // @ts-ignore
    series: [{
      data: [{
        name: '2019<br />Cost',
        y: 200,
        color: "#EFA20C",
      }, {
        name: 'Promotion',
        y: 10,
        color: "#0CA0EF",
      }, {
        name: 'Increment',
        y: 15,
        color: "#0CE6EF",
      }, {
        name: 'Hiring<br />Cost ',
        y: 20,
        color: "#1DBA00",
      }, {
        name: 'Exit<br />Cost',
        pointStart: 0,
        y: -20,
        color: "#EF5B0C",
      }, {
        name: '2020<br />Cost',
        isSum: true,
        color: "#EFA20C",
      }],
      dataLabels: {
        enabled: true,
        verticalAlign: 'top',
        align: 'center',
        x: 3,
        y: -30,
        formatter: function () {
          return `${this.y}M`
        },
        style: {
          fontWeight: "normal",
          color: "#898C95"
        }
      },
      pointPadding: 0
    }],
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    }
  };

  // @ts-ignore
  @ViewChild('waterFall', { read: ElementRef }) public waterFall: ElementRef;
  // @ts-ignore
  @ViewChild('boxPlot', { read: ElementRef }) public boxPlot: ElementRef;

  ngOnInit() {
    this.package = this.service.ptype;
    this.header.header = "Analytics";

    Highcharts.chart(this.waterFall.nativeElement, this.employeeCostStack);
    Highcharts.chart(this.boxPlot.nativeElement, this.salaryRangeGrade);

  }

  teamMemberOfSally() {
    const dialogRef = this.dialog.open(ManageAnalyticsTeamMemberComponent, {
      panelClass: 'customModalClass'
    })
  }
}


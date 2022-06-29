import { TeamPeerGroupListComponent } from './team/team-peer-group-list/team-peer-group-list.component';
import { PeerGroupComponent } from './benchmarking/peer-group/peer-group.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SalaryStructureComponent } from "./salary-structure/salary-structure.component";
import { TeamSnapshotComponent } from "./team-snapshot/team-snapshot.component";
import { TeamComponent } from './team/team.component';
import { ProcessComponent } from './process/process.component';
import { BenchmarkingComponent } from "./benchmarking/benchmarking.component";
import { BudgetingComponent } from "./budgeting/budgeting.component"
import { ReportingComponent } from './reporting/reporting.component';
import { AnalyticsComponent } from "./analytics/analytics.component";
import { EmployeeIncrementComponent } from './team/employee-increment/employee-increment.component'
import { CreateNewBuilderReportComponent } from './reporting/create-new-builder-report/create-new-builder-report.component';

export const containers = [
    DashboardComponent,
    SalaryStructureComponent,
    TeamSnapshotComponent,
    TeamComponent,
    ProcessComponent,
    BenchmarkingComponent,
    BudgetingComponent,
    ReportingComponent,
    AnalyticsComponent,
    PeerGroupComponent,
    TeamPeerGroupListComponent,
    EmployeeIncrementComponent,
    CreateNewBuilderReportComponent
];

export * from "./dashboard/dashboard.component";
// export * from './salary-structure/salary-structure.component';
export * from './team-snapshot/team-snapshot.component';
export * from './team/team.component';
export * from './process/process.component';
export * from './benchmarking/benchmarking.component';
export * from './budgeting/budgeting.component';
export * from './reporting/reporting.component';
export * from './analytics/analytics.component';
export * from './team/team-peer-group-list/team-peer-group-list.component';
export * from './team/employee-increment/employee-increment.component';


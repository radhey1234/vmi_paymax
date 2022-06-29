import { PeerGroupComponent } from './containers/benchmarking/peer-group/peer-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent, TeamSnapshotComponent, TeamComponent, ProcessComponent, BenchmarkingComponent, BudgetingComponent, ReportingComponent, AnalyticsComponent, TeamPeerGroupListComponent, EmployeeIncrementComponent } from './containers';
import { AuthGuardService as AuthGuard, AuthGuardService } from '../guard/auth-guard.service'
import { SalaryStructureComponent } from './containers/salary-structure/salary-structure.component';
import { PromotionListComponent } from './containers/promotion-list/promotion-list.component';
import { CreateNewBuilderReportComponent } from './containers/reporting/create-new-builder-report/create-new-builder-report.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'salary-structure', component: SalaryStructureComponent, canActivate: [AuthGuard] },
      { path: 'team-snapshot', component: TeamSnapshotComponent, canActivate: [AuthGuard] },
      { path: 'team', component: TeamComponent, canActivate: [AuthGuard] },
      { path: 'team/sub-peer-group', component: TeamPeerGroupListComponent, canActivate: [AuthGuard] },
      { path: 'team/employee-increment', component: EmployeeIncrementComponent, canActivate: [AuthGuard] },
      { path: 'promotion-list', component: PromotionListComponent, canActivate: [AuthGuard] },
      { path: 'process', component: ProcessComponent, canActivate: [AuthGuard] },
      { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard] },
      { path: 'bench-marking', component: BenchmarkingComponent, canActivate: [AuthGuard] },
      { path: 'budgeting', component: BudgetingComponent, canActivate: [AuthGuard] },
      { path: 'reporting', component: ReportingComponent, canActivate: [AuthGuard] },
      { path: 'bench-marking/peer-group', component: PeerGroupComponent, canActivate: [AuthGuard] },



      { path: 'reporting/create-new-builder-report', component: CreateNewBuilderReportComponent, canActivate: [AuthGuard], data:{type: ''} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

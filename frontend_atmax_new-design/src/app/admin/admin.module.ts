import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ProcessGridSettingLoadSelectComponent } from './dialog/process-grid-setting-load-select/process-grid-setting-load-select.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';

import { AdminRoutingModule } from './admin-routing.module';
import { containers } from './containers';
import { AdminComponent } from './admin.component';
import { components } from './components';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatNativeDateModule, MatSortModule, MatIconModule } from '@angular/material';
import { ChartModule } from 'angular-highcharts';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { dialog } from "./dialog";
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HighchartsChartModule, HighchartsChartComponent } from 'highcharts-angular';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatRadioModule} from '@angular/material/radio';
import { NgSelectModule } from '@ng-select/ng-select';

import { PromotionListComponent } from './containers/promotion-list/promotion-list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [AdminComponent, ...containers, ...components, ...dialog, ProcessGridSettingLoadSelectComponent, PromotionListComponent,   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ChartModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSidenavModule,
    DragDropModule,
    SharedModule,
    MatSortModule,
    MatIconModule,
    HighchartsChartModule,
    MatSelectFilterModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    MatExpansionModule,
    MatRadioModule,
    MatStepperModule,
    NgSelectModule,
    
    NgScrollbarModule,
    ScrollingModule,
  ],
  entryComponents: [...dialog, ProcessGridSettingLoadSelectComponent]
})
export class AdminModule { }

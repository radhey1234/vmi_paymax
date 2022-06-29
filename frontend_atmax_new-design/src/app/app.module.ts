import { effects } from './store/effects/index';
import { reducers } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { containers } from './containers';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogRef } from '@angular/material';
import { AdminModule } from './admin/admin.module';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    ...containers,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects),
    CookieModule.forRoot(),
    SharedModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,    
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

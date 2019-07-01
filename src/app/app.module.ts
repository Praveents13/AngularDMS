import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ReportingComponent } from './reporting/reporting.component';
import { DatasourcesComponent } from './datasources/datasources.component';
import { DatasourceComponent } from './datasources/datasource/datasource.component'

const ROUTES:Routes=[
  {path:'',component:DatasourcesComponent},
  {path:'projects',component:ProjectComponent},
  {path:'reports',component:ReportingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    ReportingComponent,
    DatasourcesComponent,
    DatasourceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

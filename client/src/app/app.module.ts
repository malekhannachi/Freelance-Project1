import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgToastModule} from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/private/admin/users/add-user/add-user.component';
import { ListUserComponent } from './components/private/admin/users/list-user/list-user.component';
import { UpdateAgentComponent } from './components/private/admin/users/update-agent/update-agent.component';
import { AddFournisseurComponent } from './components/private/admin/fournisseurs/add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './components/private/admin/fournisseurs/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './components/private/admin/fournisseurs/update-fournisseur/update-fournisseur.component';
import { EspaceAgentAnalyserComponent } from './components/private/agentAnalyser/espace-agent-analyser/espace-agent-analyser.component';
import { EspaceAgentFacturationComponent } from './components/private/agentFacturation/espace-agent-facturation/espace-agent-facturation.component';
import { EspaceAgentReceptionComponent } from './components/private/agentReception/espace-agent-reception/espace-agent-reception.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
  
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
   
    AddUserComponent,
    ListUserComponent,
    UpdateAgentComponent,
    AddFournisseurComponent,
    ListFournisseurComponent,
    UpdateFournisseurComponent,
    EspaceAgentAnalyserComponent,
    EspaceAgentFacturationComponent,
    EspaceAgentReceptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,HttpClientModule,NgToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

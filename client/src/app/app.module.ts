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
import { DashboardComponent } from './components/private/admin/dashboard/dashboard.component';

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
import { ListCamionComponent } from './components/private/agentReception/camion/list-camion/list-camion.component';
import { AddCamionComponent } from './components/private/agentReception/camion/add-camion/add-camion.component';
import { UpdateCamionComponent } from './components/private/agentReception/camion/update-camion/update-camion.component';
import { ListCiterneComponent } from './components/private/agentReception/citerne/list-citerne/list-citerne.component';
import { AddCiterneComponent } from './components/private/agentReception/citerne/add-citerne/add-citerne.component';
import { UpdateCiterneComponent } from './components/private/agentReception/citerne/update-citerne/update-citerne.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './components/private/shared/profile/profile.component';
import { ListAnylseComponent } from './components/private/agentAnalyser/analyse/list-anylse/list-anylse.component';
import { AddAnylseComponent } from './components/private/agentAnalyser/analyse/add-anylse/add-anylse.component';
import { UpdateAnylseComponent } from './components/private/agentAnalyser/analyse/update-anylse/update-anylse.component';
import { DetailAnylseComponent } from './components/private/agentAnalyser/analyse/detail-anylse/detail-anylse.component';
import { ListAnalyseComponent } from './components/private/admin/analyse/list-analyse/list-analyse.component';
import { DetailsAnalyseComponent } from './components/private/admin/analyse/details-analyse/details-analyse.component';
import { BonVidageComponent } from './components/private/agentReception/bon-vidage/bon-vidage.component';
import { TypeAnalyseComponent } from './components/private/agentAnalyser/type-analyse/type-analyse.component';
import { BonAnalyseComponent } from './components/private/agentAnalyser/bon-analyse/bon-analyse.component';

import { BonAnalyseDetailComponent } from './components/private/agentAnalyser/bon-analyse/bon-analyse-detail/bon-analyse-detail.component';
import { FactureDetailComponent } from './components/private/agentFacturation/facture/facture-detail/facture-detail.component';
import { ListBonReceptionComponent } from './components/private/agentReception/bon-reception/list-bon-reception/list-bon-reception.component';
import { AddBonReceptionComponent } from './components/private/agentReception/bon-reception/add-bon-reception/add-bon-reception.component';
import { UpdateBonReceptionComponent } from './components/private/agentReception/bon-reception/update-bon-reception/update-bon-reception.component';
import {NgxPrintModule} from 'ngx-print';

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
    ListCamionComponent,
    AddCamionComponent,
    UpdateCamionComponent,
    ListCiterneComponent,
    AddCiterneComponent,
    UpdateCiterneComponent,
    ProfileComponent,
    ListAnylseComponent,
    AddAnylseComponent,
    UpdateAnylseComponent,
    DetailAnylseComponent,
    ListAnalyseComponent,
    DetailsAnalyseComponent,
    
    BonVidageComponent,
         TypeAnalyseComponent,
         BonAnalyseComponent,
         
         BonAnalyseDetailComponent,
         FactureDetailComponent,
         ListBonReceptionComponent,
         AddBonReceptionComponent,
         UpdateBonReceptionComponent,
       
    
   
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,HttpClientModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),NgToastModule,NgxPrintModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

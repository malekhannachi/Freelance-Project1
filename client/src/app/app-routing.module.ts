import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFournisseurComponent } from './components/private/admin/fournisseurs/add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './components/private/admin/fournisseurs/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './components/private/admin/fournisseurs/update-fournisseur/update-fournisseur.component';
import { AddUserComponent } from './components/private/admin/users/add-user/add-user.component';
import { ListUserComponent } from './components/private/admin/users/list-user/list-user.component';
import { UpdateAgentComponent } from './components/private/admin/users/update-agent/update-agent.component';
import { AddCamionComponent } from './components/private/agentReception/camion/add-camion/add-camion.component';
import { ListCamionComponent } from './components/private/agentReception/camion/list-camion/list-camion.component';
import { UpdateCamionComponent } from './components/private/agentReception/camion/update-camion/update-camion.component';
import { EspaceAgentAnalyserComponent } from './components/private/agentAnalyser/espace-agent-analyser/espace-agent-analyser.component';
import { EspaceAgentFacturationComponent } from './components/private/agentFacturation/espace-agent-facturation/espace-agent-facturation.component';
import { EspaceAgentReceptionComponent } from './components/private/agentReception/espace-agent-reception/espace-agent-reception.component';
import { DashboardComponent } from './components/private/admin/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { AdminGuard } from './guards/admin.guard';
import { AgentAnalyserGuard } from './guards/agent-analyser.guard';
import { AgentFacturationGuard } from './guards/agent-facturation.guard';
import { AgentReceptionGuard } from './guards/agent-reception.guard';
import { ListCiterneComponent } from './components/private/agentReception/citerne/list-citerne/list-citerne.component';
import { AddCiterneComponent } from './components/private/agentReception/citerne/add-citerne/add-citerne.component';
import { UpdateCiterneComponent } from './components/private/agentReception/citerne/update-citerne/update-citerne.component';
import { ProfileComponent } from './components/private/shared/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
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
import { AddFactureComponent } from './components/private/agentFacturation/facture/add-facture/add-facture.component';
import { ListFactureComponent } from './components/private/agentFacturation/facture/list-facture/list-facture.component';
import { UpdateFactureComponent } from './components/private/agentFacturation/facture/update-facture/update-facture.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate:[AdminGuard] },

  //ADMIN : Gestion des Agents
  { path: 'list-user', component: ListUserComponent ,canActivate:[AdminGuard] },
  { path: 'add-user', component: AddUserComponent ,canActivate:[AdminGuard]},
  { path: 'update-user/:id', component: UpdateAgentComponent ,canActivate:[AdminGuard]},
  //ADMIN :Gestion des Fournisseurs
  { path: 'list-fournisseur', component: ListFournisseurComponent,canActivate:[AdminGuard] },
  { path: 'add-fournisseur', component: AddFournisseurComponent,canActivate:[AdminGuard] },
  { path: 'update-fournisseur/:id', component: UpdateFournisseurComponent ,canActivate:[AdminGuard]},
 //ADMIN :Gestion des Fournisseurs
 { path: 'list-analyses', component: ListAnalyseComponent ,canActivate:[AdminGuard] },
 { path: 'details-anaylses/:id', component: DetailsAnalyseComponent ,canActivate:[AdminGuard]},



  //Agent Analyser : Gestion des Anayles
  { path: 'espace-agentAnalyser', component: EspaceAgentAnalyserComponent,canActivate:[AgentAnalyserGuard] },
  //Agent Analyser :
  { path: 'type-analyse', component: TypeAnalyseComponent ,canActivate:[AgentAnalyserGuard] },
  { path: 'bon-analyse', component: BonAnalyseComponent ,canActivate:[AgentAnalyserGuard] },
  { path: 'bon-reception-details/:id', component: BonAnalyseDetailComponent ,canActivate:[AgentAnalyserGuard]},
  { path: 'list-analyse', component: ListAnylseComponent ,canActivate:[AgentAnalyserGuard] },
  { path: 'add-analyse', component: AddAnylseComponent ,canActivate:[AgentAnalyserGuard]},
  { path: 'update-analyse/:id', component: UpdateAnylseComponent ,canActivate:[AgentAnalyserGuard]},
  { path: 'detail-analyse/:id', component: DetailAnylseComponent ,canActivate:[AgentAnalyserGuard]},


   //AgentReception 
  { path: 'espace-agentReception', component: EspaceAgentReceptionComponent ,canActivate:[AgentReceptionGuard]},
  //AgentReception :Gestion des Camions
  { path: 'list-camion', component: ListCamionComponent ,canActivate:[AgentReceptionGuard] },
  { path: 'add-camion', component: AddCamionComponent ,canActivate:[AgentReceptionGuard]},
  { path: 'update-camion/:id', component: UpdateCamionComponent ,canActivate:[AgentReceptionGuard]},
 // :Gestion des Citernes
 { path: 'list-citerne', component: ListCiterneComponent ,canActivate:[AgentReceptionGuard] },
  { path: 'add-citerne', component: AddCiterneComponent ,canActivate:[AgentReceptionGuard]},
  { path: 'update-citerne/:id', component: UpdateCiterneComponent ,canActivate:[AgentReceptionGuard]},
  { path: 'bon-vidage', component: BonVidageComponent ,canActivate:[AgentReceptionGuard]},
   // :Gestion des Citernes
  { path: 'list-bon-reception', component: ListBonReceptionComponent ,canActivate:[AgentReceptionGuard]},
  { path: 'add-bon-reception', component: AddBonReceptionComponent ,canActivate:[AgentReceptionGuard]},
  { path: 'update-bon-reception/:id', component: UpdateBonReceptionComponent ,canActivate:[AgentReceptionGuard]},
 
//Agent Facturation 
 { path: 'add-facture', component: AddFactureComponent, canActivate:[AgentFacturationGuard]},
 { path: 'list-facture', component: ListFactureComponent, canActivate:[AgentFacturationGuard]},
 { path: 'update-facture/:id', component: UpdateFactureComponent, canActivate:[AgentFacturationGuard]},
  { path: 'espace-agentFacturation', component: EspaceAgentFacturationComponent, canActivate:[AgentFacturationGuard]},
  { path: 'detail-facture/:id', component: FactureDetailComponent, canActivate:[AgentFacturationGuard]},

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

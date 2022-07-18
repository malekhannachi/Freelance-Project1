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
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
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
import { ListAnylseComponent } from './components/private/agentAnalyser/list-anylse/list-anylse.component';
import { AddAnylseComponent } from './components/private/agentAnalyser/add-anylse/add-anylse.component';
import { UpdateAnylseComponent } from './components/private/agentAnalyser/update-anylse/update-anylse.component';
import { DetailAnylseComponent } from './components/private/agentAnalyser/detail-anylse/detail-anylse.component';
import { ListAnalyseComponent } from './components/private/admin/analyse/list-analyse/list-analyse.component';
import { DetailsAnalyseComponent } from './components/private/admin/analyse/details-analyse/details-analyse.component';

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

//Agent Facturation 
  { path: 'espace-agentFacturation', component: EspaceAgentFacturationComponent, canActivate:[AgentFacturationGuard]},

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent,canActivate:[AdminGuard] },
  //ADMIN : Gestion des Agents
  { path: 'list-user', component: ListUserComponent ,canActivate:[AdminGuard] },
  { path: 'add-user', component: AddUserComponent ,canActivate:[AdminGuard]},
  { path: 'update-user/:id', component: UpdateAgentComponent ,canActivate:[AdminGuard]},
  //ADMIN :Gestion des Fournisseurs
  { path: 'list-fournisseur', component: ListFournisseurComponent,canActivate:[AdminGuard] },
  { path: 'add-fournisseur', component: AddFournisseurComponent,canActivate:[AdminGuard] },
  { path: 'update-fournisseur/:id', component: UpdateFournisseurComponent ,canActivate:[AdminGuard]},
  //
  { path: 'espace-agentAnalyser', component: EspaceAgentAnalyserComponent,canActivate:[AgentAnalyserGuard] },
 
  // //agentReception :Gestion des Camions
  { path: 'espace-agentReception', component: EspaceAgentReceptionComponent ,canActivate:[AgentReceptionGuard]},
  //
  { path: 'list-camion', component: ListCamionComponent ,canActivate:[AgentReceptionGuard] },
  { path: 'add-camion', component: AddCamionComponent ,canActivate:[AgentReceptionGuard]},
  { path: 'update-camion/:id', component: UpdateCamionComponent ,canActivate:[AgentReceptionGuard]},

  { path: 'espace-agentFacturation', component: EspaceAgentFacturationComponent, canActivate:[AgentFacturationGuard]},

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

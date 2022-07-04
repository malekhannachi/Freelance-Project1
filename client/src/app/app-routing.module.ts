import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFournisseurComponent } from './components/private/admin/fournisseurs/add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './components/private/admin/fournisseurs/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './components/private/admin/fournisseurs/update-fournisseur/update-fournisseur.component';
import { AddUserComponent } from './components/private/admin/users/add-user/add-user.component';
import { ListUserComponent } from './components/private/admin/users/list-user/list-user.component';
import { UpdateAgentComponent } from './components/private/admin/users/update-agent/update-agent.component';
import { EspaceAgentAnalyserComponent } from './components/private/agentAnalyser/espace-agent-analyser/espace-agent-analyser.component';
import { EspaceAgentFacturationComponent } from './components/private/agentFacturation/espace-agent-facturation/espace-agent-facturation.component';
import { EspaceAgentReceptionComponent } from './components/private/agentReception/espace-agent-reception/espace-agent-reception.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent },
  //Gestion des Agents
  { path: 'list-user', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: UpdateAgentComponent },
  //Gestion des Fournisseurs
  { path: 'list-fournisseur', component: ListFournisseurComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'update-fournisseur/:id', component: UpdateFournisseurComponent },
  //
  { path: 'espace-agentAnalyser', component: EspaceAgentAnalyserComponent },
  //
  { path: 'espace-agentReception', component: EspaceAgentReceptionComponent },
  //
  { path: 'espace-agentFacturation', component: EspaceAgentFacturationComponent },

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

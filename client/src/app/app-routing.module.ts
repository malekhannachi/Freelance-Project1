import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/private/admin/users/add-user/add-user.component';
import { ListUserComponent } from './components/private/admin/users/list-user/list-user.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { AuthAdminComponent } from './components/public/auth-admin/auth-admin.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'auth-admin', component: AuthAdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

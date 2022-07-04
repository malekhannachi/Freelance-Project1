import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgToastModule} from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { AuthAdminComponent } from './components/public/auth-admin/auth-admin.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { AdminListComponent } from './components/private/admin/admin-management/admin-list/admin-list.component';
import { AdminAddComponent } from './components/private/admin/admin-management/admin-add/admin-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/private/admin/users/add-user/add-user.component';
import { ListUserComponent } from './components/private/admin/users/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    AuthAdminComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    AdminListComponent,
    AdminAddComponent,
    AddUserComponent,
    ListUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,HttpClientModule,NgToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

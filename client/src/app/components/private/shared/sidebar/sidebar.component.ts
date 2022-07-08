import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  adminIsLogged!:Boolean
  agentAnalyserisLogged!:Boolean
  agentReceptionisLogged!:Boolean
  constructor(private us:UserService) {}

  ngOnInit(): void {
    this.adminIsLogged=this.us.isLoggedInAdmin()
    this.agentAnalyserisLogged=this.us.isLoggedInAgentAnalyser()
    this.agentReceptionisLogged=this.us.isLoggedInAgentReception()
  }
}

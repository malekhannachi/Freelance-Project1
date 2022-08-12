import { Component, OnInit } from '@angular/core';
import { AnalyseService } from 'src/app/services/analyse.service';
import { UserService } from 'src/app/services/user.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  numberAgent: number = 0;
  numberFournis: number = 0;
  numberAnalyse: number = 0;

  listAnalyse: any[] = [];
  listFournis: any[] = [];
  listAgent: any[] = [];

  constructor(
    private agentservice: UserService,
    private analyseservice: AnalyseService,
    private fourniservice: FournisseurService
  ) {}

  ngOnInit(): void {
    this.numberAgents();
    this.numberFourniss();
    this.numberAnalyses();
  }
  numberAnalyses() {
    this.analyseservice.getAllAnalyse().subscribe((result) => {
      this.listAnalyse = result;
      this.numberAnalyse = this.listAnalyse.length;
    });
  }
  numberFourniss() {
    this.fourniservice.getAllFournisseur().subscribe((result) => {
      this.listFournis = result;
      this.numberFournis = this.listFournis.length;
    });
  }
  numberAgents() {
    this.agentservice.getAllUser().subscribe((result) => {
      this.listAgent = result;
      this.numberAgent = this.listAgent.length;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AnalyseService } from 'src/app/services/analyse.service';
import { CamionService } from 'src/app/services/camion.service';

@Component({
  selector: 'app-espace-agent-analyser',
  templateUrl: './espace-agent-analyser.component.html',
  styleUrls: ['./espace-agent-analyser.component.css'],
})
export class EspaceAgentAnalyserComponent implements OnInit {
  numberAnalyses: number = 0;
  numberType: number = 0;
  numberAccepte: number = 0;
  numberRefuse: number = 0;
  decision: string = 'Accepte';
  decisionR: string = 'Refuse';

  listAnalyse: any[] = [];
  listType: any[] = [];
  listAccepte: any[] = [];
  listRefuse: any[] = [];
  constructor(

    private analyseservice: AnalyseService
  ) {}

  ngOnInit(): void {
    this.numberAnalyseAccepte();
    this.numberAnalyseRefuse();
    this.numberAnalyse();
  }

  numberAnalyse() {
    this.analyseservice.getAllAnalyse().subscribe((result) => {
      this.listAnalyse = result;
      this.numberAnalyses = this.listAnalyse.length;
    });

  }
  numberAnalyseRefuse() {
    let decision ="Refuse"
    this.analyseservice.getAnalyser(decision).subscribe((result) => {
      this.listAccepte = result;
      this.numberRefuse = this.listAccepte.length;
    });
  }
  numberAnalyseAccepte() {
    this.analyseservice.getAnalyse(this.decision).subscribe((result) => {
      this.listAccepte = result;
      this.numberAccepte = this.listAccepte.length;
    });
  }
}

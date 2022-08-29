import { Component, OnInit } from '@angular/core';
import { AnalyseService } from 'src/app/services/analyse.service';
import { BonReceptionService } from 'src/app/services/bon-reception.service';
import { CamionService } from 'src/app/services/camion.service';
import { CiterneService } from 'src/app/services/citerne.service';

@Component({
  selector: 'app-espace-agent-reception',
  templateUrl: './espace-agent-reception.component.html',
  styleUrls: ['./espace-agent-reception.component.css'],
})
export class EspaceAgentReceptionComponent implements OnInit {
  numberCamion: number = 0;
  numberCiterne: number = 0;
  numberBonVidage: number = 0;
  numberBonReception: number = 0;
  decision: string = 'Accepte';

  listCamion: any[] = [];
  listCiterne: any[] = [];
  listBonVidage: any[] = [];
  listBonReception: any[] = [];
  constructor(
    private camionservice: CamionService,
    private analyseservice: AnalyseService,
    private CiterneService: CiterneService,  private bonRservice: BonReceptionService,
  ) {}

  ngOnInit(): void {
    this.numberCamions();
    this.numberCiternes();
    this.numberBonAnalyses();
    this.numberBonReceptions();
  }
  numberBonReceptions() {
    this.bonRservice.getAllBonReception().subscribe((result) => {
      this.listBonReception = result;
      this.numberBonReception = this.listBonReception.length;
    });
  }
  numberBonAnalyses() {
    this.analyseservice.getAnalyse(this.decision).subscribe((result) => {
      this.listBonVidage = result;
      this.numberBonVidage = this.listBonVidage.length;
    });
  }
  numberCamions() {
    this.camionservice.getAllCamion().subscribe((result) => {
      this.listCamion = result;
      this.numberCamion = this.listCamion.length;
    });
  }
  numberCiternes() {
    this.CiterneService.getAllCiterne().subscribe((result) => {
      this.listCiterne = result;
      this.numberCiterne = this.listCiterne.length;
    });
  }
}

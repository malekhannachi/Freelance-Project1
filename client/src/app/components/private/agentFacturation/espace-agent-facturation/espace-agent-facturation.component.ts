import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-espace-agent-facturation',
  templateUrl: './espace-agent-facturation.component.html',
  styleUrls: ['./espace-agent-facturation.component.css']
})
export class EspaceAgentFacturationComponent implements OnInit {
  nbrFacture:number=0
  FactureList:any=[];
  constructor(private factureService:FactureService,) { }

  ngOnInit(): void {
    this.factureService.getAllFacture().subscribe((result) => {
      this.FactureList = result;
      console.log(this.FactureList);
      this.nbrFacture=this.FactureList.length
    });
  }

}

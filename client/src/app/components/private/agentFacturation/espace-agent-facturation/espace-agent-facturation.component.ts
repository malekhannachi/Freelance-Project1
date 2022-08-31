import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-agent-facturation',
  templateUrl: './espace-agent-facturation.component.html',
  styleUrls: ['./espace-agent-facturation.component.css']
})
export class EspaceAgentFacturationComponent implements OnInit {
  nbrFacture:number=0
  constructor() { }

  ngOnInit(): void {
  }

}

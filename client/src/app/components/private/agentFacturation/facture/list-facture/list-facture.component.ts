import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css'],
})
export class ListFactureComponent implements OnInit {
  FactureList: any = [];
  constructor(private factureService:FactureService,private toast:NgToastService) {}

  ngOnInit(): void {
    this.factureService.getAllFacture().subscribe((result) => {
      this.FactureList = result;
      console.log(this.FactureList);
    });
  }

  deleteFacture(facture: any) {

    if (confirm('Voulez vous supprimer cette Facture ?')) {
      this.factureService.deleteFacture(facture._id).subscribe((res: any) => {
        console.log(res);
        let index = this.FactureList.indexOf(facture);
        this.FactureList.splice(index, 1);

        this.toast.error({
          detail: ' Message',
          summary: 'Facture est Supprimé',
          duration: 2000,
        });
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BonReceptionService } from 'src/app/services/bon-reception.service';
import { CiterneService } from 'src/app/services/citerne.service';

@Component({
  selector: 'app-list-bon-reception',
  templateUrl: './list-bon-reception.component.html',
  styleUrls: ['./list-bon-reception.component.css'],
})
export class ListBonReceptionComponent implements OnInit {
  bonReceptionList: any[] = [];
  constructor(
    private bonRservice: BonReceptionService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.bonRservice.getAllBonReception().subscribe((result) => {
      this.bonReceptionList = result;
      console.log(result);
      
    });
  }
  deleteBonReception(bonReception: any) {
    if (confirm('Voulez vous supprimer cette bon Reception ?')) {
      this.bonRservice
        .deleteBonReception(bonReception._id)
        .subscribe((res: Data) => {
          console.log(res);
          let index = this.bonReceptionList.indexOf(bonReception);
          this.bonReceptionList.splice(index, 1);
          this.toast.error({
            detail: ' Message',
            summary: 'bon Reception est Supprimé',
            duration: 2000,
          });
        });
    }
  }
}

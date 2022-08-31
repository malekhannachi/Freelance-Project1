import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AnalyseService } from 'src/app/services/analyse.service';

@Component({
  selector: 'app-list-anylse',
  templateUrl: './list-anylse.component.html',
  styleUrls: ['./list-anylse.component.css'],
})
export class ListAnylseComponent implements OnInit {
  anaylseList: any[] = [];
  constructor(private as: AnalyseService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.as.getAllAnalyse().subscribe((result) => {
      this.anaylseList = result;
      console.log(this.anaylseList);
    });
  }
  deleteAnalyse(analyse: any) {
    if (confirm('Voulez vous supprimer cette Analyse ?')) {
      this.as.deleteAnalyse(analyse._id).subscribe((res: any) => {
        console.log(res);
        let index = this.anaylseList.indexOf(analyse);
        this.anaylseList.splice(index, 1);

        this.toast.error({
          detail: ' Message',
          summary: 'Analyse est Supprimé',
          duration: 2000,
        });
      });
    }
  }
}

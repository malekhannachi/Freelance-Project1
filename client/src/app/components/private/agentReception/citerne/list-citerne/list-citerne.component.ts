import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CiterneService } from 'src/app/services/citerne.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-citerne',
  templateUrl: './list-citerne.component.html',
  styleUrls: ['./list-citerne.component.css'],
})
export class ListCiterneComponent implements OnInit {
  citerneList: any[] = [];
  constructor(private cs: CiterneService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.cs.getAllCiterne().subscribe((result) => {
      this.citerneList = result;
    });
  }
  deleteCiterne(citerne: any) {
    if (confirm('Voulez vous supprimer cette Citerne ?')) {
      this.cs.deleteCiterne(citerne._id).subscribe((res: Data) => {
        console.log(res);
        let index = this.citerneList.indexOf(citerne);
        this.citerneList.splice(index, 1);
        this.toast.error({
          detail: ' Message',
          summary: 'Citerne est Supprimé',
          duration: 2000,
        });
      });
    }
  }
}

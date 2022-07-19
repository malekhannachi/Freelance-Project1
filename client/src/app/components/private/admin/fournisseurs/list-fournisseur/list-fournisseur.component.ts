import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css'],
})
export class ListFournisseurComponent implements OnInit {
  fourniList: any[] = [];
  constructor(private router: Router, private fs: FournisseurService,private toast:NgToastService) {}

  ngOnInit(): void {
    this.fs.getAllFournisseur().subscribe((result) => {
      console.log(result);

      this.fourniList = result;
    });
  }
  deleteFourni(user: any) {
    if (confirm('Voulez vous supprimer cet Fournisseur ?')) {
      this.fs.deleteFournisseur(user._id).subscribe(
        (res) => {
          console.log(res);
          let index = this.fourniList.indexOf(user);
          this.fourniList.splice(index, 1);
          this.toast.error({
            detail: ' Message',
            summary: 'Fournisseur est Supprimé',
            duration: 2000,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}

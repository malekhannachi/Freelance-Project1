import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CamionService } from 'src/app/services/camion.service';



@Component({
  selector: 'app-list-camion',
  templateUrl: './list-camion.component.html',
  styleUrls: ['./list-camion.component.css'],
})
export class ListCamionComponent implements OnInit {
  camionList: any[] = [];
  camion: any = [];

  constructor(private router: Router, private fc: CamionService,private toast:NgToastService) {

    
  }


 

openSuccess(){
  this.toast.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr'})
  }
 

  ngOnInit(): void {
    this.fc.getAllCamion().subscribe((result) => {
      this.camionList = result;
      console.log(result);
      console.log(this.camionList);
    });
  }

  deleteCamion(camion: any) {
    this.fc.deleteCamion(camion._id).subscribe(
      (res) => {
        console.log(res);
        let index = this.camionList.indexOf(camion);
        this.camionList.splice(index, 1);
        this.toast.error({
          detail: ' Message',
          summary: 'Camion est Supprimé',
          duration: 2000,
        });
       
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOneCamion(camion: any) {
    this.fc.getbyId(camion._id).subscribe((result) => {
      this.camion=result
    console.log(this.camion);
    
    });
  }

  addDate(camion: any) {
    this.fc.enterCamion(camion._id).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
        this.toast.success({
          detail: ' Message',
          summary: 'Date est Ajouté',
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

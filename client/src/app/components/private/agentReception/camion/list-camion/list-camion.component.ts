import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CamionService } from 'src/app/services/camion.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-camion',
  templateUrl: './list-camion.component.html',
  styleUrls: ['./list-camion.component.css']
})
export class ListCamionComponent implements OnInit {

  camionList: any[] = [];
  constructor(private router: Router, private fc: CamionService) {}

  ngOnInit(): void {this.fc.getAllCamion().subscribe(result=>{
    this.camionList=result
    console.log(result);
    
  })
 }
    
  
 deleteCamion(camion: any) {
  this.fc.deleteCamion(camion._id).subscribe(
    (res) => {
      console.log(res);
      let index = this.camionList.indexOf(camion);
      this.camionList.splice(index, 1);
    },
    (err) => {
      console.log(err);
    }
  );
    
  
  }

  addDate(camion: any){
    this.fc.enterCamion(camion._id).subscribe(
      (res) => {
        console.log(res);
      
      },
      (err) => {
        console.log(err);
      }
    );

  }
}

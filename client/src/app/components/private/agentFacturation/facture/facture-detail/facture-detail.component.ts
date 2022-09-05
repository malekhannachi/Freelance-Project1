import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';
@Component({
  selector: 'app-facture-detail',
  templateUrl: './facture-detail.component.html',
  styleUrls: ['./facture-detail.component.css']
})
export class FactureDetailComponent implements OnInit {
  facture:any=[]
  id:any
  constructor(   private FactureService: FactureService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    let idFacture = this.route.snapshot.params['id'];
    this.id = idFacture;

    this.FactureService.getbyId(idFacture).subscribe((result) => {
      this.facture = result;
      console.log(this.facture);
      
    });
  }

}

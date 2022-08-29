import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BonReception } from 'src/app/models/bon-reception';
import { Camion } from 'src/app/models/camion';
import { BonReceptionService } from 'src/app/services/bon-reception.service';
import { CamionService } from 'src/app/services/camion.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-add-bon-reception',
  templateUrl: './add-bon-reception.component.html',
  styleUrls: ['./add-bon-reception.component.css']
})
export class AddBonReceptionComponent implements OnInit {
  FormBon!: FormGroup;
  fourniList: any[] = [];
  camionList:any= [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cs: BonReceptionService,
    private fs: FournisseurService,
    private toast: NgToastService
  ) {
    let formControls = {
      quantite: new FormControl('', [Validators.required]),
      camion: new FormControl('', [Validators.required]),
      fournisseur: new FormControl('', [Validators.required]),
    };
    this.FormBon = this.fb.group(formControls);
  }

  get quantite() {
    return this.FormBon.get('quantite');
  }
  get camion() {
    return this.FormBon.get('camion');
  }
  get fournisseur() {
    return this.FormBon.get('fournisseur');
  }

  ngOnInit(): void {
    this.fs.getAllFournisseur().subscribe((result) => {
      console.log(result);

      this.fourniList = result;
    });
  }

  addBon() {
    let data = this.FormBon.value;
    console.log(data);

    let bon = new BonReception(
      undefined,
      data.fournisseur,
      data.camion,
      data.quantite
    );
    console.log(bon);

    if (this.FormBon.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.cs.addBonReception(bon).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/list-bon-reception']);
        this.toast.success({
          detail: ' Message',
          summary: 'Bon Reception est Ajouté',
          duration: 3000,
        });
      });
    }
  }


  filterByFourn(event: any) {
    let value = event.target.value;
    console.log(value);
    this.getCamionsFounisseur(value);
  }

  getCamionsFounisseur(id: any) {
    this.fs.getCamionByFounisseur(id).subscribe((res) => {
      this.camionList = res;
      console.log(this.camionList);
    });
  }

}

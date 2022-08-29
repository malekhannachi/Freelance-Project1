import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BonReception } from 'src/app/models/bon-reception';
import { BonReceptionService } from 'src/app/services/bon-reception.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-bon-reception',
  templateUrl: './update-bon-reception.component.html',
  styleUrls: ['./update-bon-reception.component.css'],
})
export class UpdateBonReceptionComponent implements OnInit {
  FormBon!: FormGroup;
  fourniList: any[] = [];
  camionList: any = [];
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
      this.fourniList = result;
    });

    let idBon = this.route.snapshot.params['id'];
    this.id = idBon;
    console.log(this.id);

    this.cs.getbyId(idBon).subscribe((result) => {
      let bon = result;
      console.log(bon);
      this.FormBon.patchValue({
        quantite: bon.quantite,
        fournisseur: bon.fournisseur,
        camion: bon.camion,
      });
    });
  }

  UpdateBon() {
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
      this.cs.updateBonReception(this.id,bon).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/list-bon-reception']);
        this.toast.warning({
          detail: ' Message',
          summary: 'Bon Reception est Modifiée',
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

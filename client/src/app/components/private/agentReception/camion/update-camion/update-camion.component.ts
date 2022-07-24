import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Camion } from 'src/app/models/camion';
import { CamionService } from 'src/app/services/camion.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-camion',
  templateUrl: './update-camion.component.html',
  styleUrls: ['./update-camion.component.css'],
})
export class UpdateCamionComponent implements OnInit {
  FormCamion!: FormGroup;
  fourniList: any[] = [];
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cs: CamionService,
    private fs: FournisseurService,
    private toast: NgToastService
  ) {
    let formControls = {
      matricule: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      fournisseur: new FormControl('', [Validators.required]),
    };
    this.FormCamion = this.fb.group(formControls);
  }

  get matricule() {
    return this.FormCamion.get('matricule');
  }
  get type() {
    return this.FormCamion.get('type');
  }
  get fournisseur() {
    return this.FormCamion.get('fournisseur');
  }

  ngOnInit(): void {
    this.fs.getAllFournisseur().subscribe((result) => {
      console.log(result);

      this.fourniList = result;
    });
    this.getOneCamion();
  }

  getOneCamion() {
    let idCamion = this.route.snapshot.params['id'];
    this.id = idCamion;
    console.log(idCamion);

    this.cs.getbyId(idCamion).subscribe((result) => {
      let camion = result;
      console.log(camion);
      this.FormCamion.patchValue({
        matricule: camion.matricule,
        type: camion.typeCamion,

        fournisseur: camion.fournisseur,
      });
    });
  }

  updateCamion() {
    let data = this.FormCamion.value;
    console.log(data);

    let camion = new Camion(
      undefined,
      data.matricule,
      data.type,
      data.fournisseur
    );
    console.log(camion);

    if (this.FormCamion.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.cs.updateCamion(this.id, camion).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/list-camion']);
        this.toast.warning({
          detail: ' Message',
          summary: 'Date est modifié',
          duration: 3000,
        });
      });
    }
  }
}

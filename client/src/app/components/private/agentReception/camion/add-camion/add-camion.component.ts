import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Camion } from 'src/app/models/camion';
import { CamionService } from 'src/app/services/camion.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-add-camion',
  templateUrl: './add-camion.component.html',
  styleUrls: ['./add-camion.component.css'],
})
export class AddCamionComponent implements OnInit {
  FormCamion!: FormGroup;
  fourniList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
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
  }

  addCamion() {
    let data = this.FormCamion.value;
    console.log(data);

    let user = new Camion(
      undefined,
      data.matricule,
      data.type,
      data.fournisseur
    );
    console.log(user);

    if (this.FormCamion.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.cs.addCamion(user).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/list-camion']);
        this.toast.success({
          detail: ' Message',
          summary: 'Camion est Ajouté',
          duration: 3000,
        });
      });
    }
  }
}

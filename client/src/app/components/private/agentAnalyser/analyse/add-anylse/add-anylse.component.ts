import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Analyse } from 'src/app/models/analyse';
import { AnalyseService } from 'src/app/services/analyse.service';
import { CamionService } from 'src/app/services/camion.service';
import { CiterneService } from 'src/app/services/citerne.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-add-anylse',
  templateUrl: './add-anylse.component.html',
  styleUrls: ['./add-anylse.component.css'],
})
export class AddAnylseComponent implements OnInit {
  AnalyseForm!: FormGroup;
  camionList: any = [];
  fourniList: any[] = [];
  citerneList: any = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cs: CamionService,
    private fs: FournisseurService,
    private citerneService: CiterneService,
    private analyseSerive: AnalyseService,
    private toast: NgToastService
  ) {
    this.AnalyseForm = this.fb.group({
      citerne: new FormControl('', [Validators.required]),
      camion: new FormControl('', [Validators.required]),
      fournisseur: new FormControl('', [Validators.required]),
      temperature: new FormControl('', [Validators.required]),
      densite: new FormControl('', [Validators.required]),
      matiereGrasse: new FormControl('', [Validators.required]),
      ESD: new FormControl('', [Validators.required]),
      congelation: new FormControl('', [Validators.required]),
      pourcentageEau: new FormControl('', [Validators.required]),
      acidite: new FormControl('', [Validators.required]),
      PH: new FormControl('', [Validators.required]),
      alcool: new FormControl('', [Validators.required]),
      formol: new FormControl('', [Validators.required]),
      testAmidon: new FormControl('', [Validators.required]),
      antibiotique: new FormControl('', [Validators.required]),
      gout: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllFourni();
  }
  getAllCiterne() {
    this.citerneService.getAllCiterne().subscribe((result) => {
      console.log(result);

      this.citerneList = result;
    });
  }

  getAllFourni() {
    this.fs.getAllFournisseur().subscribe((result) => {
      console.log(result);

      this.fourniList = result;
    });
  }

  /*
     temperature,
      densite,
      matiereGrasse,
      ESD,
      congelation ,
      pourcentageEau,
      acidite ,
      PH ,
     alcool,
     formol,
      testAmidon,
      antibiotique,
      fournisseur,
     camion,
     citerne

*/

  addAnalyse() {
    let data = this.AnalyseForm.value;
    console.log(this.AnalyseForm);
    console.log(data);

    let analyse = new Analyse(
      undefined,
      data.temperature,
      data.densite,
      data.matiereGrasse,
      data.ESD,
      data.congelation,
      data.pourcentageEau,
      data.acidite,
      data.PH,
      data.alcool,
      data.formol,
      data.testAmidon,
      data.antibiotique,
      data.gout,
      data.fournisseur,
      data.camion,
      data.citerne
    );
    console.log(analyse);

    if (this.AnalyseForm.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.analyseSerive.addAnalyse(analyse).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/list-analyse']);
        this.toast.success({
          detail: ' Message',
          summary: 'Analyse est Ajouté',
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

  filterByCamion(event: any) {
    let value = event.target.value;
    console.log(value);
    this.getCiternesCamions(value);
  }

  getCamionsFounisseur(id: any) {
    this.fs.getCamionByFounisseur(id).subscribe((res) => {
      this.camionList = res;
      console.log(this.camionList);
    });
  }

  getCiternesCamions(id: any) {
    this.cs.getbyId(id).subscribe((res) => {
      this.citerneList = res;
      console.log(this.citerneList);
    });
  }
}

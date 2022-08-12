import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Analyse } from 'src/app/models/analyse';
import { AnalyseService } from 'src/app/services/analyse.service';
import { CamionService } from 'src/app/services/camion.service';
import { CiterneService } from 'src/app/services/citerne.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-anylse',
  templateUrl: './update-anylse.component.html',
  styleUrls: ['./update-anylse.component.css'],
})
export class UpdateAnylseComponent implements OnInit {
  AnalyseForm!: FormGroup;
  camionList: any[] = [];
  fourniList: any[] = [];
  citerneList: any[] = [];
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cs: CamionService,
    private fs: FournisseurService,
    private citerneService: CiterneService,
    private analyseSerive: AnalyseService,
    private toast: NgToastService
  ) {
    let formControls = {
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
    };
    this.AnalyseForm = this.fb.group(formControls);
  }

  ngOnInit(): void {
    this.getDataAnalyse();
    this.getAllCamion();
    this.getAllFourni();
    this.getAllCiterne();
  }
  getDataAnalyse() {
    let idAnalyse = this.route.snapshot.params['id'];
    this.id = idAnalyse;
    console.log(this.id);
    console.log(idAnalyse);

    this.analyseSerive.getbyId(idAnalyse).subscribe((result) => {
      let data = result;
      console.log(data);
      this.AnalyseForm.patchValue({
        temperature: data.temperature,
        densite: data.densite,
        matiereGrasse: data.matiereGrasse,
        ESD: data.ESD,
        congelation: data.congelation,
        pourcentageEau: data.pourcentageEau,
        acidite: data.acidite,
        PH: data.PH,
        alcool: data.alcool,
        formol: data.formol,
        testAmidon: data.testAmidon,
        antibiotique: data.antibiotique,
        gout: data.GoutEtOdeur,
        fournisseur: data.fournisseur,
        camion: data.camion,
        citerne: data.citerne,
      });
    });
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

  getAllCamion() {
    this.cs.getAllCamion().subscribe((result) => {
      console.log(result);

      this.camionList = result;
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

  updateAnalyse() {
    let data = this.AnalyseForm.value;
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

    this.analyseSerive.updateAnalyse(this.id, analyse).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-analyse']);
      this.toast.warning({
        detail: ' Message',
        summary: 'Analyse est Modifié',
        duration: 3000,
      });
    });
  }
}

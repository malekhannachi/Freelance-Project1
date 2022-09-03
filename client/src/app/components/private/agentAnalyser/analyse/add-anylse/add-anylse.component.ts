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
import { ParametreService } from 'src/app/services/parametre.service';

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
  paramterList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cs: CamionService,
    private fs: FournisseurService,
    private citerneService: CiterneService,
    private analyseSerive: AnalyseService,
    private parametreService: ParametreService,
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
      items: this.fb.array([
        this.fb.group({
          row: new FormControl('', [Validators.required]),
        }),
      ]),
    });
  }
  get items(): FormArray {
    return <FormArray>this.AnalyseForm.get('items');
  }
  ngOnInit(): void {
    this.getAllFourni();

    this.getAllParameter();
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
    console.log(data);
    console.log(this.AnalyseForm);

    // let analyse = new Analyse(
    //   undefined,
    //   data.temperature,
    //   data.densite,
    //   data.matiereGrasse,
    //   data.ESD,
    //   data.congelation,
    //   data.pourcentageEau,
    //   data.acidite,
    //   data.PH,
    //   data.alcool,
    //   data.formol,
    //   data.testAmidon,
    //   data.antibiotique,
    //   data.gout,
    //   data.fournisseur,
    //   data.camion,
    //   data.citerne,
    // );
    // console.log(analyse);

    // if (this.AnalyseForm.invalid) {
    //   this.toast.info({
    //     detail: 'Information',
    //     summary: 'Remplir votre champs',
    //     duration: 2000,
    //   });
    // } else {
    //   this.analyseSerive.addAnalyse(analyse).subscribe((res) => {
    //     console.log(res);

    //     this.router.navigate(['/list-analyse']);
    //     this.toast.success({
    //       detail: ' Message',
    //       summary: 'Analyse est Ajouté',
    //       duration: 3000,
    //     });
    //   });
    // }
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

  getAllParameter() {
    this.parametreService.getAllParametre().subscribe((result) => {
      this.paramterList = result;
      console.log(this.paramterList);
    });
  }
}

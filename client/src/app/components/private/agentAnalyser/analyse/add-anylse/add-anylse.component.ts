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
  camionList: any[] = [];
  fourniList: any[] = [];
  citerneList: any[] = [];
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

  addrow() {
    const control = <FormArray>this.AnalyseForm.controls['items'];
    control.push(new FormGroup({ row: new FormControl('') }));
  }
  removeContact(index: any) {
    const control = <FormArray>this.AnalyseForm.controls['items'];
    control.removeAt(index);
  }
  ngOnInit(): void {
    this.getAllCamion();
    this.getAllFourni();
    this.getAllCiterne();
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
}

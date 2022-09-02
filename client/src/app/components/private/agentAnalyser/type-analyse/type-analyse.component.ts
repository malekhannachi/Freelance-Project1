import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Parametre } from 'src/app/models/parametre';
import { ParametreService } from 'src/app/services/parametre.service';

@Component({
  selector: 'app-type-analyse',
  templateUrl: './type-analyse.component.html',
  styleUrls: ['./type-analyse.component.css'],
})
export class TypeAnalyseComponent implements OnInit {
  paramterList: any[] = [];
  FormPameter!: FormGroup;
  id: any;
  constructor(
    private parametreService: ParametreService,
    private toast: NgToastService,
    private fb: FormBuilder,
    private router: Router
  ) {
    let formControls = {
      paramter: new FormControl('', [Validators.required]),
      limite: new FormControl('', [Validators.required]),
    };
    this.FormPameter = this.fb.group(formControls);
  }

  ngOnInit(): void {
    this.getAll()

    this.parametreService.refreshRequired.subscribe((r) => {
      this.getAll()
    });
  }

getAll(){
  this.parametreService.getAllParametre().subscribe((result) => {
    this.paramterList = result;
    console.log(this.paramterList);
  });
}

  getone(item: any) {
    console.log(item);
    this.id = item._id;
    console.log(this.id);

    this.FormPameter.patchValue({
      paramter: item.parametres,
      limite: item.limitesDacceptation,
    });
  }

  deleteParemter(parameter: any) {
    if (confirm('Voulez vous supprimer cette Parametre ?')) {
      this.parametreService
        .deleteParametre(parameter._id)
        .subscribe((res: any) => {
          console.log(res);
          let index = this.paramterList.indexOf(parameter);
          this.paramterList.splice(index, 1);

          this.toast.error({
            detail: ' Message',
            summary: 'Parametre est Supprimé',
            duration: 2000,
          });
        });
    }
  }

  addPameter() {
    let data = this.FormPameter.value;
    console.log(data);

    let parametre = new Parametre(undefined, data.paramter, data.limite);
    console.log(parametre);
    if (this.FormPameter.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.parametreService.addParametre(parametre).subscribe((res) => {
        console.log(res);

        this.toast.success({
          detail: ' Message',
          summary: 'Parametre est Ajoutée',
          duration: 2000,
        });
      });
    }
  }
  updatePameter() {
    let data = this.FormPameter.value;
    console.log(data);

    let parametre = new Parametre(undefined, data.paramter, data.limite);
    console.log(parametre);
    if (this.FormPameter.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.parametreService
        .updateParametre(this.id, parametre)
        .subscribe((res) => {
        

          this.toast.warning({
            detail: ' Information',
            summary: 'Parametre est Modifiée',
            duration: 3000,
          });
        });
    }
  }
}

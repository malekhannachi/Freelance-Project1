import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ParametreService } from 'src/app/services/parametre.service';

@Component({
  selector: 'app-type-analyse',
  templateUrl: './type-analyse.component.html',
  styleUrls: ['./type-analyse.component.css'],
})
export class TypeAnalyseComponent implements OnInit {
  paramterList: any[] = [];
  FormPameter!: FormGroup;
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
    this.parametreService.getAllParametre().subscribe((result) => {
      this.paramterList = result;
      console.log(this.paramterList);
    });
  }
  getone(item:any) {
    console.log(item);
    this.FormPameter.patchValue({
      paramter: item.parametres,
      limite: item.limite,
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

  addPameter() {}
  updatePameter() {}
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { Citerne } from 'src/app/models/citerne';
import { CamionService } from 'src/app/services/camion.service';
import { CiterneService } from 'src/app/services/citerne.service';

@Component({
  selector: 'app-add-citerne',
  templateUrl: './add-citerne.component.html',
  styleUrls: ['./add-citerne.component.css'],
})
export class AddCiterneComponent implements OnInit {
  FormCiterne!: FormGroup;
  camionList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cs: CamionService,
    private citerneService: CiterneService,
    private toast: NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      camion: new FormControl('', [Validators.required]),
    };
    this.FormCiterne = this.fb.group(formControls);
  }

  get nom() {
    return this.FormCiterne.get('nom');
  }
  get camion() {
    return this.FormCiterne.get('camion');
  }

  ngOnInit(): void {
    this.cs.getAllCamion().subscribe((result) => {
      console.log(result);

      this.camionList = result;
    });
  }

  addCiterne() {
    let data = this.FormCiterne.value;
    console.log(data);

    let citerne = new Citerne(undefined, data.nom, data.camion);
    console.log(citerne);
    if (this.FormCiterne.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Remplir votre champs',
        duration: 2000,
      });
    } else {
      this.citerneService.addCiterne(citerne).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/list-citerne']);
        this.toast.success({
          detail: ' Message',
          summary: 'Ceterne est Ajoutée',
          duration: 3000,
        });
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css'],
})
export class AddFournisseurComponent implements OnInit {
  fourForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fs: FournisseurService,
    private toast: NgToastService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl('', [Validators.required]),
      number: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
    };
    this.fourForm = this.fb.group(formControls);
  }

  get firstname() {
    return this.fourForm.get('firstname');
  }
  get lastname() {
    return this.fourForm.get('lastname');
  }
  get role() {
    return this.fourForm.get('role');
  }

  get email() {
    return this.fourForm.get('email');
  }
  get cin() {
    return this.fourForm.get('cin');
  }

  get number() {
    return this.fourForm.get('number');
  }
  get street() {
    return this.fourForm.get('street');
  }

  get city() {
    return this.fourForm.get('city');
  }
  get country() {
    return this.fourForm.get('country');
  }
  get zipCode() {
    return this.fourForm.get('zipCode');
  }

  ngOnInit(): void {}

  addFourni() {
    let data = this.fourForm.value;
    console.log(data);

    let fournisseur = new Fournisseur(
      undefined,
      data.firstname,
      data.lastname,
      data.email,
      data.cin,
      data.number,
      data.street,
      data.city,
      data.country,
      data.zipCode
    );
    console.log(fournisseur);

    if (this.fourForm.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Vérfier votre champs',
        duration: 2000,
      });
    } else {
      this.fs.addFournisseur(fournisseur).subscribe(
        (res) => {
          console.log(res);
          this.toast.success({
            detail: 'Success Message',
            summary: 'Fournisseur est Ajouté',
            duration: 2000,
          });

          this.router.navigate(['/list-fournisseur']);
        },
        (error) => {
          console.log(error);
          this.toast.info({
            detail: 'Information',
            summary: 'Vérfier les donneés',
            duration: 2000,
          });
        }
      );
    }
  }
}

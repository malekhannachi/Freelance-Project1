import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css'],
})
export class UpdateFournisseurComponent implements OnInit {
  fourForm!: FormGroup;
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private fs: FournisseurService,
    private toast: NgToastService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
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

  ngOnInit(): void {
    let idUser = this.route.snapshot.params['id'];
    this.id = idUser;
    console.log(this.id);
    console.log(idUser);

    this.fs.getbyId(idUser).subscribe((result) => {
      let user = result;
      console.log(user);
      this.fourForm.patchValue({
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        cin: user.cin,
        number: user.number,
        street: user.address.street,
        city: user.address.city,
        country: user.address.country,
        zipCode: user.address.zipCode,
      });
    });
  }

  updateFourni() {
    let data = this.fourForm.value;
    console.log(data);

    let fournisseur = new Fournisseur(
      this.id,
      data.firstname,
      data.lastname,
      data.email,
      data.cin,
      data.number,
      data.street,
      data.city,
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
      this.fs.updateFournisseur(this.id, fournisseur).subscribe(
        (res) => {
          console.log(res);

          this.router.navigate(['/list-fournisseur']);
          this.toast.warning({
            detail: ' Message',
            summary: 'Fournisseur est Modifié',
            duration: 2000,
          });
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

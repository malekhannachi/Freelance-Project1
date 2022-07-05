import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private fs: FournisseurService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
    };
    this.fourForm = this.fb.group(formControls);
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

    this.fs.addFournisseur(fournisseur).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-fournisseur']);
    });
  }
}

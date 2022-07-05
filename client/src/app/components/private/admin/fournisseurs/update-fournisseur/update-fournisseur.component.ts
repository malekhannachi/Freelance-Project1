import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {
  fourForm!: FormGroup;
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
        zipCode:user.address.zipCode,
       
      });
    });


  }

  updateFourni() {
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
      data.zipCode
    );
    console.log(fournisseur);

    this.fs.addFournisseur(fournisseur).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-fournisseur']);
    });
  }
}

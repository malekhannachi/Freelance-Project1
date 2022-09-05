import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Facture } from 'src/app/models/facture';
import { FactureService } from 'src/app/services/facture.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';


@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css'],
})
export class AddFactureComponent implements OnInit {
  factureForm!: FormGroup;
  fourniList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FactureService: FactureService,
    private toast: NgToastService,
    private fs: FournisseurService
  ) {
    let formControls = {
      milkQuantity: new FormControl('', [Validators.required]),
      literPrice: new FormControl('', [Validators.required]),
      fournisseur: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      ref: new FormControl('', [Validators.required]),
    };
    this.factureForm = this.fb.group(formControls);
  }

  get milkQuantity() {
    return this.factureForm.get('milkQuantity');
  }

  get literPrice() {
    return this.factureForm.get('literPrice');
  }
  get fournisseur() {
    return this.factureForm.get('fournisseur');
  }
  get startDate() {
    return this.factureForm.get('startDate');
  }

  get endDate() {
    return this.factureForm.get('endDate');
  }
  get ref() {
    return this.factureForm.get('ref');
  }

  ngOnInit(): void {
    this.fs.getAllFournisseur().subscribe((result) => {
      this.fourniList = result;
    });

    
  }

  addFacture() {
    let data = this.factureForm.value;
    console.log(data);

    let facture = new Facture(
      undefined,
      data.milkQuantity,
      data.literPrice,
      data.fournisseur,
      data.endDate,
      data.startDate,
      data.ref
    );
    console.log(facture);

    this.FactureService.addFacture(facture).subscribe((res) => {
      console.log(res);
      this.toast.success({
        detail: 'Success Message',
        summary: 'facture est Ajouté',
        duration: 2000,
      });

      this.router.navigate(['/list-facture']);
    });
  }

  filterByFourn(event: any) {
    let value = event.target.value;
    console.log(value);
    this.getOneFounisseur(value)
  }

  getOneFounisseur(id: any) {
    this.fs.getCamionByFounisseur(id).subscribe((res) => {
      let f = res;

      this.factureForm.patchValue({
        literPrice: f.milkPrice,
       
     
      });
    });

  
  }
}

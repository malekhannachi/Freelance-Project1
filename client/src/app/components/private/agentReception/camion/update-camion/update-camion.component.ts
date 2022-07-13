import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camion } from 'src/app/models/camion';
import { CamionService } from 'src/app/services/camion.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-camion',
  templateUrl: './update-camion.component.html',
  styleUrls: ['./update-camion.component.css']
})
export class UpdateCamionComponent implements OnInit {
  FormCamion!: FormGroup;
  fourniList: any[] = [];
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cs: CamionService,
    private fs: FournisseurService
  ) {
    let formControls = {
      matricule: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      fournisseur: new FormControl('', [Validators.required, Validators.email]),
    };
    this.FormCamion = this.fb.group(formControls);
  }

  ngOnInit(): void {
    this.fs.getAllFournisseur().subscribe((result) => {
      console.log(result);

      this.fourniList = result;
    });
    this.getOneCamion()
  }

  getOneCamion(){
    let idCamion = this.route.snapshot.params['id'];
    this.id = idCamion;
    console.log(idCamion);

    this.cs.getbyId(idCamion).subscribe((result) => {
      let camion = result;
      console.log(camion);
      this.FormCamion.patchValue({
        matricule: camion.matricule,
        type: camion.typeCamion,
     
      
       
      });
    });
  }

  updateCamion() {
    let data = this.FormCamion.value;
    console.log(data);

    let camion = new Camion(
      undefined,
      data.matricule,
      data.type,
      data.fournisseur
    );
    console.log(camion);

    this.cs.updateCamion(this.id,camion).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-camion']);
    });
  }

}

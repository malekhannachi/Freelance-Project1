import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Citerne } from 'src/app/models/citerne';
import { CamionService } from 'src/app/services/camion.service';
import { CiterneService } from 'src/app/services/citerne.service';

@Component({
  selector: 'app-update-citerne',
  templateUrl: './update-citerne.component.html',
  styleUrls: ['./update-citerne.component.css']
})
export class UpdateCiterneComponent implements OnInit {

  FormCiterne!: FormGroup;
  camionList: any[] = [];
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cs: CamionService,
    private citerneService: CiterneService
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      camion: new FormControl('', [Validators.required]),
     
    };
    this.FormCiterne = this.fb.group(formControls);
  }

  ngOnInit(): void {
    this.cs.getAllCamion().subscribe((result) => {
      console.log(result);

      this.camionList = result;
    });

    let idCiterne = this.route.snapshot.params['id'];
    this.id = idCiterne;
    console.log(this.id);
    console.log(idCiterne);

    this.citerneService.getbyId(idCiterne).subscribe((result) => {
      let citerne = result;
      console.log(citerne);
      this.FormCiterne.patchValue({
        nom: citerne.Num_order,
        camion: citerne.camion,
      
       
      });
    });
  }

  updateCiterne() {
    let data = this.FormCiterne.value;
    console.log(data);

    let citerne = new Citerne(
      undefined,
      data.nom,
      data.camion,
    
    );
    console.log(citerne);

    this.citerneService.updateCiterne(this.id ,citerne).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-citerne']);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-camion',
  templateUrl: './add-camion.component.html',
  styleUrls: ['./add-camion.component.css']
})
export class AddCamionComponent implements OnInit {
  userForm!: FormGroup;
  fourniList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,private fs: FournisseurService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    };
    this.userForm = this.fb.group(formControls);
  }

  ngOnInit(): void {
    this.fs.getAllFournisseur().subscribe((result) => {
      console.log(result);

      this.fourniList = result;
    });
  }

  addUser() {
    let data = this.userForm.value;
    console.log(data);

    let user = new User(
      undefined,
      data.firstname,
      data.lastname,
      data.email,
      data.password,
      data.role
    );
    console.log(user);

    this.userService.addUser(user).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-user']);
    });
  }

}

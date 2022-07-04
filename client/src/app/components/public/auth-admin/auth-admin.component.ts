import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css'],
})
export class AuthAdminComponent implements OnInit {
  adminForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {
    let formControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    };
    this.adminForm = this.fb.group(formControls);
  }

  ngOnInit(): void {}

  loginAdmin() {
    let data = this.adminForm.value;
    console.log(data);

    let admin = new Admin(
      undefined,
      undefined,
      undefined,
      data.email,
      data.password
    );
    console.log(admin);

    this.adminService.loginAdmin(admin).subscribe((res) => {
      console.log(res);
      alert('connexion réussie');
      let token = res.token;
      localStorage.setItem('myToken', token);

      this.router.navigate(['/dashboard']);
    });
  }
}

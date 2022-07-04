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
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css'],
})
export class AdminAddComponent implements OnInit {
  adminForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    };
    this.adminForm = this.fb.group(formControls);
  }

  ngOnInit(): void {}

  addAdmin() {
    let data = this.adminForm.value;
    console.log(data);

    let admin = new Admin(
      undefined,
      data.firstname,
      data.lastname,
      data.email,
      data.password
    );
    console.log(admin);

    this.adminService.addAdmin(admin).subscribe((res) => {
      console.log(res);
   

      this.router.navigate(['/admin-list']);
    });
  }
}

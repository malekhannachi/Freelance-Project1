import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: UserService,
    private route: Router,
    private toast: NgToastService
  ) {
    let formControlls = {
      cin: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.loginForm = this.fb.group(formControlls);
  }

  get cin() {
    return this.loginForm.get('cin');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}

  loginStudent() {
    let data = this.loginForm.value;
    console.log(data);
    let student = new User();
    console.log(student);
  }
  
}

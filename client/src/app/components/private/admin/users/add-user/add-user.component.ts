import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toast: NgToastService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      role: new FormControl('', [Validators.required]),
    };
    this.userForm = this.fb.group(formControls);
  }

  get firstname() {
    return this.userForm.get('firstname');
  }
  get lastname() {
    return this.userForm.get('lastname');
  }
  get role() {
    return this.userForm.get('role');
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }

  ngOnInit(): void {}

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
      this.toast.success({
        detail: 'Success Message',
        summary: 'Agent est Ajouté',
        duration: 2000,
      });

      this.router.navigate(['/list-user']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css'],
})
export class UpdateAgentComponent implements OnInit {
  userForm!: FormGroup;

  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
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
    let idUser = this.route.snapshot.params['id'];
    this.id = idUser;
    console.log(this.id);
    console.log(idUser);

    this.userService.getbyId(idUser).subscribe((result) => {
      let user = result;
      console.log(user);
      this.userForm.patchValue({
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
      //  password:user.password,
        role: user.role,
       
      });
    });
  }

  updateUser() {
    let data = this.userForm.value;
    console.log(data);

    let user = new User(
      this.id,
      data.firstname,
      data.lastname,
      data.email,
      data.password,
      data.role
    );
    console.log(user);

    this.userService.updateUser(this.id,user).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/list-user']);
    });
  }
}

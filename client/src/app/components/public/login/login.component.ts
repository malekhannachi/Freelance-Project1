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
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toast: NgToastService
  ) {
    let formControlls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.loginForm = this.fb.group(formControlls);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    let isLoggedInAdmin = this.userService.isLoggedInAdmin();
    let agentAnalyserisLogged = this.userService.isLoggedInAgentAnalyser();
    let agentReceptionisLogged = this.userService.isLoggedInAgentReception();
    let agentFacturationisLogged =
      this.userService.isLoggedInAgentFacturation();
    if (isLoggedInAdmin) {
      this.router.navigate(['/dashboard']);
    } else {
      if (agentAnalyserisLogged) {
        this.router.navigate(['/espace-agentAnalyser']);
      } else {
        if (agentReceptionisLogged) {
          this.router.navigate(['/espace-agentReception']);
        } else {
          if (agentFacturationisLogged) {
            this.router.navigate(['/espace-agentFacturation']);
          }
        }
      }
    }
  }

  loginUser() {
    let data = this.loginForm.value;
    console.log(data);
    let user = new User(
      undefined,
      undefined,
      undefined,
      data.email,
      data.password
    );
    console.log(user);

    // test form vide ou non
    if (data.email == 0 || data.password == 0 || this.loginForm.invalid) {
      this.toast.info({
        detail: 'Information',
        summary: 'Vérfier votre champs',
        duration: 2000,
      });
    } else {
      this.userService.loginUser(user).subscribe(
        (result) => {
          console.log(result);

          this.toast.success({
            detail: 'success message',
            summary: 'connexion réussie',
            duration: 2000,
          });
          let token = result.token;
          localStorage.setItem('myToken', token);

          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(token);
          console.log(decodedToken);

          switch (decodedToken.role) {
            case 'agentAnalyser':
              this.router.navigate(['/espace-agentAnalyser']);
              break;

            case 'agentReception':
              this.router.navigate(['/espace-agentReception']);
              break;

            case 'agentFacturation':
              this.router.navigate(['/espace-agentFacturation']);
              break;

            default:
              this.router.navigate(['/dashboard']);
              break;
          }
        },
        (error) => {
          console.log(error);
          this.toast.info({
            detail: 'Information',
            summary: 'la connexion à échoué, Vérfier les donneés',
            duration: 2000,
          });
        }
      );
    }
  }
}

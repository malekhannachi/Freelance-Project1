import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  UserName: String = '';
  profilAdmin: any;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.profilAdmin = this.userService.saveDataProfil();
    console.log(this.profilAdmin);
    this.UserName = this.profilAdmin.email;
  }

  logout() {
    localStorage.removeItem('myToken');
    this.router.navigate(['/login']);
  }
}

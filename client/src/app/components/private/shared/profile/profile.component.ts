import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserName: String = '';
  profilAdmin: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.profilAdmin = this.userService.saveDataProfil();
    console.log(this.profilAdmin);
    this.UserName = this.profilAdmin.name +' '+ this.profilAdmin.lastName;
  }

}

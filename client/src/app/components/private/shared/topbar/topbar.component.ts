import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  UserName: String = '';
  profilAdmin: any;
  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.profilAdmin = this.adminService.saveDataProfil();
    console.log(this.profilAdmin);
    this.UserName = this.profilAdmin.email;
  }

  logout() {
    localStorage.removeItem('myToken');
    this.router.navigate(['/auth-admin']);
  }
}

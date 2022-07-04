import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  AdminList: any[] = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllAdmin().subscribe((result) => {
      this.AdminList = result;
      console.log(this.AdminList);
    });
  }

  deleteAdmin(admin: any) {
    this.adminService.deleteAdmin(admin._id).subscribe(
      (result) => {
        console.log(result);

        let index = this.AdminList.indexOf(admin);
        this.AdminList.splice(index, 1);
        //   this.toast.error({         detail: ' Message',         summary: 'évenment est Supprimé',      duration: 2000,   });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  userList: any[] = [];
  constructor(
    private router: Router,
    private userService: UserService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((result) => {
      console.table(result);
      this.userList = result;
    });
  }
  deleteUser(user: any) {
    if (confirm('Voulez vous supprimer cet Agent ?')) {
      this.userService.deleteUser(user._id).subscribe(
        (res) => {
          console.log(res);
          let index = this.userList.indexOf(user);
          this.userList.splice(index, 1);
          this.toast.error({
            detail: ' Message',
            summary: 'Agent est Supprimé',
            duration: 2000,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}

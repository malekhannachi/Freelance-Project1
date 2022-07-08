import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-camion',
  templateUrl: './list-camion.component.html',
  styleUrls: ['./list-camion.component.css']
})
export class ListCamionComponent implements OnInit {

  userList: any[] = [];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
  //  this.userService.getAllUser().subscribe((result) => {
  //    this.userList = result;);}
    
  }
  deleteUser(user: any) {
    this.userService.deleteUser(user._id).subscribe(
      (res) => {
        console.log(res);
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

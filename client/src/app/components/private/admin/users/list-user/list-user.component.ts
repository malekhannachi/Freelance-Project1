import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  userList: any[] = [];
  constructor() {}

  ngOnInit(): void {}
  deleteUser(user: any) {}
}

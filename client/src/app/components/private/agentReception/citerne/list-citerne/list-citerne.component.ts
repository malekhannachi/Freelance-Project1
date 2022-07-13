import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { CiterneService } from 'src/app/services/citerne.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-citerne',
  templateUrl: './list-citerne.component.html',
  styleUrls: ['./list-citerne.component.css']
})
export class ListCiterneComponent implements OnInit {
  citerneList: any[] = [];
  constructor(private router: Router, private cs: CiterneService) {}

  ngOnInit(): void {
    this.cs.getAllCiterne().subscribe((result) => {
      this.citerneList = result;
    });
  }
  deleteUser(user: any) {
    this.cs.deleteCiterne(user._id).subscribe(
      (res:Data) => {
        console.log(res);
        let index = this.citerneList.indexOf(user);
        this.citerneList.splice(index, 1);
      },
      (err:Error) => {
        console.log(err);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { AnalyseService } from 'src/app/services/analyse.service';
import { CiterneService } from 'src/app/services/citerne.service';

@Component({
  selector: 'app-list-anylse',
  templateUrl: './list-anylse.component.html',
  styleUrls: ['./list-anylse.component.css']
})
export class ListAnylseComponent implements OnInit {
  anaylseList: any[] = [];
  constructor(private router: Router, private as: AnalyseService) {}

  ngOnInit(): void {
    this.as.getAllAnalyse().subscribe((result) => {
      this.anaylseList = result;
    });
  }
  deleteAnalyse(analyse: any) {
    this.as.deleteAnalyse(analyse._id).subscribe(
      (res:Data) => {
        console.log(res);
        let index = this.anaylseList.indexOf(analyse);
        this.anaylseList.splice(index, 1);
      },
      (err:Error) => {
        console.log(err);
      }
    );
  }

}

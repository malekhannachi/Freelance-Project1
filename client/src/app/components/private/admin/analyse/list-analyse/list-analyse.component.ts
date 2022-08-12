import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { AnalyseService } from 'src/app/services/analyse.service';

@Component({
  selector: 'app-list-analyse',
  templateUrl: './list-analyse.component.html',
  styleUrls: ['./list-analyse.component.css'],
})
export class ListAnalyseComponent implements OnInit {
  anaylseList: any[] = [];
  constructor(private router: Router, private as: AnalyseService) {}

  ngOnInit(): void {
    this.as.getAllAnalyse().subscribe((result) => {
      this.anaylseList = result;
    });
  }
  deleteAnaylse(analyse: any) {
    this.as.deleteAnalyse(analyse._id).subscribe(
      (res: Data) => {
        console.log(res);
        console.table(res);
        let index = this.anaylseList.indexOf(analyse);
        this.anaylseList.splice(index, 1);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}

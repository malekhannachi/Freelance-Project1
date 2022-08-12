import { Component, OnInit } from '@angular/core';
import { AnalyseService } from 'src/app/services/analyse.service';

@Component({
  selector: 'app-bon-analyse',
  templateUrl: './bon-analyse.component.html',
  styleUrls: ['./bon-analyse.component.css']
})
export class BonAnalyseComponent implements OnInit {
  anaylseList: any[] = [];
 
  constructor(private as: AnalyseService) {}

  ngOnInit(): void {
    this.as.getAllAnalyse().subscribe((result) => {
      this.anaylseList = result;
    });
  }

}

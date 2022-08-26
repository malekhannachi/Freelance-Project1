import { Component, OnInit } from '@angular/core';
import { AnalyseService } from 'src/app/services/analyse.service';

@Component({
  selector: 'app-bon-vidage',
  templateUrl: './bon-vidage.component.html',
  styleUrls: ['./bon-vidage.component.css'],
})
export class BonVidageComponent implements OnInit {
  anaylseList: any[] = [];
  decision: string = 'Accepte';
  analyse: any = [];
  constructor(private analyseService: AnalyseService) {}

  ngOnInit(): void {
    this.analyseService.getAnalyse(this.decision).subscribe((res) => {
      this.anaylseList = res;
      console.log(res);
    });
  }

  getAnaylyse(analyse: any) {
    this.analyseService.getbyId(analyse._id).subscribe((result) => {
      this.analyse = result;
      console.log(this.analyse);
    });
  }
}

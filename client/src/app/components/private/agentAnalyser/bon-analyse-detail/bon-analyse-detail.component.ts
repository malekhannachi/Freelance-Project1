import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnalyseService } from 'src/app/services/analyse.service';
import { CamionService } from 'src/app/services/camion.service';

@Component({
  selector: 'app-bon-analyse-detail',
  templateUrl: './bon-analyse-detail.component.html',
  styleUrls: ['./bon-analyse-detail.component.css']
})
export class BonAnalyseDetailComponent implements OnInit {

  id: any;
  analyse:any = [];
  constructor(  private router: Router,
    private route: ActivatedRoute,
    private cs: CamionService,
    private analyseService: AnalyseService) { }

  ngOnInit(): void {
    let idAnalyse = this.route.snapshot.params['id'];
    this.id = idAnalyse;
    console.log(idAnalyse);

    this.analyseService.getbyId(idAnalyse).subscribe((result) => {
       this.analyse = result;
      console.log(this.analyse);
     
    });
  }
}

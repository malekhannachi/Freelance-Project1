import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
nb:number=0
  constructor() { }

  ngOnInit(): void {
  }
  incriment(){
    this.nb=this.nb +1
  }

  desincriment(){
    this.nb=this.nb -1
  }
}

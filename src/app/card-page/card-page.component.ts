import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  tvCard1Channels = "178 / 100 HD";
  tvCard1FullPrice = "270 lei lunar";
  tvCard1Price = "200 lei lunar";

  tvCard2Channels = "178 / 100 HD";
  tvCard2FullPrice = "320 lei lunar";
  tvCard2Price = "220 lei lunar";

  changeCard1ValTvPlus(){
    this.tvCard1Channels = "178 / 100 HD";
    this.tvCard1FullPrice = "270 lei lunar";
    this.tvCard1Price = "200 lei lunar";
    document.getElementById("TvCard1PlusBtn")?.classList.add("active");
    document.getElementById("TvCard1ProBtn")?.classList.remove("active");
  }

  changeCard1ValTvPro(){
    this.tvCard1Channels = "199 / 114 HD";
    this.tvCard1FullPrice = "280 lei lunar";
    this.tvCard1Price = "210 lei lunar";
    document.getElementById("TvCard1ProBtn")?.classList.add("active");
    document.getElementById("TvCard1PlusBtn")?.classList.remove("active");
    
  }
  
  changeCard2ValTvPlus(){
    this.tvCard2Channels = "178 / 100 HD";
    this.tvCard2FullPrice = "320 lei lunar";
    this.tvCard2Price = "220 lei lunar";
    document.getElementById("TvCard2PlusBtn")?.classList.add("active");
    document.getElementById("TvCard2ProBtn")?.classList.remove("active");
  }

  changeCard2ValTvPro(){
    this.tvCard2Channels = "199 / 114 HD";
    this.tvCard2FullPrice = "330 lei lunar";
    this.tvCard2Price = "230 lei lunar";
    document.getElementById("TvCard2ProBtn")?.classList.add("active");
    document.getElementById("TvCard2PlusBtn")?.classList.remove("active");
    
  }

}

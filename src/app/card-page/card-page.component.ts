import { Component, OnInit } from '@angular/core';
import { IAbonnement } from './models/card-index';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  
  abonnements: IAbonnement[] = [
    {
      cardTitle: "Internet M + TV",
      cardDescription: "cel mai popular",
      internetSpeed: "500 Mbps",
      speedPercent: 50,
      grids: [
        {
          title: "Plus",
          channelsHd: 100,
          channelsSd: 178,  
          prices: {
            price: 270,
            promotionalPrice: 200
          },
          progressPercentage: 65
        },
        {
          title: "Pro",
          channelsHd: 114,
          channelsSd: 199,
          prices: {
            price: 280,
            promotionalPrice: 210
          },
          progressPercentage: 100
        }
      ],
    },
    {
      cardTitle: "Internet L + TV",
      cardDescription: "cel mai performant",
      internetSpeed: "1 Gbps",
      speedPercent: 100,
      grids: [
        {
          title: "Plus",
          channelsHd: 100,
          channelsSd: 178,
          prices: {
            price: 320,
            promotionalPrice: 220
          },
          progressPercentage: 65,
        },
        {
          title: "Pro",
          channelsHd: 114,
          channelsSd: 199,
          prices: {
            price: 330,
            promotionalPrice: 230
          },
          progressPercentage: 100
        }
      ],
      dark: true
    }
  ];
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

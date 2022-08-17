import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IAbonnementGrid } from '../../models/abonnement';
import { IAbonnement } from '../../models/card-index';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() abonnement: IAbonnement;
  @Input() abonnementGrid: IAbonnementGrid;
  @ViewChild('channels') channels: ElementRef;
  @ViewChild('price') price: ElementRef;
  @ViewChild('promoPrice') promoPrice: ElementRef;
  @ViewChild('progressBar') progress: ElementRef;
  @ViewChild('tvPlusBtn') tvPlus: ElementRef;
  @ViewChild('tvProBtn') tvPro: ElementRef;
  selectedGridprice: IAbonnementGrid; 

  tvPlusGrid(){
    this.channels.nativeElement.innerHTML = this.abonnement.grids[0].channelsSd + " / " + this.abonnement.grids[0].channelsHd + "HD";
    this.price.nativeElement.innerHTML = this.abonnement.grids[0].prices.price + " lei lunar";
    this.promoPrice.nativeElement.innerHTML = this.abonnement.grids[0].prices.promotionalPrice + " lei lunar";
    this.progress.nativeElement.style.width = this.abonnement.grids[0].progressPercentage + "%";
    this.tvPlus.nativeElement.classList.add('active');
    this.tvPro.nativeElement.classList.remove('active');
  }

  tvProGrid(){
    this.channels.nativeElement.innerHTML = this.abonnement.grids[1].channelsSd + " / " + this.abonnement.grids[1].channelsHd + "HD";
    this.price.nativeElement.innerHTML = this.abonnement.grids[1].prices.price + " lei lunar";
    this.promoPrice.nativeElement.innerHTML = this.abonnement.grids[1].prices.promotionalPrice + " lei lunar";
    this.progress.nativeElement.style.width = this.abonnement.grids[1].progressPercentage + "%";
    this.tvPro.nativeElement.classList.add('active');
    this.tvPlus.nativeElement.classList.remove('active');
  }

}

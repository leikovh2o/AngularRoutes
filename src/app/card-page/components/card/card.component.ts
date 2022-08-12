import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IAbonnementGrid } from '../../models/abonnement';
import { IAbonnement } from '../../models/card-index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() abonnement: IAbonnement;
  @ViewChild('tvPlusGrid') tvPlusGrid: ElementRef;
  @ViewChild('tvProGrid') tvProGrid: ElementRef;

  selectedGridprice: IAbonnementGrid;
  
}

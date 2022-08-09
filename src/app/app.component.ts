import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularROUTER';
  
  constructor(private translocoService: TranslocoService) {translocoService.setDefaultLang('en');}
  ngOnInit(): void {
  }
  changeLangRo(){
    this.translocoService.setActiveLang('ro');
  }
  changeLangRu(){
    this.translocoService.setActiveLang('ru');
  }
  changeLangEn(){
    this.translocoService.setActiveLang('en');
  }
}

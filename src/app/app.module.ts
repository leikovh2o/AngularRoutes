import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlRouteComponent } from './htmlroute/html-route.component';
import { JavaRouteComponent } from './javaroute/java-route.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users-table/users.component';
import { CustomTableComponent } from './users-table/components/custom-table/custom-table.component';
import { TranslocoRootModule } from './transloco-root.module';
import { CardPageComponent } from './cards/card-page.component';
import { CardComponent } from './cards/components/card/card.component';
import { ExampleModule } from './example/example.module';
import { PipelinesComponent } from './pipelines/pipelines.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlRouteComponent,
    JavaRouteComponent,
    HomeComponent,
    UsersComponent,
    CustomTableComponent,
    CardComponent,
    CardPageComponent,
    PipelinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    ExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

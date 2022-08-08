import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlRouteComponent } from './html-route/html-route.component';
import { JavaRouteComponent } from './java-route/java-route.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users-page/users.component';
import { CustomTableComponent } from './users-page/components/custom-table/custom-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlRouteComponent,
    JavaRouteComponent,
    HomeComponent,
    UsersComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlRouteComponent } from './html-route/html-route.component';
import { JavaRouteComponent } from './java-route/java-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlRouteComponent,
    JavaRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

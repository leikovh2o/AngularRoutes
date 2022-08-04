import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlRouteComponent } from './html-route/html-route.component';
import { JavaRouteComponent } from './java-route/java-route.component';

const routes: Routes = [
  {
    path: 'htmlRoute',
    component: HtmlRouteComponent
  },
  {
    path: 'javaRoute',
    component: JavaRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

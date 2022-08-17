import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlRouteComponent } from './htmlroute/html-route.component';
import { JavaRouteComponent } from './javaroute/java-route.component';
import { UsersResolver } from './users-table/services/users.resolver';
import { UsersComponent } from './users-table/users.component';
import { CardPageComponent } from './cards/card-page.component';
import { PipelinesComponent } from './pipelines/pipelines.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'htmlRoute',
    component: HtmlRouteComponent
  },
  {
    path: 'javaRoute',
    component: JavaRouteComponent
  },
  {
    path: 'usersTable',
    component: UsersComponent,
    resolve: { message: UsersResolver }
  },
  {
    path: 'cardPage',
    component: CardPageComponent
  },
  {
    path: 'pipesPage',
    component: PipelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlRouteComponent } from './html-route/html-route.component';
import { JavaRouteComponent } from './java-route/java-route.component';
import { UsersResolver } from './users-page/services/users.resolver';
import { UsersComponent } from './users-page/users.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

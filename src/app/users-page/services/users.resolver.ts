import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
  constructor(private newsService: UsersService) {}

  resolve(): Observable<any> {
    return this.newsService.getUsers();
  }
}
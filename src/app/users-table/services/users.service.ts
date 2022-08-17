import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllUsers } from '../models/usersIndex';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<AllUsers[]> {
    const endpoint = 'https://gorest.co.in/public/v2/users';
    return this.http.get<AllUsers[]>(endpoint);
  }
}

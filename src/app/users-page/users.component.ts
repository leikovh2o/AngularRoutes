import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { AllUsers } from './models/usersIndex';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  users: AllUsers[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit():void{
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
}


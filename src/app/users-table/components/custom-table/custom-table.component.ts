import { Component, OnInit, Input, ContentChild, NgModule,TemplateRef } from '@angular/core';
import { AllUsers } from '../../models/usersmodel';

@Component({
  selector: 'user-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {
  @Input() allUsers: AllUsers[] = [];
  @ContentChild('headers') headers: TemplateRef<AllUsers>;
  @ContentChild('rows') rows: TemplateRef<AllUsers>;
}

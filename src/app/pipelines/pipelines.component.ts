import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.css']
})
export class PipelinesComponent implements OnInit {

  public name = "Johnny"
  public message = "This is a component for using pipelines!"
  public person = {
    "firstname": "John",
    "lastname": "Doe"
  }
  public price = 35;

  constructor() { }

  ngOnInit(): void {
  }

}

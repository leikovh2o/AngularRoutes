import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExComponent } from './ex/ex.component';



@NgModule({
  declarations: [
    ExComponent
  ],
  exports: [
    ExComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleModule { }

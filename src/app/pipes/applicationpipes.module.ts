import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnCinePipe } from './en-cine.pipe';



@NgModule({
  declarations: [
    EnCinePipe
  ],
  imports: [
    CommonModule
  ],
  exports: 
  [
    EnCinePipe
  ]
})
export class ApplicationpipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class AngularMaterialModule { }

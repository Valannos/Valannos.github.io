import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class AngularMaterialModule { }

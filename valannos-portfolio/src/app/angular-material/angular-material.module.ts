import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSortModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSortModule
  ]
})
export class AngularMaterialModule { }

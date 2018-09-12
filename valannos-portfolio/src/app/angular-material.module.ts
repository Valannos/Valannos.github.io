import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSortModule,
    MatExpansionModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSortModule,
    MatExpansionModule
  ]
})
export class AngularMaterialModule { }

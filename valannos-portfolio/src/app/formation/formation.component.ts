import { Component, OnInit } from '@angular/core';
import { Grade } from '../model/grade';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  public grades: Grade[] = [];

  constructor() {}

  ngOnInit() {
    this.grades = [
      new Grade(
        'AFPA',
        'Morlaix (France)',
        'Professional Title in Software Development',
        '2017',
        'fas fa-code'
      ),
      new Grade(
        'University of Grenoble',
        'Grenoble (France)',
        'PhD in Organic Chemistry',
        '2011',
        'fa fa-flask'
      ),
      new Grade(
        'University of Grenoble',
        'Grenoble (France)',
        'Ms in Organic Chemistry',
        '2008',
        'fa fa-flask'
      ),
      new Grade(
        'University of Aix-Marseille',
        'Marseille (France)',
        'Bs in Chemistry',
        '2006',
        'fa fa-flask'
      ),
    ];
  }
}

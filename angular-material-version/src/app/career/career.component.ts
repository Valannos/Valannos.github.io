import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {


  public jobs: Job[] = [];

  constructor() { }

  ngOnInit() {

    this.jobs = [
      new Job('Loc@soft',
              'Chantepie (France)',
              'Apprenticeship in IT developpment',
              'Sept. 2017 - Aug. 2018',
              'fas fa-code',
              'https://www.lims.fr/fr/'),
      new Job('Kornog-Computing',
              'Morlaix (France)',
              'Trainee in IT developpment',
              'Mar. 2017 - May 2017',
              'fas fa-code',
              'https://kornog-computing.com/'),
      new Job('Laboratory of Chemistry And Interdisciplinarity',
              'Nantes (France)',
              'Post-doctoral fellow',
              'Fev. 2015 - Fev 2016',
              'fas fa-flask',
              'http://www.sciences.univ-nantes.fr/CEISAM/index.php?lang=EN'),
              new Job('Department of Organic Chemistry',
              'University of Geneva (Geneva, Switzerland)',
              'Post-doctoral fellow',
              'Jan. 2012 - Mar. 2014',
              'fas fa-flask',
              'https://www.unige.ch/sciences/chiorg/'),
              new Job('Department of Molecular Chemistry',
              'University of Grenoble (Grenoble, France)',
              'PhD student',
              'Oct. 2008 - Nov. 2011',
              'fas fa-flask',
              'https://www.unige.ch/sciences/chiorg/'),
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  public projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      new Project(
        'https://github.com/Valannos/PoroMeetLink',
        'PoroMeetLink',
        [
          'devicon-java-plain colored',
          'devicon-angularjs-plain colored',
          'devicon-cucumber-plain colored',
          'devicon-postgresql-plain colored'
        ],
        'Group project for jobs offers website',
        'Using SpringBoot/Angular environnement with Cucumber for fonctionnal tests'
      ),
      new Project(
        'https://github.com/Valannos/MediaPleyber',
        'MediaPleyber',
        [
          'devicon-symfony-original medium',
          'devicon-php-plain colored',
          'devicon-doctrine-plain colored',
          'devicon-javascript-plain colored'
        ],
        'A small project to deal with library reservations, created in an evaluation context',
        'Uses PHP Symfony framework v3.'
      ),
      new Project(
        'https://github.com/Valannos/ToListen-Express.js',
        'ToListen-Express',
        [
          'devicon-nodejs-plain colored medium',
          'devicon-express-original colored medium',
          'devicon-javascript-plain colored',
          ''
        ],
        'A simple applicatioin to store links and files in database',
        'Uses NodeJS with ExpressJS mini-framework '
      ),
      new Project(
        'https://github.com/Valannos/ToListen-Android',
        'ToListen-Android',
        [
          'devicon-android-plain colored medium',
          '',
          '',
          ''
        ],
        'A mobile version of previous application designed for Android.',
        'ToListen-Express project is required as it provides REST APIs.'
      ),
      new Project(
        'https://github.com/Valannos/tolisten-springboot',
        'tolisten-springboot',
        [
          'devicon-java-plain-wordmark colored medium',
          'devicon-angularjs-plain colored medium',
          'devicon-javascript-plain colored',
          ''
        ],
        'A different version of previous project using different environnement',
        'Backend with SpringBoot, frontend employes AngularJS >1.5'
      )
    ];
  }
}

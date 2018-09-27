import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/technology';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent implements OnInit {

  public technologies: Technology[] = [];
  constructor() { }

  ngOnInit() {
    this.technologies = [
      new Technology('Web languages',
        [
          'devicon-html5-plain colored',
          'devicon-css3-plain colored',
          'devicon-bootstrap-plain-wordmark colored'
        ],
        'HTML5/CSS3/Bootstrap 3&4', 70),
        new Technology('Frontend Technologies',
        [
          'devicon-javascript-plain colored',
          'devicon-typescript-plain colored',
          'devicon-angularjs-plain colored'
        ],
        'JavaScript, TypeScript, AngularJS, Angular 6', 60),
        new Technology('NodeJS Technologies',
        [
          'devicon-nodejs-plain colored',
          'devicon-express-original colored',
          ''
        ],
        'Basic knowledges in NodeJS and ExpressJS', 30),
        new Technology('Java Technologies',
        [
          'devicon-java-plain colored',
          'devicon-tomcat-line colored',
          ''
        ],
        'Java 8, Spring (SpringBoot, SpringData, SpringRest, SpringSecurity), Maven, TomCat', 70),
        new Technology('Versionning Technologies',
        [
          'devicon-git-plain colored',
          'devicon-github-plain-wordmark colored',
          'devicon-gitlab-plain-wordmark colored'
        ],
        'Git and common repository environnements', 75),
        new Technology('Database Management Systems',
        [
          'devicon-postgresql-plain colored',
          'devicon-mysql-plain colored',
          ''
        ],
        'MySQL, PostgreSQL', 60),
        new Technology('IDE',
        [
          'devicon-intellij-plain colored',
          'devicon-visualstudio-plain colored',
          ''
        ],
        'IntelliJ, Visual Code, Eclipse', 70)
    ];
  }
}

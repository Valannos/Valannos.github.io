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
        ],
        '', 70),
        new Technology('JavaScript Technologies',
        [
          'devicon-javascript-plain colored',
          'devicon-typescript-plain colored'
        ],
        '', 70),
        new Technology('NodeJS Technologies',
        [
          'devicon-nodejs-plain colored',
          'devicon-express-original-wordmark colored'
        ],
        '', 30),
        new Technology('Java Technologies',
        [
          'devicon-java-plain colored',
          'devicon-tomcat-line colored',
        ],
        '', 80)
    ];
  }
}

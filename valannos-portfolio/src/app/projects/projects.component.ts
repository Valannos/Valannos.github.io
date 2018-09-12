import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      new Project('https://github.com/Valannos/PoroMeetLink', 'PoroMeetLink', 'devicon-java-plain-wordmark colored'),
    ];
  }
}

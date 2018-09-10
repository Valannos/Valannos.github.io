import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public contacts: Contact[] = [];

  ngOnInit() {
    const contactGitHub: Contact = new Contact();
    contactGitHub.icon = 'fab fa-github';
    contactGitHub.link = 'https://github.com/Valannos';
    contactGitHub.name = 'GitHub';
    this.contacts.push(contactGitHub);
  }

}

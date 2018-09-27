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
    contactGitHub.name = 'My GitHub';
    this.contacts.push(contactGitHub);

    const contactMail: Contact = new Contact();
    contactMail.icon = 'fas fa-envelope';
    contactMail.link = 'mailto:vanel.remi@gmail.com';
    contactMail.name = 'Contact me';
    this.contacts.push(contactMail);
  }

}

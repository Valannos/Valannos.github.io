export class Project {
  link: String;
  name: String;
  icon: String[];
  description: String;
  details: String;

  constructor(link: String, name: String, icon: String[], description: String, details: String) {
    this.link = link;
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.details = details;
  }
}

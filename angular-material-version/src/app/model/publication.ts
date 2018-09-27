export class Publication {
  link: String;
  name: String;
  description: String;
  authors: String;

  constructor(link: String, name: String, description: String, authors: String) {
    this.link = link;
    this.name = name;
    this.description = description;
    this.authors = authors;
  }
}

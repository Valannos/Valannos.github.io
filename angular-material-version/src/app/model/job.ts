export class Job {
  company: String;
  place: String;
  description: String;
  dates: String;
  icon: String;
  link: String;

  constructor(
    company: String,
    place: String,
    description: String,
    dates: String,
    icon: String,
    link: String
  ) {
    this.company = company;
    this.place = place;
    this.description = description;
    this.dates = dates;
    this.icon = icon;
    this.link = link;
  }
}

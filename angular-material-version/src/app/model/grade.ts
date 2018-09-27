export class Grade {
  school: String;
  place: String;
  description: String;
  date: String;
  icon: String;

  constructor(
    school: String,
    place: String,
    description: String,
    date: String,
    icon: String,
  ) {
    this.school = school;
    this.place = place;
    this.description = description;
    this.date = date;
    this.icon = icon;
  }
}

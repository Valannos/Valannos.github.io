export class Technology {
  name: String;
  icons: String[];
  descirption: String;
  level: Number;

  constructor(name: String, icons: String[], descirption: String, level: Number) {
    this.descirption = descirption;
    this.level = level;
    this.icons = icons;
    this.name = name;
  }
}

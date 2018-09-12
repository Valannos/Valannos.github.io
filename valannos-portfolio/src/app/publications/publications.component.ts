import { Component, OnInit } from '@angular/core';
import { Publication } from '../model/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  constructor() {}

  public publications: Publication[] = [];

  ngOnInit() {
    this.publications = [
      new Publication(
        'https://tel.archives-ouvertes.fr/tel-00650134',
        'Elaboration of non-metallic oxidation catalyst using molecular oxygen of air (French)',
        'PhD thesis in Organique Chemistry',
        'R. Vanel, Supervisors : C. Einhorn and J. Einhorn'
      ),
      new Publication(
        null,
        'Efficient Synthesis of Substituted Polyarylphthalimides via Cycloaddition of Cyclopentadienones with 2-Bromomaleimide.',
        'Synlett, 2011, 1293-1295.',
        'R. Vanel, F. Berthiol, B. Bessières, C. Einhorn and J. Einhorn'
      ),
      new Publication(
        null,
        'Direct coupling of carbenium ions with indoles and anilines for the synthesis of cationic π-conjugated dyes.',
        'Chemical Communications, 2014, 50, 12169-12172.',
        ' R. Vanel, F.-A. Miannay, E. Vauthey, J. Lacour'
      ),
    ];
  }
}

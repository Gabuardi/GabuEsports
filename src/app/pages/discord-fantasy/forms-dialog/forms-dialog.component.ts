import {Component} from '@angular/core';
import {PredictionsFormsLink} from '../../../interfaces/predictions-forms-link';

@Component({
  selector: 'app-forms-dialog',
  templateUrl: './forms-dialog.component.html',
  styleUrls: ['./forms-dialog.component.sass']
})
export class FormsDialogComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  formsUrls: PredictionsFormsLink;

  constructor() {
    this.formsUrls = {
      playIn: [
        {name: 'Día 1', url: 'https://forms.gle/rBM7VQ8tP57Abfzp9'},
        {name: 'Día 2', url: 'https://forms.gle/opmkJyEPr7Rov6Nn8'},
        {name: 'Día 3', url: 'https://forms.gle/RAGoDV12PsSR8ZBT6'},
        {name: 'Eliminatorias Día 1', url: 'https://forms.gle/58SHGt19VvJi88QPA'}
      ],
      groups: [
        {name: 'Día 1', url: 'https://forms.gle/QPT55zoLmDoiYqj28'},
        {name: 'Día 2', url: 'https://forms.gle/6cM49T7QTGv7qHHF7'},
        {name: 'Día 3', url: 'https://forms.gle/Jbc9pjxixU8BK6DW7'},
        {name: 'Día 4', url: 'https://forms.gle/qZ3nhVkxhf7pzE7u5'},
        {name: 'Día 5', url: 'https://forms.gle/np9mJpEmW5wDH8n57'},
      ],
      knockouts: [
        {name: 'Semifinales Día 1', url: 'https://forms.gle/tiYEjQHdXbih8Qnp9'},
        {name: 'Semifinales Día 2', url: 'https://forms.gle/WpnbyeEhxkXUc4Bx5'}

      ]
    };
  }

  // -----------------------------------------------------------------------------------
  // METHOD -> OPEN IN ANOTHER WINDOWS AN EXTERNAL URL
  openExternalLink(url: string) {
    window.open(url);
  }

}

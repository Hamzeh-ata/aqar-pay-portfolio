import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-problem-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './problem-section.html',
})
export class ProblemSection {
  protected readonly messyItems = [
    'messy.excel',
    'messy.pdfs',
    'messy.paper',
    'messy.whatsapp',
    'messy.screenshots',
    'messy.meterPhotos',
    'messy.messages',
  ];
}

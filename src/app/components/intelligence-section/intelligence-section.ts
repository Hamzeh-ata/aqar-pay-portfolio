import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-intelligence-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './intelligence-section.html',
})
export class IntelligenceSection {}

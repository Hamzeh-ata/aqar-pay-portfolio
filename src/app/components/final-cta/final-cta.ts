import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-final-cta',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './final-cta.html',
})
export class FinalCta {}

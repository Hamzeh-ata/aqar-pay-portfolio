import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-web-mobile-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './web-mobile-section.html',
})
export class WebMobileSection {}

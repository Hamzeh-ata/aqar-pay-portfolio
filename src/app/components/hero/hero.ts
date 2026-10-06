import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './hero.html',
})
export class Hero {}

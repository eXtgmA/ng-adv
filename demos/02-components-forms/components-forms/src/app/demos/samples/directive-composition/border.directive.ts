import { Directive } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  host: { 'style': 'border:1px solid;' },
  standalone: true
})
export class BorderDirective {

  constructor() { }

}

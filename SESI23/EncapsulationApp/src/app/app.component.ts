import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-no-encapsulation></app-no-encapsulation>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-shadow-dom-encapsulation-component></app-shadow-dom-encapsulation-component>
  `,
  styles: [
    'app-no-encapsulation, app-emulated-encapsulation, app-shadow-dom-encapsulation-component { display: block; max-width: 500px; padding: 5px; margin: 5px 0; }',
    'app-no-encapsulation { border: solid 2px red; }',
    'app-emulated-encapsulation { border: solid 2px green; }',
    'app-shadow-dom-encapsulation-component { border: solid 2px blue; }',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'EncapsulationApp';
}

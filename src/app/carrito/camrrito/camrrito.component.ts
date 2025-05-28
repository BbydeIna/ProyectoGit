import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-camrrito',
  imports: [],
  templateUrl: './camrrito.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamrritoComponent { }

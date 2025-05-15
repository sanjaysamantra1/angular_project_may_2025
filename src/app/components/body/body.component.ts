import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BodyComponent {

}

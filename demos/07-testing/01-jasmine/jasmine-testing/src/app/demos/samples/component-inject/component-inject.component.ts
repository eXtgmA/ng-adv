import { Component, inject } from '@angular/core';
import { DemoService } from '../../demo-base/demo.service';

@Component({
  selector: 'app-component-inject',
  templateUrl: './component-inject.component.html',
  styleUrls: ['./component-inject.component.scss']
})
export class ComponentInjectComponent {
  ds = inject(DemoService)
  demos = this.ds.getItems();
}

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild
} from '@angular/core';
import { DetectorChildComponent } from './detector-child/detector-child.component';

@Component({
  selector: 'app-change-detector-ref',
  templateUrl: './change-detector-ref.component.html',
  styleUrls: ['./change-detector-ref.component.scss'],
})
export class ChangeDetectorRefComponent implements AfterViewInit {
  @ViewChild(DetectorChildComponent) child: DetectorChildComponent | null =
    null;
  produceErr = true;
  handleErr = true;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    let childVal = this.child?.childData;
    if (this.handleErr) {
      this.cd.detectChanges();
    }
    console.log('childVal', childVal);
  }

  ngOnInit(): void { }
}

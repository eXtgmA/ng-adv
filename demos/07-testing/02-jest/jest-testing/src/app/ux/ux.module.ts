import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { uxSplitComponent } from "./ux-split/ux-split.component";
import { uxButtonComponent } from "./ux-button/ux-button.component";
import { MaterialModule } from "../material.module";

const comps = [uxSplitComponent, uxButtonComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: comps,
  exports: comps
})
export class UxModule {}

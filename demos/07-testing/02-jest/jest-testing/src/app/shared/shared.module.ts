import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideBarComponent } from "./sidebar/side-bar.component";

const comps = [NavbarComponent, SideBarComponent, FooterComponent];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
  declarations: comps,
  exports: comps
})
export class SharedModule {}

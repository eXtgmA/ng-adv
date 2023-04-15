import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { SkillsService } from "../model/skills/skills.service";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";
import { UxModule } from "../ux/ux.module";
import { FoodComponent } from "./samples/simple-comp/food.component";
import { IntegrationTestComponent } from "./samples/integration-tests/integration-test.component";
import { FoodRowComponent } from "./samples/integration-tests/food-row/food-row.component";
import { MarblesComponent } from "./samples/marbles/marbles.component";
import { RxjsComponent } from "./samples/rxjs/rxjs.component";
import { NgrxComponent } from "./samples/ngrx/ngrx.component";
import { ShallowIntegrationComponent } from "./samples/shallow-integration/shallow-integration.component";
import { ProtactorComponent } from "./samples/protactor/protactor.component";
import { RatingPipe } from "./samples/pipe/rating.pipe";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "simplecomp", component: FoodComponent },
      { path: "shallow", component: ShallowIntegrationComponent },
      { path: "rxjs", component: RxjsComponent },
      { path: "marbles", component: MarblesComponent },
      { path: "ngrx", component: NgrxComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    FoodComponent,
    IntegrationTestComponent,
    MarkdownEditorComponent,
    FoodRowComponent,
    MarblesComponent,
    RxjsComponent,
    NgrxComponent,
    ShallowIntegrationComponent,
    ProtactorComponent,
    RatingPipe
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [DemoService, SkillsService]
})
export class DemosModule {}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../shared/ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoRoutingModule } from './demo.routing.module';
import { CardComponent } from './samples/card/card.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { SplitSampleComponent } from './samples/content-projection/split-sample/split-sample.component';
import { PopupContainerComponent } from './samples/popup-container/popup-container.component';
import { PopupComponent } from './samples/popup-container/popup/popup.component';
import { TableComponent } from './samples/table/table.component';
import { StyleInheritanceComponent } from './samples/style-inheritance/style-inheritance.component';
import { FirstChildComponent } from './samples/style-inheritance/first-child/first-child.component';
import { SecondChildComponent } from './samples/style-inheritance/second-child/second-child.component';
import { NestedChildComponent } from './samples/style-inheritance/nested-child/nested-child.component';
import { MaterialVsBootstrapComponent } from './samples/material-vs-bootstrap/material-vs-bootstrap.component';
import { MultiThemeComponent } from './samples/multi-theme/multi-theme.component';
import { VisualFeedbackComponent } from './samples/visual-feedback/visual-feedback.component';
import { ClassicThemingComponent } from './samples/material-vs-bootstrap/classic-theming/classic-theming.component';
import { AlternativeThemingComponent } from './samples/material-vs-bootstrap/alternative-theming/alternative-theming.component';
import { MdcMigrationComponent } from './samples/mdc-migration/mdc-migration.component';
import { NgOptimizedImageComponent } from './samples/ng-optimized-image/ng-optimized-image.component';
import { MarkdownEditorComponent } from '../shared/markdown-editor/markdown-editor.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    CardComponent,
    ContentProjectionComponent,
    PopupContainerComponent,
    PopupComponent,
    SplitSampleComponent,
    TableComponent,
    StyleInheritanceComponent,
    FirstChildComponent,
    SecondChildComponent,
    NestedChildComponent,
    MaterialVsBootstrapComponent,
    MultiThemeComponent,
    VisualFeedbackComponent,
    ClassicThemingComponent,
    AlternativeThemingComponent,
    MdcMigrationComponent,
    NgOptimizedImageComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    UxModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    MarkdownEditorComponent
  ],
  providers: [SkillsService],
})
export class DemosModule { }

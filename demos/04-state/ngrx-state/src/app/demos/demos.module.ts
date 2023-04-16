import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { MarkdownEditorModule } from '../shared/markdown-editor/markdown-editor.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { demoRoutes } from './demo.routing.module';
import { AppStateComponent } from './samples/app-state/app-state.component';
import { ChangeDetectionProfileComponent } from './samples/change-detection-profile/change-detection-profile.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { ChangeDetectorRefComponent } from './samples/change-detector-ref/change-detector-ref.component';
import { DetectorChildComponent } from './samples/change-detector-ref/detector-child/detector-child.component';
import { ComponentStoreComponent } from './samples/component-store/component-store.component';
import { ContainerPresenterNgrxComponent } from './samples/container-presenter-ngrx/container-presenter-ngrx.component';
import { EffectsComponent } from './samples/effects/effects.component';
import { FacadesComponent } from './samples/facades/facades.component';
import { DemoEditComponent } from './samples/feature-module-state/demo-edit/demo-edit.component';
import { DemoFilterComponent } from './samples/feature-module-state/demo-filter/demo-filter.component';
import { DemoListComponent } from './samples/feature-module-state/demo-list/demo-list.component';
import { DemoRowComponent } from './samples/feature-module-state/demo-row/demo-row.component';
import { FeatureModuleStateComponent } from './samples/feature-module-state/feature-module-state.component';
import { NgrxDataComponent } from './samples/ngrx-data/ngrx-data.component';
import { NgrxEntityComponent } from './samples/ngrx-entity/ngrx-entity.component';
import { SelectorsComponent } from './samples/selectors/selectors.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';

@NgModule({
  declarations: [
    DemoContainerComponent,
    DemoRowComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    AppStateComponent,
    NgrxEntityComponent,
    SelectorsComponent,
    FacadesComponent,
    EffectsComponent,
    ChangeDetectionComponent,
    ContainerPresenterNgrxComponent,
    ChangeDetectorRefComponent,
    DetectorChildComponent,
    ChangeDetectionProfileComponent,
    ComponentStoreComponent,
    NgrxDataComponent,
    FeatureModuleStateComponent,
    NgrxEntityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule,
    MarkdownEditorModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [],
})
export class DemosModule { }

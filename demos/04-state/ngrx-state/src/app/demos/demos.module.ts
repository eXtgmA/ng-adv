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
import { DemoEditComponent } from './samples/demos-list/demo-edit/demo-edit.component';
import { DemoFilterComponent } from './samples/demos-list/demo-filter/demo-filter.component';
import { DemoListHostComponent } from './samples/demos-list/demo-list-host..component';
import { DemoListComponent } from './samples/demos-list/demo-list/demo-list.component';
import { DemoRowComponent } from './samples/demos-list/demo-row/demo-row.component';
import { DemosStateComponent } from './samples/demos-state/demos-state.component';
import { EffectsComponent } from './samples/effects/effects.component';
import { FacadesComponent } from './samples/facades/facades.component';
import { SelectorsComponent } from './samples/selectors/selectors.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { ContainerPresenterNgrxComponent } from './samples/container-presenter-ngrx/container-presenter-ngrx.component';
import { ChangeDetectorRefComponent } from './samples/change-detector-ref/change-detector-ref.component';
import { DetectorChildComponent } from './samples/change-detector-ref/detector-child/detector-child.component';
import { ChangeDetectionProfileComponent } from './samples/change-detection-profile/change-detection-profile.component';
import { ComponentStoreComponent } from './samples/component-store/component-store.component';
import { NgrxDataComponent } from './samples/ngrx-data/ngrx-data.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    DemoRowComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    AppStateComponent,
    DemoListHostComponent,
    DemosStateComponent,
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

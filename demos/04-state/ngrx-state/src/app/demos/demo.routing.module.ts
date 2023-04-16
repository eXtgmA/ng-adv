import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppStateComponent } from './samples/app-state/app-state.component';
import { ChangeDetectionProfileComponent } from './samples/change-detection-profile/change-detection-profile.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { ChangeDetectorRefComponent } from './samples/change-detector-ref/change-detector-ref.component';
import { ComponentStoreComponent } from './samples/component-store/component-store.component';
import { ContainerPresenterNgrxComponent } from './samples/container-presenter-ngrx/container-presenter-ngrx.component';
import { EffectsComponent } from './samples/effects/effects.component';
import { FacadesComponent } from './samples/facades/facades.component';
import { FeatureModuleStateComponent } from './samples/feature-module-state/feature-module-state.component';
import { NgrxDataComponent } from './samples/ngrx-data/ngrx-data.component';
import { NgrxEntityComponent } from './samples/ngrx-entity/ngrx-entity.component';
import { SelectorsComponent } from './samples/selectors/selectors.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'app-state', component: AppStateComponent, title: 'Demos - App State' },
      { path: 'ngrx-entity', component: NgrxEntityComponent },
      { path: 'feature-modules-state', component: FeatureModuleStateComponent },
      { path: 'selectors', component: SelectorsComponent, title: 'Demos - Selectors' },
      { path: 'effects', component: EffectsComponent, title: 'Demos - Effects' },
      { path: 'facades', component: FacadesComponent, title: 'Demos - Facades' },
      { path: 'ngrx-data', component: NgrxDataComponent },
      { path: 'cd-intro', component: ChangeDetectionComponent },
      { path: 'cd-profile', component: ChangeDetectionProfileComponent },
      { path: 'component-store', component: ComponentStoreComponent },
      { path: 'presenter-ngrx', component: ContainerPresenterNgrxComponent },
      {
        path: 'change-detector-ref',
        component: ChangeDetectorRefComponent,
      }
    ],
  },
];

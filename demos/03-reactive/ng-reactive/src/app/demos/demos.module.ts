import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { CachingComponent } from './samples/caching/caching.component';
import { CombiningComponent } from './samples/combining/combining.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { CustomOperatorsComponent } from './samples/custom-operators/custom-operators.component';
import { ErrHandlingComponent } from './samples/err-handling/err-handling.component';
import { FlexLayoutApiComponent } from './samples/flex-layout-api/flex-layout-api.component';
import { MouseDomObservablesComponent } from './samples/mouse-dom-observables/mouse-dom-observables.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { SharedModule } from '../shared/shared.module';
import { LangFeaturesComponent } from './samples/lang-features/lang-features.component';
import { DebouncedSearchComponent } from './samples/debounced-search/debounced-search.component';
import { TransformationComponent } from './samples/transformation/transformation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarbleTestingComponent } from './samples/marble-testing/marble-testing.component';
import { SignPadComponent } from './samples/unsubscribing/sign-pad/sign-pad.component';
import { ImperativeComponent } from './samples/imperative/imperative.component';
import { ReifiedReactiveComponent } from './samples/reified-reactive/reified-reactive.component';
import { StatefullComponent } from './samples/statefull/statefull.component';
import { EventbusComponent } from './samples/eventbus/eventbus.component';
import { ListComponent } from './samples/statefull/list/list.component';
import { KpiComponent } from './samples/statefull/kpi/kpi.component';
import { DemoRowComponent } from './demo-row/demo-row.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'langfeatures', component: LangFeaturesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'imperative', component: ImperativeComponent },
      { path: 'reactive', component: ReifiedReactiveComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'mousedomobs', component: MouseDomObservablesComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'debounced', component: DebouncedSearchComponent },
      { path: 'flexlayoutapi', component: FlexLayoutApiComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'asyncpipe', component: AsyncPipeComponent },
      { path: 'customops', component: CustomOperatorsComponent },
      { path: 'errhandling', component: ErrHandlingComponent },
      { path: 'combining', component: CombiningComponent },
      { path: 'transformation', component: TransformationComponent },
      { path: 'caching', component: CachingComponent },
      { path: 'actionstreams', component: ActionStreamsComponent },
      { path: 'marble-testing', component: MarbleTestingComponent },
      { path: 'statefull', component: StatefullComponent },
      { path: 'ebus', component: EventbusComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CreatingObservableComponent,
    MouseDomObservablesComponent,
    DebouncedSearchComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    SubjectsComponent,
    CustomOperatorsComponent,
    AsyncPipeComponent,
    ErrHandlingComponent,
    CombiningComponent,
    CachingComponent,
    ActionStreamsComponent,
    LangFeaturesComponent,
    TransformationComponent,
    MarbleTestingComponent,
    SignPadComponent,
    ImperativeComponent,
    ReifiedReactiveComponent,
    StatefullComponent,
    EventbusComponent,
    ListComponent,
    KpiComponent,
    DemoRowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [],
})
export class DemosModule { }

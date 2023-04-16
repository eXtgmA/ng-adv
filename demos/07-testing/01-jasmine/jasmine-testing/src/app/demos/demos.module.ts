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
import { AsyncComponent } from './samples/component-async/async.component';
import { SimpleAuthWhenStableComponent } from './samples/component-async/simple-auth-async-when-stable/simple-auth-when-stable.component';
import { SimpleAuthAsyncComponent } from './samples/component-async/simple-auth-async/simple-auth-async.component';
import { SimpleAuthDoneComponent } from './samples/component-async/simple-auth-done/simple-auth-done.component';
import { SimpleAuthFakeAsyncComponent } from './samples/component-async/simple-auth-fake-async/simple-auth-fake-async.component';
import { TimerComponent } from './samples/component-async/timer/timer.component';
import { ComponentClassComponent } from './samples/component-class/component-class.component';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { FoodListComponent } from './samples/component-integration/food-list/food-list.component';
import { FoodRowComponent } from './samples/component-integration/food-row/food-row.component';
import { IntegrationTestComponent } from './samples/component-integration/integration-test.component';
import { MarblesComponent } from './samples/marbles/marbles.component';

import { ComponentTestComponent } from './samples/component-test/component-test.component';
import { SimpleFoodComponent } from './samples/component-test/simple-food/simple-food.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';
import { CypressComponent } from './samples/cypress/cypress.component';
import { DemoEditComponent } from './samples/demo-edit/demo-edit.component';
import { DemoFilterComponent } from './samples/demo-filter/demo-filter.component';
import { DemoListComponent } from './samples/demo-list/demo-list.component';
import { DemoRowComponent } from './samples/demo-row/demo-row.component';
import { CapitalizeDirective } from './samples/directive/capitalize.directive';
import { DirectiveHostComponent } from './samples/directive/directive-host/directive-host.component';
import { DirectiveComponent } from './samples/directive/directive.component';
import { HttpTestsBsComponent } from './samples/http-tests-bs/http-tests-bs.component';
import { HttpTestsComponent } from './samples/http-tests/http-tests.component';
import { UnitTestingComponent } from './samples/intro-unit-testing/unit-testing.component';
import { MaterialAsyncComponent } from './samples/material-async/material-async.component';
import { MaterialComponent } from './samples/material/material.component';
import { MockStoreComponent } from './samples/mock-store/mock-store.component';
import { MockHostComponent } from './samples/mocking/mock-host/mock-host.component';
import { SpyHostComponent } from './samples/mocking/spy-host/spy-host.component';
import { UseMockComponent } from './samples/mocking/use-mock/use-mock.component';
import { UseSpyComponent } from './samples/mocking/use-spy/use-spy.component';
import { NgrxMockstoreComponent } from './samples/ngrx-mockstore/ngrx-mockstore.component';
import { NgrxReducersComponent } from './samples/ngrx-reducers/ngrx-reducers.component';
import { NgrxSelectorsComponent } from './samples/ngrx-selectors/ngrx-selectors.component';
import { PhonenumberPipe } from './samples/pipe/phonenumber.pipe';
import { RatingPipe } from './samples/pipe/rating.pipe';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';
import { MockstoreComponent } from './samples/ngrx-mockstore/mockstore/mockstore.component';
import { SelectorsComponent } from './samples/ngrx-selectors/selectors/selectors.component';
import { ReducersComponent } from './samples/ngrx-reducers/reducers/reducers.component';
import { ComponentInjectComponent } from './samples/component-inject/component-inject.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    DemoRowComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    UnitTestingComponent,
    TestPipeComponent,
    SimpleFoodComponent,
    IntegrationTestComponent,
    SimpleServiceComponent,
    TestPipeComponent,
    RatingPipe,
    FoodRowComponent,
    FoodListComponent,
    UseMockComponent,
    AsyncComponent,
    MarblesComponent,
    MockStoreComponent,
    PhonenumberPipe,
    SimpleAuthAsyncComponent,
    ComponentTestComponent,
    SimpleAuthDoneComponent,
    SimpleAuthFakeAsyncComponent,
    SimpleAuthWhenStableComponent,
    HttpTestsComponent,
    DirectiveComponent,
    CapitalizeDirective,
    ComponentEventsComponent,
    CypressComponent,
    ComponentWriteComponent,
    MaterialComponent,
    MaterialAsyncComponent,
    ComponentClassComponent,
    UseSpyComponent,
    MockHostComponent,
    SpyHostComponent,
    DirectiveHostComponent,
    NgrxMockstoreComponent,
    NgrxSelectorsComponent,
    NgrxReducersComponent,
    HttpTestsBsComponent,
    TimerComponent,
    MockstoreComponent,
    SelectorsComponent,
    ReducersComponent,
    ComponentInjectComponent,
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

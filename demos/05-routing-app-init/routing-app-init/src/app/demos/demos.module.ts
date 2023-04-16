import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { GlobalErrorsComponent } from './samples/global-errors/global-errors.component';
import { LocServiceComponent } from './samples/loc-service/loc-service.component';
import { MembersComponent } from './samples/multi-guard/members/members.component';
import { MultiGuardComponent } from './samples/multi-guard/multi-guard.component';
import { OnlyAuthenticatedGuard } from './samples/multi-guard/only-authenticated.guard';
import { OnlyPrimeMembersGuard } from './samples/multi-guard/only-prime-members.guard';
import { PrimeComponent } from './samples/multi-guard/prime/prime.component';
import { MultiInterceptorComponent } from './samples/multi-interceptor/multi-interceptor.component';
import { RoutingTargetComponent } from './samples/routing/routing-target/routing-target.component';
import { RoutingComponent } from './samples/routing/routing/routing.component';
import { HttpErrorsComponent } from './samples/http-errors/http-errors.component';
import { demosFeatureKey } from './state/demos.reducer';
import { DemosEffects } from './state/demos.effects';
import { demoReducer } from './state/demos.reducer';
import { RouterAnimationsComponent } from './samples/router-animations/router-animations.component';
import { AppInitComponent } from './samples/app-init/app-init.component';
import { PreloadingNgrxComponent } from './samples/preloading-ngrx/preloading-ngrx.component';
import { CodeSplittingComponent } from './samples/code-splitting/code-splitting.component';
import { AuxilaryRoutesComponent } from './samples/auxilary-routes/auxilary-routes.component';
import { DiInjectComponent } from './samples/di-inject/di-inject.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      {
        path: 'inject',
        component: DiInjectComponent,
      },
      {
        path: 'app-init',
        component: AppInitComponent,
      },
      {
        path: 'code-splitting',
        component: CodeSplittingComponent,
      },
      {
        path: 'routing',
        component: RoutingComponent,
        children: [{ path: ':id', component: RoutingTargetComponent }],
      },
      {
        path: 'locationsrv',
        component: LocServiceComponent,
      },
      {
        path: 'preload-ngrx',
        component: PreloadingNgrxComponent,
      },
      {
        path: 'multi-guard',
        component: MultiGuardComponent,
        children: [
          {
            path: 'members',
            component: MembersComponent,
            canActivate: [OnlyAuthenticatedGuard],
          },
          {
            path: 'prime',
            component: PrimeComponent,
            canActivate: [OnlyAuthenticatedGuard, OnlyPrimeMembersGuard],
          },
        ],
      },
      {
        path: 'multi-interceptor',
        component: MultiInterceptorComponent,
      },
      {
        path: 'global-errors',
        component: GlobalErrorsComponent,
      },
      {
        path: 'http-errors',
        component: HttpErrorsComponent,
      },
      {
        path: 'router-animations',
        component: RouterAnimationsComponent,
      }
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    RoutingComponent,
    RoutingTargetComponent,
    LocServiceComponent,
    MultiGuardComponent,
    MultiInterceptorComponent,
    GlobalErrorsComponent,
    MembersComponent,
    PrimeComponent,
    HttpErrorsComponent,
    RouterAnimationsComponent,
    AppInitComponent,
    PreloadingNgrxComponent,
    CodeSplittingComponent,
    AuxilaryRoutesComponent,
    DiInjectComponent,
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
      loader: HttpClient,
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [],
})
export class DemosModule { }

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
  RouterState,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { reducers, metaReducers } from './state';
import { ErrPageComponent } from './error/err-page/err-page.component';
import { AppInitService, initFactory } from './app-init/app-init.service';
import { configFactory } from './app-init/config.factory';
import { ConfigService } from './app-init/config.service';
import { EntityDataModule } from '@ngrx/data';
import { GlobalErrService } from './error/global-err-handler';
import { CustomerEffects } from './customers/state/customers.effects';
// import { GlobalErrService } from './error/global-err-handler';
// import { HttpErrorInterceptor } from './error/globle-http-err-handler';
// import { FBAuthInterceptor } from './auth/fbauth.interceptor';
// import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
// import { FormatInterceptorService } from './interceptors/format-interceptor.service';
// import { RetryInterceptorService } from './interceptors/retry-interceptor.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      // Needed to avoid TypeError: Cannot freeze with firebase lib
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([CustomerEffects]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'ng-demo-app',
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Full,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useValue: () => {
        console.log('App init running');
      },
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [AppInitService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrService,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: FormatInterceptorService,
    //   multi: true,
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RetryInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

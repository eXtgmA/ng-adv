import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginSplashComponent } from './components/login-splash/login-splash.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { authFeatureKey, reducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';

const comps = [
  LoginComponent,
  RegisterComponent,
  LogoutComponent,
  LoginSplashComponent,
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class FBAuthModule { }

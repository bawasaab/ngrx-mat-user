import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { AppCommonModule } from 'src/app/common/app-common/app-common.module';
import { StoreModule } from '@ngrx/store';
import * as fromSignIn from '../reducers';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    AppCommonModule,
    // StoreModule.forFeature(fromSignIn.signInFeatureKey, fromSignIn.reducers, { metaReducers: fromSignIn.metaReducers })
    StoreModule.forFeature(fromSignIn.signInFeatureKey,
      fromSignIn.signInReducer
      // fromSignIn.reducers
    )
  ]
})
export class SignInModule { }

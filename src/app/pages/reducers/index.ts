import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  // MetaReducer
} from '@ngrx/store';
import { SignInActions } from '../sign-in/action-types';
import { iUser } from '../user/models/user.model';
// import { environment } from '../../../environments/environment';

export const signInFeatureKey = 'signIn';

export interface SignInState {
  user: iUser | undefined
}

export const initialSignInState: SignInState = {
  user: undefined
}

// export const reducers: ActionReducerMap<SignInState> = {

// };


// export const metaReducers: MetaReducer<SignInState>[] = !environment.production ? [] : [];

export const signInReducer = createReducer(
  initialSignInState,
  on(SignInActions.signIn, (state, action) => {
    return {
      user: action.user
    }
  })
)

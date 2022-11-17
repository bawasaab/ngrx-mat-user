import { createAction, props } from "@ngrx/store";
import { iUser } from "../user/models/user.model";

export const signIn = createAction(
  "[SignIn Page] User Login",
  props<{user: iUser}>()
)

export const signOut = createAction(
  "[SignOut Page] Logout"
)

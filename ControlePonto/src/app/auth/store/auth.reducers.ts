import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/modules/User.model";
import { login } from "./auth.actions";


export interface AuthState {
  user: User;
}

export const initialAuthState : AuthState = {
  user: new User(),
}

export const authReducer = createReducer(
  initialAuthState,
  on(login, state => ({ ...state, login: state.user })),
);

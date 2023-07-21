import { AppState } from "src/app/store/app.reducers";

export const selectUser = (state: AppState) => state.auth;

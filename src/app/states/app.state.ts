import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user.model";
import { UserState } from "../models/user.state";
import { usersReducer } from "./reducers/users.reducers";

export interface AppState{
    usersList: UserState;
    
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    usersList: usersReducer
}
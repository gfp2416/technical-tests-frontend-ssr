import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from 'src/app/models/user.state';


export const selectUsers = (state: AppState) => state.usersList;

export const selectListUsers = createSelector(
    selectUsers,
  (state: UserState) => state.users
);

export const selectLoading = createSelector(
    selectUsers,
  (state: UserState) => state.loading
);
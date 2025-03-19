import { createReducer, on } from '@ngrx/store';

import { User } from '../../models/user.model';
import { loadUsers } from '../actions/user.actions';
import { state } from '@angular/animations';
import { UserState } from 'src/app/models/user.state';

export const initialState: UserState = {loading: false, users: []}

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => {
    return {...state, loading: true}
  
  })
);
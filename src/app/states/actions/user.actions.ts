import { createAction, createActionGroup, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction(
    '[Users List] Load users' // TODO type **
);

export const loadedUsers = createAction(
    '[Users List] Loaded users' // TODO type **
);

export const addUser = createAction(
    '[Add User] Add user' // TODO type **
);

export const updateUser = createAction(
    '[Update User] Update user' // TODO type **
);

export const deleteUser = createAction(
    '[Delete User] Delete user' // TODO type **
);
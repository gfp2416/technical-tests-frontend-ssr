import { User } from "./user.model";

export interface UserState {
      loading: boolean,
      users: ReadonlyArray<User>;
}
import { createReducer, on } from '@ngrx/store';
import { login } from './login.actions';

export interface ILoginState {
    value: number;
}
   
export const initialState: ILoginState = {
    value: 0
}
   
export const loginReducer = createReducer(
    initialState,
    on(login, (state, {payload}) => 
        ({
            value: payload
        })
    )
);
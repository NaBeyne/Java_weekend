import { createReducer, on } from '@ngrx/store';
import {setLoginState} from './login.actions';

export interface ILoginState {
    birthDate: Date | undefined,
    firstName: string,
    phoneNumber: string,
    surname: string
}

export const initialState: ILoginState = {
    birthDate: undefined,
    firstName: '',
    phoneNumber: '',
    surname: ''
}

export const loginReducer = createReducer(
    initialState,
    on(setLoginState, (state, {payload}) =>
        ({
            birthDate: payload.birthDate,
            firstName: payload.firstName,
            phoneNumber: payload.phoneNumber,
            surname: payload.surname
        })
    )
);

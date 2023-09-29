import { createReducer, on } from '@ngrx/store';
import { setBirthDate, setFirstName, setPhoneNumber, setSurname } from './login.actions';

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
    on(setBirthDate, (state, {payload}) => 
        ({
            ...state,
            birthDate: payload
        })
    ),
    on(setFirstName, (state, {payload}) => 
        ({
            ...state,
            firstName: payload
        })
    ),
    on(setPhoneNumber, (state, {payload}) => 
        ({
            ...state,
            phoneNumber: payload
        })
    ),
    on(setSurname, (state, {payload}) => 
        ({
            ...state,
            surname: payload
        })
    )
);
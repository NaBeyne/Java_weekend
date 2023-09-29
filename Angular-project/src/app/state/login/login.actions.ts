import { createAction, props } from '@ngrx/store';
import {ILoginState} from "./login.reducer";

export const setLoginState = createAction('[Login Component] setLoginState', props<{ payload: ILoginState }>());

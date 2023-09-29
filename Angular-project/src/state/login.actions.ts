import { createAction, props } from '@ngrx/store';

export const setBirthDate = createAction('[Login Component] setBirthDate', props<{ payload: Date }>());
export const setFirstName = createAction('[Login Component] setFirstName', props<{ payload: string }>());
export const setPhoneNumber = createAction('[Login Component] setFirstName', props<{ payload: string }>());
export const setSurname = createAction('[Login Component] setSurname', props<{ payload: string }>());
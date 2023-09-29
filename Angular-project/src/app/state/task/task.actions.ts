import { createAction, props } from '@ngrx/store';
import { SubTask, Task } from './task.reducer';

export const addTask = createAction('add task', props<{ payload: Task }>());
export const removeTask = createAction('remove task', props<{ payload: Task }>());

export const addSubTask = createAction('add subtask', props<{ payload: { task: Task, subtask: SubTask } }>());
export const removeSubTask = createAction('remove subtask', props<{ payload: { task: Task, subtask: SubTask } }>());

export const toggleSubTask = createAction('toggle subtask', props<{ payload: { task: Task, subtask: SubTask } }>());
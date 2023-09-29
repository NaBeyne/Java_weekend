import { createReducer, on } from '@ngrx/store';
import { addTask, removeTask, addSubTask, removeSubTask, toggleSubTask } from './task.actions';


export class SubTask {
    id: string;
    solved: boolean;
    description: string;

    constructor(description: string) {
        this.id = crypto.randomUUID();
        this.solved = false;
        this.description = description;
    }
}

export class Task {
    id: string;
    subtasks: SubTask[];

    constructor(subtasks: SubTask[]) {
        this.id = crypto.randomUUID();
        this.subtasks = subtasks;
    }
}

export interface ITaskState {
    tasks: Task[]
}
   
export const initialState: ITaskState = {
    tasks: [
      new Task([
        new SubTask("vuilnis buitenzetten"),
        new SubTask("test2")
      ]),
      new Task([
        new SubTask("tye"),
      ])
    ]
}
   
export const taskReducer = createReducer(
    initialState,
    on(addTask, (state, {payload}) => {
            state.tasks.push(payload);
            return state;
        }
    ),
    on(removeTask, (state, {payload}) => {
            const index = state.tasks.indexOf(payload);
            if (index > -1) {
                state.tasks.splice(index, 1);
            }
            return state;
        }
    ),
    on(addSubTask, (state, {payload}) => {
            state.tasks.at(state.tasks.indexOf(payload.task))?.subtasks.push(payload.subtask);
            return state;
        }
    ),
    on(removeSubTask, (state, {payload}) => {
            const task = state.tasks.at(state.tasks.indexOf(payload.task));
            const index = task?.subtasks.indexOf(payload.subtask);
            if (task && index && index > -1) {
                task.subtasks.splice(index, 1);
            }
            return state;
        }
    ),
    on(toggleSubTask, (state, {payload}) => {
            const task = state.tasks.at(state.tasks.indexOf(payload.task));
            const index = task?.subtasks.indexOf(payload.subtask);
            if (task && index && index > -1) {
                const subtask = task.subtasks.at(index);
                if (subtask) {
                    subtask.solved = !subtask.solved;
                }
            }
            
            return state;
        }
    )
);

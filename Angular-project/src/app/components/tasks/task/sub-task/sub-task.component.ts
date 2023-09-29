import {Component, Input} from '@angular/core';
import {SubTask, Task} from "../../../../state/task/task.reducer";
import {toggleSubTask} from "../../../../state/task/task.actions"
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.scss']
})
export class SubTaskComponent {

  @Input()
  subtask: SubTask;
  @Input()
  task: Task;

  constructor(private store: Store) {
  }


  toggle(): void {
    console.log();
    this.store.dispatch(toggleSubTask({payload: {
        task: this.task, subtask: this.subtask
    }}));
  }

}

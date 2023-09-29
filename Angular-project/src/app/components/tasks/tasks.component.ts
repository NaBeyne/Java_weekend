import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Task} from "../../state/task/task.reducer";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private store: Store<{ tasks: {tasks: Task[]} }>) {
    store.select('tasks').pipe(
      tap(tasks => {
        this.tasks = tasks.tasks;
      })
    ).subscribe()
  }

}

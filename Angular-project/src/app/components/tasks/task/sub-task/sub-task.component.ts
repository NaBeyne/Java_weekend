import {Component, Input} from '@angular/core';
import {SubTask} from "../../../../state/task/task.reducer";

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.scss']
})
export class SubTaskComponent {

  @Input()
  subtask: SubTask;

}

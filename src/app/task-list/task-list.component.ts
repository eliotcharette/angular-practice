import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  
  orderColor(currentTask){
    if (currentTask.order === 1) {
      return "bg-danger";
    } else if (currentTask.order === 2) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }
}

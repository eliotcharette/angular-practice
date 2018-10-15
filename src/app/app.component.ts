import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'this-is-the-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Make a morning routine';

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task("Spend first 5 minutes of the day reflecting on what your grateful for", 2),
    new Task("Drink a glass of water to get hydrated", 1),
    new Task("Go on a quick run to get body moving", 3)
  ];
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
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
  selectedTask: Task = this.tasks[0];
}

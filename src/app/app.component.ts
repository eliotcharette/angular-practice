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

  firstTask: Task = new Task("Spend first 5 minutes of the day reflecting on what your grateful for");
}

import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTaskData } from './tasks/tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  addTaskVisible = false;

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // What the fuck is this ?
  // Why does this work without an input field/argument ??
  // In TypeScript and JavaScript, a getter allows you to define a property-like method that can access other properties of the class directly using `this`.

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.addTaskVisible = true;
  }

  onEndAddTask() {
    this.addTaskVisible = false;
  }

  // This method is called when a new task is added and called when the form is submitted from add-task.component.ts
  onAddNewTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.addTaskVisible = false;
  }
}

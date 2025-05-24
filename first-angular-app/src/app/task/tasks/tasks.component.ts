import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './tasks.model';
import { CardComponent } from '../../shared/card/card.component';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CardComponent, DatePipe],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}

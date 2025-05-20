import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() isAddTaskVisible = new EventEmitter<void>();

  endAddTaskVisible() {
    this.isAddTaskVisible.emit();
  }
}

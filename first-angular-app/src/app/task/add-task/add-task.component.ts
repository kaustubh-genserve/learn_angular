import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tasks/tasks.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() isAddTaskVisible = new EventEmitter<void>();

  // EventEmitter is a class that allows us to emit submitted data
  // to the parent component (task.component.ts)
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // two-way data binding with signals
  // Angular signals will work with two-way data binding ngModel and append read into it.
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  endAddTaskVisible() {
    this.isAddTaskVisible.emit();
  }
  // This method is called when the form is submitted
  // It emits the entered data to the parent component
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}

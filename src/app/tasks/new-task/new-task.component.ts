import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TaskServiceToken } from '../../../main'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // private tasksService: TasksService;
  //way 11
  // constructor(tService: TasksService){
  //   this.tasksService = tService;
  // }

  constructor(@Inject(TaskServiceToken) private tasksService: TasksService){ //creates a property with the same name as requested

  }
  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title, description});
    this.formEl()?.nativeElement.reset();
  }
}

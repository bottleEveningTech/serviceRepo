import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

// @Injectable({
//     providedIn: 'root'
// })
export class TasksService {
    private loggingService = inject(LoggingService);

    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();

    /* 👉 Because asReadonly() must be called on the signal itself
👉 this.tasks() is the value, not the signal */
    addTask(taskData: {title:string; description:string}){
        const newTask:Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        }
        this.tasks.update((oldTasks)=>[...oldTasks, newTask]);
        this.loggingService.log('Task added with title' + taskData.title);
    }

    updateTaskStatus(id:string, newStatus: TaskStatus){
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => task.id === id ? {... task, status: newStatus}: task));
        this.loggingService.log('Changed task status to' + newStatus);
        
    }
}
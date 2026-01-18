import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
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
    }
}
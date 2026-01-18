import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';
export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusType>('TASK_STATUS_OPTIONS');
type TaskStatusType = {
  value: string;
  taskStatus: TaskStatus;
  text: string;
}[];

export const TaskStatusOptions: TaskStatusType = [
    {
      value: 'open',
      taskStatus: 'OPEN',
      text: 'Open'
    },
    {
      value: 'in-progress',
      taskStatus: 'IN_PROGRESS',
      text: 'In-Progress'
    },
    {
      value: 'done',
      taskStatus: 'DONE',
      text: 'Completed'
    }
  ]
export const typeStatusValueProvider: Provider = {
  provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions 
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

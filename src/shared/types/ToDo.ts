import { ToDoStatus } from "../enum/ToDoEnum";

export interface ToDo {
  id: string;
  title: string;
  content: string;
}

export type ToDoFilterType = ToDoStatus | "TOTAL";

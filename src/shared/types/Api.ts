import { ToDoStatus } from "../enum/ToDoEnum";

export type AddToDoRequest = {
  title: string;
  desc: string;
  status: ToDoStatus;
};

export type UpdateToDoRequest = {
  id: number;
  title: string;
  desc: string;
};

export type ToDoResponse = {
  id: number;
  title: string;
  desc: string;
  status: ToDoStatus;
};

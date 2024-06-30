import { ToDoStatus } from "@/shared/enum/ToDoEnum";
import { AddToDoRequest } from "@/shared/types/Api";

export const skeleton: AddToDoRequest = {
  title: "your ToDo List",
  desc: "write your to do at today",
  status: ToDoStatus.PROGRESS,
};

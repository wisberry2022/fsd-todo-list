import { ToDo } from "@/shared/api/RestService";
import { ToDoResponse } from "@/shared/types/Api";

export const getToDoList = async (): Promise<ToDoResponse[]> => {
  const result = await ToDo.getAll();
  return result;
};

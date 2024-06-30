import { ToDo } from "@/shared/api/RestService";
import { ToDoResponse } from "@/shared/types/Api";

export const editToDo = async (sendData: ToDoResponse) => {
  const { status, ...update } = sendData;
  await ToDo.update(update);
};

export const deleteToDo = async (id: number) => {
  await ToDo.delete(id);
};

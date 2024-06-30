import { AddToDoRequest, ToDoResponse, UpdateToDoRequest } from "../types/Api";
import { axiosBackInstance } from "./AxiosInstances";
import { Paths } from "./Paths";

export const ToDo = {
  getAll: async (): Promise<ToDoResponse[]> => {
    const result = await axiosBackInstance.get(Paths.todo.getAll);
    return result.data;
  },
  add: async (sendData: AddToDoRequest): Promise<void> => {
    await axiosBackInstance.post(Paths.todo.add, sendData);
  },
  update: async (sendData: UpdateToDoRequest): Promise<void> => {
    await axiosBackInstance.put(Paths.todo.update, sendData);
  },
  delete: async (id: number): Promise<void> => {
    await axiosBackInstance.delete(Paths.todo.delete(id));
  },
};

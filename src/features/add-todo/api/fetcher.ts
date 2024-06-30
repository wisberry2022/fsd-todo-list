import { ToDo } from "@/shared/api/RestService";
import { skeleton } from "../view-data/data";

export const addToDo = async () => {
  await ToDo.add(skeleton);
};

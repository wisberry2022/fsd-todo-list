import { ToDo } from "@/shared/types/ToDo";

export const getToDoList = async (): Promise<ToDo[]> => {
  const result = await fetch("http://localhost:5000/result");
  return result.json();
};

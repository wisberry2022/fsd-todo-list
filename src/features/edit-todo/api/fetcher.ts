import { ToDo } from "@/shared/types/ToDo";

export const editToDo = async (sendData: ToDo) => {
  await fetch(`http://localhost:5000/result/${sendData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: sendData.title,
      content: sendData.content,
    }),
  });
};


export const deleteToDo = async (id: string) => {
  await fetch(`http://localhost:5000/result/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
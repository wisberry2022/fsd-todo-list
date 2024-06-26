import { skeleton } from "../view-data/data";

export const addToDo = async () => {
  await fetch("http://localhost:5000/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: skeleton.title,
      content: skeleton.content,
    }),
  });
};

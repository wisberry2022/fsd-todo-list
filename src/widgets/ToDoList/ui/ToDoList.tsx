import { FC } from "react";
import "./css/index.css";
import { useGetToDoList } from "../model/useGetToDoList";
import { AddToDoBtn, ToDo } from "@/features";

export const ToDoList: FC = () => {
  const { list } = useGetToDoList();

  return (
    <>
      <div className="to-do-list">
        <AddToDoBtn text="Add ToDo" />
        {list
          .slice()
          .reverse()
          .map((todo) => (
            <ToDo key={todo.id} todo={todo} />
          ))}
      </div>
    </>
  );
};

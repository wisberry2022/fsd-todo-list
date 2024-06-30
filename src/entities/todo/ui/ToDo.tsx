import { FC } from "react";
import "@/shared/css/todo.css";
import "./css/index.css";
import { ToDoResponse } from "@/shared/types/Api";

type ToDoProps = {
  toDo: ToDoResponse;
  onEdit: () => void;
  onDelete: () => void;
};

export const ToDo: FC<ToDoProps> = (props) => {
  const { toDo, onEdit, onDelete } = props;

  return (
    <div className="to-do">
      <div className="left">
        <input type="checkbox" className="check" />
        <div className="to-do-title-box">
          <h4>{toDo.title}</h4>
          <p>{toDo.desc}</p>
        </div>
      </div>
      <div className="to-do-btn-box">
        <button onClick={onEdit}>edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

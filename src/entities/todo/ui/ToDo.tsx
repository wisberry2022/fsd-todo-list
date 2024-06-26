import { FC } from "react";
import "@/shared/css/todo.css";
import { ToDo as DataType } from "@/shared/types/ToDo";

type ToDoProps = {
  toDo: DataType;
  onEdit: () => void;
  onDelete: () => void;
};

export const ToDo: FC<ToDoProps> = (props) => {
  const { toDo, onEdit, onDelete } = props;

  return (
    <div className="to-do">
      <div className="to-do-title-box">
        <h4>{toDo.title}</h4>
        <p>{toDo.content}</p>
      </div>
      <div className="to-do-btn-box">
        <button onClick={onEdit}>edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

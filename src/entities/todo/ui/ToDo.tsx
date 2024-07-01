import { ChangeEventHandler, FC } from "react";
import "@/shared/css/todo.css";
import "./css/index.css";
import { ToDoResponse } from "@/shared/types/Api";

type ToDoProps = {
  toDo: ToDoResponse;
  onEdit: () => void;
  onDelete: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const ToDo: FC<ToDoProps> = (props) => {
  const { toDo, onEdit, onDelete, onChange } = props;

  return (
    <div className="to-do">
      <div className="left">
        <input
          type="checkbox"
          name={`todo-${toDo.id}`}
          onChange={onChange}
          className="check"
        />
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

import { ChangeEventHandler, FC } from "react";
import "./css/index.css";
import "@/shared/css/todo.css";
import { ToDo } from "@/shared/types/ToDo";

type EditableToDoProps = {
  toDo: ToDo;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
};

const EditableToDo: FC<EditableToDoProps> = (props) => {
  const { toDo, onChange, onClick } = props;

  return (
    <div className="to-do">
      <div className="to-do-title-box">
        <h4>
          <input
            name="title"
            type="text"
            value={toDo.title}
            onChange={onChange}
            placeholder="write your title of todo"
          />
        </h4>
        <p>
          <input
            name="content"
            type="text"
            value={toDo.content}
            onChange={onChange}
            placeholder="write your content of todo"
          />
        </p>
      </div>
      <div className="to-do-btn-box">
        <button onClick={onClick}>Edit</button>
      </div>
    </div>
  );
};

export default EditableToDo;

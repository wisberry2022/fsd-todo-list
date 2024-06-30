import { ChangeEventHandler, FC, useState } from "react";
import "./css/index.css";
import { useGetToDoList } from "../model/useGetToDoList";
import { AddToDoBtn, FilterToDo, ToDo } from "@/features";
import { ToDoFilter, ToDoStatus } from "@/shared/enum/ToDoEnum";
import { ToDoFilterType } from "@/shared/types/ToDo";

export const ToDoList: FC = () => {
  const { list } = useGetToDoList();
  const [filter, setFilter] = useState<ToDoFilterType>(ToDoFilter.TOTAL);

  const onSelectFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setFilter(value as ToDoFilterType);
  };

  return (
    <>
      <div className="to-do-list">
        <div className="list-wrapper">
          <div className="filter-header">
            <div className="left">
              <AddToDoBtn text="Add ToDo" />
            </div>
            <div className="right">
              <FilterToDo onChange={onSelectFilter} />
            </div>
          </div>
          <div className="to-do-contents">
            {list
              .slice()
              .reverse()
              .filter((todo) => {
                if (filter === ToDoFilter.TOTAL)
                  return todo.status !== ToDoStatus.REMOVED;
                return todo.status === filter;
              })
              .map((todo) => (
                <ToDo key={todo.id} todo={todo} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

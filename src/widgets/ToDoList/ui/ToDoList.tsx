import { ChangeEventHandler, FC, useEffect, useState } from "react";
import "./css/index.css";
import { useGetToDoList } from "../model/useGetToDoList";
import { AddToDoBtn, ConcludeBtn, FilterToDo, ToDo } from "@/features";
import { ToDoFilter, ToDoStatus } from "@/shared/enum/ToDoEnum";
import { ToDoFilterType } from "@/shared/types/ToDo";

export const ToDoList: FC = () => {
  const { list } = useGetToDoList();
  const [filter, setFilter] = useState<ToDoFilterType>(ToDoFilter.TOTAL);
  const [checks, setCheck] = useState<number[]>([]);

  const onSelectFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setFilter(value as ToDoFilterType);
  };

  const onCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;
    const id = Number.parseInt(name.split("-")[1]);
    setCheck((prev) => {
      if (checked) return prev.concat(id);
      return prev.filter((check) => check !== id);
    });
  };

  return (
    <>
      <div className="to-do-list">
        <div className="list-wrapper">
          <div className="filter-header">
            <div className="left">
              <AddToDoBtn text="Add ToDo" />
              <ConcludeBtn targets={checks} text="완료시키기" />
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
                <ToDo key={todo.id} onCheck={onCheck} todo={todo} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

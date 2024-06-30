import { ChangeEventHandler, FC } from "react";
import "./css/index.css";
import { ToDoFilter } from "@/shared/enum/ToDoEnum";

type FilterToDoProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const FilterToDo: FC<FilterToDoProps> = (props) => {
  const { onChange } = props;
  return (
    <select className="filter-select" onChange={onChange}>
      <option value={ToDoFilter.TOTAL}>전체</option>
      <option value={ToDoFilter.PROGRESS}>진행</option>
      <option value={ToDoFilter.CONCLUDE}>완료</option>
      <option value={ToDoFilter.REMOVED}>삭제</option>
    </select>
  );
};

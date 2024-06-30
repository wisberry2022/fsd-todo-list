import { FC } from "react";
import "./css/index.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <div className="title-box">
      <h1 className="title">todo-list by fsd</h1>
      <ul className="menu">
        <li>
          <Link to={`/`}>내 전체 투두리스트</Link>
        </li>
        <li>
          <Link to={"/help"}>완료한 투두리스트</Link>
        </li>
        <li>
          <Link to={"/help"}>삭제한 투두리스트</Link>
        </li>
        <li>
          <Link to={"/help"}>menu4</Link>
        </li>
      </ul>
    </div>
  );
};

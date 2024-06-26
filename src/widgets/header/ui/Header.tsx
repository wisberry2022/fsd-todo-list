import { FC } from "react";
import "./css/index.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <div className="title-box">
      <h1 className="title">todo-list by fsd</h1>
      <ul className="menu">
        <li>
          <Link to={`/`}>todo-list</Link>
        </li>
        <li>
          <Link to={"/help"}>menu2</Link>
        </li>
        <li>
          <Link to={"/help"}>menu3</Link>
        </li>
        <li>
          <Link to={"/help"}>menu4</Link>
        </li>
      </ul>
    </div>
  );
};

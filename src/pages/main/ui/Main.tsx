import { FC } from "react";
import { ToDoList, Header } from "@/widgets/index.ts";

export const Main: FC = () => {
  return (
    <div>
      <Header />
      <ToDoList />
    </div>
  );
};

import { useEffect, useState } from "react";
import { getToDoList } from "../api/fetcher";
import { ToDoResponse } from "@/shared/types/Api";

export const useGetToDoList = () => {
  const [list, setList] = useState<ToDoResponse[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getToDoList();
      setList(response);
    })();
  }, []);

  return { list, setList };
};

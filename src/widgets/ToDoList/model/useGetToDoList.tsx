import { useEffect, useState } from "react";
import { getToDoList } from "../api/fetcher";
import { ToDo } from "@/shared/types/ToDo";

export const useGetToDoList = () => {
  const [list, setList] = useState<ToDo[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getToDoList();
      setList(response);
    })();
  }, []);

  return { list, setList };
};

import { FC } from "react";
import { addToDo } from "../api/fetcher";
import useApi from "@/shared/hooks/useApi";

type AddToDoBtnProps = {
  text: string;
};

export const AddToDoBtn: FC<AddToDoBtnProps> = (props) => {
  const { text } = props;
  const { renewal } = useApi();

  const add = async () => {
    try {
      await addToDo();
      renewal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button className="add-btn" onClick={add}>
      {text}
    </button>
  );
};

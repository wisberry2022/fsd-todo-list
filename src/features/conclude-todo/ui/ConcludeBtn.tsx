import useApi from "@/shared/hooks/useApi";
import { FC } from "react";
import "./css/index.css";
import { concludeFetcher } from "../api/conclude";

type ConcludeBtnProps = {
  text: string;
  targets: number[];
};

export const ConcludeBtn: FC<ConcludeBtnProps> = (props) => {
  const { text, targets } = props;
  const { renewal } = useApi();

  const onClick = async () => {
    try {
      await concludeFetcher(targets);
      renewal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button className="conclude-btn" onClick={onClick}>
      {text}
    </button>
  );
};

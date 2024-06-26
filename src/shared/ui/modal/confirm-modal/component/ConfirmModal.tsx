import { FC } from "react";
import "../css/confirm-modal.css";
import { useRecoilState } from "recoil";
import { modalState } from "../states/states";

type ConfirmModalProps = {
  onConfirm: () => void;
  title: string;
  desc: string;
};

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
  const { onConfirm, title, desc } = props;
  const [open, setOpen] = useRecoilState(modalState);

  const onClose = () => {
    setOpen("");
  };

  return (
    !!open && (
      <div className="modal">
        <div className="modal-body">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <div className="btn-box">
          <button onClick={onConfirm}>확인</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    )
  );
};

export default ConfirmModal;

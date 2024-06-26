import { ToDo as CoreToDo } from "@/entities";
import { ToDo as ToDoType } from "@/shared/types/ToDo";
import { ChangeEventHandler, FC, useState } from "react";
import EditableToDo from "./EditableToDo";
import { deleteToDo, editToDo } from "../api/fetcher";
import useApi from "@/shared/hooks/useApi";
import { useRecoilState } from "recoil";
import { modalState } from "@/shared/ui/modal/confirm-modal/states/states";
import ConfirmModal from "@/shared/ui/modal/confirm-modal/component/ConfirmModal";

type ToDoProps = {
  todo: ToDoType;
};

export const ToDo: FC<ToDoProps> = (props) => {
  const { todo } = props;
  const { renewal } = useApi();
  const [data, setData] = useState<ToDoType>(todo);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [modal, setModal] = useRecoilState(modalState);

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onEdit = async () => {
    try {
      await editToDo(data);
      toggleEdit();
      renewal();
    } catch (e) {
      console.error(e);
    }
  };

  const onDeleteModal = () => {
    setModal(todo.id);
  };

  const onDelete = async () => {
    try {
      await deleteToDo(todo.id);
      setModal("");
      renewal();
    } catch (e) {
      console.error(e);
    }
  };

  if (isEdit) {
    return <EditableToDo toDo={data} onChange={onChange} onClick={onEdit} />;
  }

  return (
    <>
      <CoreToDo toDo={todo} onEdit={toggleEdit} onDelete={onDeleteModal} />
      {modal === todo.id && (
        <ConfirmModal
          title="투두 리스트 삭제"
          desc="삭제하시겠습니까? 삭제된 투두는 다시 복원 할 수 없습니다!"
          onConfirm={onDelete}
        />
      )}
    </>
  );
};

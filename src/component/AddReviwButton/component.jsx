import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/component";
import { Modal } from "../Modal/component";
import { ReviwForm } from "../ReviewForm/component";

export const AddReviwButton = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const onClose = () => setIsModalOpened(false);
  return (
    <>
      <Button title="Add new review" type="primary" onClick={() => setIsModalOpened(true)} />
      {isModalOpened && (
        <Modal title='Create review' onClose={onClose}>
          <ReviwForm
            onSubmit={() => setIsModalOpened(false)}
          />
        </Modal>
      )}
    </>
  );
};

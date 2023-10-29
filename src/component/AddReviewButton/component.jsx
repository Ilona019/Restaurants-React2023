import { useState } from "react";
import { Button } from "../Button/component";
import { Modal } from "../Modal/component";
import { ReviewFormContainer } from "../ReviewForm/container";

export const AddReviewButton = ({ restaurantId }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const onClose = () => setIsModalOpened(false);
  return (
    <>
      <Button
        title="Add new review"
        type="primary"
        onClick={() => setIsModalOpened(true)} />
      {isModalOpened && (
        <Modal title="Create review" onClose={onClose}>
          <ReviewFormContainer restaurantId={restaurantId} onSubmit={() => setIsModalOpened(false)} />
        </Modal>
      )}
    </>
  );
};

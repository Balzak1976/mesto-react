import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({
  popupConfig,
  isOpen: { isOpen, cardId },
  isSaving,
  onClose,
  onCardDelete,
}) {
  const handleSubmit = e => {
    e.preventDefault();
    onCardDelete(cardId);
  };

  return (
    <PopupWithForm
      popupConfig={popupConfig}
      isOpen={isOpen}
      isSaving={isSaving}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default DeleteCardPopup;

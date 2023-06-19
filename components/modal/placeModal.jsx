import React from 'react';

const placeModal = ({ closeModal, title, content }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray/80 bg-opacity-50" // z-index 값을 z-50으로 변경
      onClick={closeModal}
    >
      <div
        className="z-60 h-2/5 w-3/4  rounded bg-white p-6 text-center shadow-lg" // z-index 값을 z-60으로 변경
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1/3">
          <h2 className="text-xl mb-3 font-bold">{title}</h2>
        </div>
        <div className="flex h-2/3 flex-col items-center justify-between">
          {content}
        </div>
      </div>
    </div>
  );
};

export default placeModal;

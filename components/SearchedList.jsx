'use client';
import React, { useState } from 'react';
import addBookmarkPlace from '@/utils/addBookmarkPlace';

import PlaceModal from './modal/placeModal';

const SearchedList = ({
  code,
  content,
  name,
  roadAddress,
  address,
  lat,
  lng,
  onMouseOver,
  onMouseOut,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasPlace, setHasPlace] = useState('등록하기!');

  const showModal = () => {
    setHasPlace('등록하기!');

    setModalVisible(true);
  };

  const closeModal = () => {
    setHasPlace('등록하기!');
    setModalVisible(false);
  };

  const modalContent = (
    <>
      <section>
        <p>{roadAddress}</p>
        <p>{address}</p>
      </section>
      <p className="mt-6">
        <span className="font-extrabold text-mint-em">{name}</span> {hasPlace}
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={closeModal}
          className="mx-2 inline-block rounded-full border-2 border-mint px-4 py-2 font-semibold text-mint hover:bg-mint hover:text-white"
        >
          닫기
        </button>
        <button
          onClick={() =>
            addBookmarkPlace(
              code,
              name,
              roadAddress,
              address,
              lat,
              lng,
              setHasPlace,
            )
          }
          className="mx-2 rounded-full border-2 border-mint bg-mint px-4 py-2 font-semibold text-white hover:bg-white hover:text-mint"
        >
          추가하기
        </button>
      </div>
    </>
  );
  return (
    <div key={content} className="h-4/5">
      {modalVisible && (
        <PlaceModal
          closeModal={closeModal}
          title={name}
          content={modalContent}
        />
      )}
      <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <button onClick={showModal} className="w-full hover:underline">
          <h4 className="my-0 py-0">{name}</h4>
          <p className="my-0 py-0">{address}</p>
        </button>
      </div>
    </div>
  );
};

export default SearchedList;

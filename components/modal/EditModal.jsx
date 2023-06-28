'use client';

import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const EditModal = ({ id, name, closeModal, userDatas, setUserDatas }) => {
  const deleteMyBookmark = () =>
    axios({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: `${Cookies.get('token')}`,
      },
      url: `${process.env.NEXT_PUBLIC_SERVER}/place/delete`,
      data: {
        place_id: id,
      },
    })
      .then((res) => {
        if (res.data.success) {
          const afterDeleted = userDatas.filter((data) => data.id !== id);
          setUserDatas(afterDeleted);
          return;
        }
      })
      .then((err) => {});

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray/80 bg-opacity-50" // z-index 값을 z-50으로 변경
      onClick={closeModal}
    >
      <div
        className="z-60 h-1/2 w-3/4 rounded bg-white p-6  text-center shadow-lg" // z-index 값을 z-60으로 변경
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-extrabold">{name}</h2>
          <section>
            <h3 className="font-semibold">태그를 등록해주세요.</h3>
          </section>
          <div className="flex items-end justify-center">
            <button
              onClick={closeModal}
              className="mx-2 inline-block rounded-full border-2 border-mint px-4 py-2 font-semibold text-mint hover:bg-mint hover:text-white"
            >
              아니요!
            </button>
            <button
              onClick={deleteMyBookmark}
              className="mx-2 inline-block rounded-full border-2 border-warning px-4 py-2 font-semibold text-warning hover:bg-warning hover:text-white"
            >
              삭제!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

import React, { useState } from 'react';
import Spinner from '@/components/svg/Spinner';
import EditModal from './modal/EditModal';
import DeleteModal from './modal/deleteModal';
import InfoModal from './modal/InfoModal';
import EditPen from './svg/EditPen';
import TrashBin from './svg/TrashBin';

const UserInfo = ({
  id,
  data,
  name,
  cnt,
  roadAddress,
  userDatas,
  setUserDatas,
  isLoading,
}) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  const showEditModal = (e) => {
    e.stopPropagation();
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const showDeleteModal = (e) => {
    e.stopPropagation();
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const showInfoModal = (e) => {
    e.stopPropagation();
    setInfoModalVisible(true);
  };

  const closeInfoModal = () => {
    setInfoModalVisible(false);
  };

  return (
    <>
      <div
        className={`my-2 flex h-[5vh] w-full items-center justify-between overflow-hidden rounded-md bg-white shadow md:justify-between lg:justify-start`}
      >
        {name && (
          <>
            <div
              onClick={showInfoModal}
              className="mx-4 w-1/2 cursor-pointer font-semibold text-mint-em md:w-1/4"
            >
              {name}
            </div>
            <div className="hidden w-1/3 flex-grow text-gray/80 lg:inline-block">
              {roadAddress}
            </div>
            {name !== '북마크를 등록해주세요!' && (
              <div className="flex w-1/6 items-center justify-center">
                <button
                  onClick={showEditModal}
                  className="mx-2 h-full hover:animate-bounce"
                >
                  <EditPen />
                </button>

                <button
                  className="mx-2 h-full hover:animate-pulse"
                  onClick={showDeleteModal}
                >
                  <TrashBin />
                </button>
              </div>
            )}
          </>
        )}
        {isLoading && (
          <div className="flex h-full w-full animate-pulse items-center justify-center bg-gradient-to-br from-white via-mint/30 to-mint/50">
            <Spinner />
          </div>
        )}
      </div>
      {editModalVisible && (
        <EditModal id={id} name={name} cnt={cnt} closeModal={closeEditModal} />
      )}
      {deleteModalVisible && (
        <DeleteModal
          userDatas={userDatas}
          setUserDatas={setUserDatas}
          id={id}
          name={name}
          closeModal={closeDeleteModal}
        />
      )}
      {infoModalVisible && (
        <InfoModal data={data} closeModal={closeInfoModal} />
      )}
    </>
  );
};

export default UserInfo;

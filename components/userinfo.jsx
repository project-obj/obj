import React from 'react';
import Spinner from '@/components/svg/Spinner';

const UserInfo = ({ name, roadAddress, isLoading }) => {
  return (
    <div
      className={`my-2 flex h-[5vh] w-full items-center justify-start overflow-hidden rounded-md bg-white`}
    >
      {name && (
        <>
          <div className="mx-2 w-1/5 flex-grow text-mint">{name}</div>
          <div className="hidden w-1/3 flex-grow text-gray/80 md:inline-block">
            {roadAddress}
          </div>
          <button className="mx-2 flex-none rounded border border-mint px-1">
            삭제
          </button>
        </>
      )}
      {isLoading && (
        <div className="flex h-full w-full animate-pulse items-center justify-center bg-gradient-to-br from-white via-mint/30 to-mint/50">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default UserInfo;

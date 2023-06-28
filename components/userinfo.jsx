import React from 'react';

const UserInfo = ({ name, roadAddress, id }) => {
  return (
    <div className="my-2 flex h-[5vh] w-full flex-col items-center justify-center rounded-md bg-white">
      <div className="grid grid-cols-10 justify-around gap-6 text-center">
        <div className="col-span-3 col-start-1 text-mint">{name}</div>
        <div className="col-span-4 col-start-4 text-mint">{roadAddress}</div>
        <div className="col-span-2 col-start-8 text-mint">{id}</div>
        <button className="col-start-10 w-[3vw] rounded bg-mint text-white">
          삭제
        </button>
      </div>
    </div>
  );
};

export default UserInfo;

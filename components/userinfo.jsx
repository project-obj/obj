import React from 'react';

const UserInfo = ({ name }) => {
  return (
    <div className="mx-auto my-1 flex w-9/12 flex-col items-center justify-center rounded-md border border-mint bg-white">
      <div className="rounded bg-mint">{name}</div>
    </div>
  );
};

export default UserInfo;

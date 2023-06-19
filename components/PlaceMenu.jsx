import React from 'react';

const PlaceMenu = () => {
  return (
    <div className="flex h-[10vh] w-screen items-center">
      <div className="max-w-2/5 ml-2 rounded border border-mint bg-white ">
        <div className="grid grid-cols-4 divide-x divide-dashed divide-mint text-center">
          <div className="px-1 hover:cursor-pointer">약속장소</div>
          <div className="px-1 hover:cursor-pointer">북마크 등록</div>
          <div className="px-1 hover:cursor-pointer">내 북마크</div>
          <div className="px-1 hover:cursor-pointer">추천장소</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceMenu;

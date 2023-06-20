import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

const PlaceMenu = () => {
  return (
    <div className="flex h-[10vh] w-screen items-center">
      <div className="ml-2 rounded border border-mint bg-white">
        <div className="grid grid-cols-4 divide-x divide-dashed divide-mint text-center">
          <div className="px-1 hover:cursor-pointer">
            <button>약속장소</button>
          </div>
          <div className="px-1 hover:cursor-pointer">북마크 등록</div>
          <div className="px-1 hover:cursor-pointer">
            <Link href={`/place/${Cookies.get('userid')}`}>마이 북마크</Link>
          </div>
          <div className="px-1 hover:cursor-pointer">
            <Link href="/place/rank">핫플레이스</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceMenu;

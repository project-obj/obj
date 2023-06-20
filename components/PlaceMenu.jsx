import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

const PlaceMenu = () => {
  return (
    <div className="flex h-[10vh] w-screen items-center">
      <div className="ml-2 rounded border border-mint bg-white">
        <div className="grid grid-cols-2 divide-x divide-dashed divide-mint text-center">
          <div className="px-1 hover:cursor-pointer">
            <Link
              href={`/user/${
                !!Cookies.get('userid') ? Cookies.get('userid') : ''
              }`}
              className={`!!${Cookies.get('userid') ? '' : 'hidden'}`}
            >
              마이 북마크
            </Link>
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

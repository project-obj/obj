'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import UserInfo from '@/components/userinfo';
import Cookies from 'js-cookie';
import Paging from '@/components/pageNation';

const page = ({ params }) => {
  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/user/${params.userid}`, {
        headers: {
          'Content-Type': 'application/json',
          token: `${Cookies.get('token')}`,
        },
        withCredentials: true,
      })
      .then((res) => res?.data?.Places || [])
      .then((data) => setUserDatas([...data]));
  }, []);

  console.log(userDatas);

  return (
    <div className="flex w-screen flex-col items-center justify-start">
      <div className="flex h-[15vh] items-center">
        <Link href={'/place'}>
          <button className="my-auto box-border block rounded-md border-none border-mint bg-mint px-20 py-4 font-bold text-white hover:bg-mint/80">
            등록하러 가기!
          </button>
        </Link>
      </div>

      <div className="h-[75vh] w-screen">
        <div className="flex h-[80%] justify-around">
          <div className="w-[45vw] flex-col items-center justify-start rounded ">
            <h3 className="font-bold">내 장소</h3>
            {userDatas.map((place) => (
              <UserInfo
                key={`${place.id}: ${place.place_name}`}
                name={place.place_name}
              />
            ))}
            <div className="flex justify-around ">
              <Paging className="rounded-md bg-mint px-3 py-1" />
            </div>
          </div>
          <div className="w-[30vw] items-center justify-start rounded bg-white">
            <div className="m-3 grid grid-cols-10 justify-around gap-4 text-center">
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
            </div>
            <div className="m-3 grid grid-cols-10 justify-around gap-4 text-center">
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
            </div>
            <div className="m-3 grid grid-cols-10 justify-around gap-4 text-center">
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
              <div className="col-span-2 rounded-md bg-mint">태그</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

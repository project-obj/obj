'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserInfo from '@/components/userinfo';
import Cookies from 'js-cookie';

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

  return (
    <div className="flex w-screen flex-col items-center justify-start">
      <div className="flex h-[15vh] items-center">
        <button className="my-auto box-border block rounded-md border-none border-mint bg-mint px-20 py-4 font-bold text-white hover:bg-mint/80">
          등록하기
        </button>
      </div>

      <div className="h-[75vh] w-screen">
        <div className="flex h-[90%] justify-around">
          <div className="w-[30vw] flex-col items-center justify-start rounded bg-white">
            {userDatas.map((place) => (
              <UserInfo name={place.place_name} />
            ))}
          </div>
          <div className="w-[45vw] flex-col items-center justify-start rounded bg-white">
            <h3 className="font-bold">태그</h3>
            <section>dsds</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import UserInfo from '@/components/userinfo';
import Cookies from 'js-cookie';
import Pagination from 'react-js-pagination';

const page = ({ params }) => {
  const [showingDatas, setShowingDatas] = useState([]);
  const [userDatas, setUserDatas] = useState([]);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

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
      .then((data) => {
        setUserDatas([...data]);
        setShowingDatas([...data]);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="flex w-screen flex-col items-center justify-start">
      <div className="flex h-[10vh] items-center">
        <Link href={'/place'}>
          <button className="my-auto box-border block rounded-md border-none border-mint bg-mint px-20 py-4 font-bold text-white hover:bg-mint/80">
            등록하러 가기!
          </button>
        </Link>
      </div>

      <div className="h-[75vh] w-screen">
        <div className="flex justify-around">
          <div className="w-4/5 flex-col items-center justify-start rounded md:w-[65vw]">
            <h3 className="text-center font-bold">⭐️마이 북마크⭐️</h3>
            {isLoading || !!showingDatas.length ? (
              showingDatas
                .slice(items * (page - 1), items * (page - 1) + items)
                .map((place) => (
                  <UserInfo
                    key={`${place.id}: ${place.place_name}`}
                    id={place.id}
                    cnt={place.cnt}
                    name={place.place_name}
                    roadAddress={place.roadAddress}
                    setShowingDatas={setShowingDatas}
                    showingDatas={showingDatas}
                  />
                ))
            ) : (
              <UserInfo name="북마크를 등록해주세요!" />
            )}
            {isLoading &&
              new Array(10).fill(<UserInfo isLoading={isLoading} />)}

            {showingDatas.length > 10 && (
              <Pagination
                activePage={page}
                itemsCountPerPage={items}
                totalItemsCount={showingDatas.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                innerClass="flex w-full justify-around"
                activeClass="bg-mint/80"
                itemClass="px-2 rounded-md"
              ></Pagination>
            )}
          </div>

          <div className="hidden w-[30vw] items-center justify-start md:block">
            <h3 className="text-center font-bold">📌태그</h3>
            <div className="rounded bg-white">
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
    </div>
  );
};

export default page;

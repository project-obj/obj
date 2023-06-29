'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import UserInfo from '@/components/userinfo';
import Cookies from 'js-cookie';
import Pagination from 'react-js-pagination';

const checkBoxList = [
  '데이트',
  '분위기맛집',
  '인생사진',
  '뷰맛집',
  '쇼핑',
  '맛집',
  '소주한잔',
  '여행',
  '건강',
  '레저',
];

const wishCheckList = ['또 가고 싶어요!', '가고 싶어요!', '좋았어요!'];

const page = ({ params }) => {
  const [userDatas, setUserDatas] = useState([]);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const [checkedList, setCheckedList] = useState([]);

  const [wish, setWish] = useState('');

  const checkedItemHandler = (value) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }
    setCheckedList((prev) => [...prev, value]);
    return;
  };

  const checkHandler = (value) => {
    checkedItemHandler(value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/user/${params.userid}`, {
        headers: {
          'Content-Type': 'application/json',
          token: `${Cookies.get('token')}`,
        },
        withCredentials: true,
      })
      .then((res) => res?.data || [])
      .then((data) => setUserDatas([...data]))
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
            {isLoading || !!userDatas.length ? (
              userDatas
                .slice(items * (page - 1), items * (page - 1) + items)
                .map((place) => (
                  <UserInfo
                    key={`${place.id}: ${place.place_name}`}
                    data={place}
                    id={place.id}
                    cnt={place.cnt}
                    name={place.place_name}
                    roadAddress={place.roadAddress}
                    setUserDatas={setUserDatas}
                    userDatas={userDatas}
                  />
                ))
            ) : (
              <UserInfo name="북마크를 등록해주세요!" />
            )}
            {isLoading &&
              new Array(10).fill(<UserInfo isLoading={isLoading} />)}

            {userDatas.length > 10 && (
              <Pagination
                activePage={page}
                itemsCountPerPage={items}
                totalItemsCount={userDatas.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                innerClass="flex w-full justify-around"
                activeClass="bg-mint/60 px-2 text-white"
                itemClass="px-2 rounded-md border border-gray/60"
              ></Pagination>
            )}
          </div>

          <div className="hidden w-[30vw] items-center justify-start md:block">
            <h3 className="mb-2 rounded bg-mint/70 text-center font-semibold text-white shadow-lg">
              📌태그
            </h3>
            <div className="min-w-[150px] px-4 py-3 font-bold">
              {wishCheckList.map((item, idx) => (
                <div className="radio" key={idx + item}>
                  <div className="relative mb-1 h-8">
                    <input
                      type="radio"
                      id={item}
                      value={item}
                      name="wish"
                      className={`peer h-full w-full cursor-pointer appearance-none rounded-lg bg-light/80 shadow-lg transition-all duration-200 checked:bg-pink hover:bg-pink hover:text-white`}
                      onClick={() => {
                        setWish(item);
                      }}
                    ></input>
                    <label
                      htmlFor={item}
                      className={`absolute left-3 top-[50%] -translate-y-[50%] select-none text-white transition-all duration-200`}
                    >
                      {item}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="min-w-[150px] rounded px-4 py-3 font-bold">
              {checkBoxList.map((item, idx) => (
                <div className="checkbox" key={idx}>
                  <div className="relative mb-1 h-8">
                    <input
                      type="checkbox"
                      id={item}
                      className="peer h-full w-full cursor-pointer appearance-none rounded-lg bg-gray/10 shadow-lg transition-all duration-200 checked:bg-mint hover:bg-gray/20 checked:hover:bg-mint/30"
                      onChange={() => checkHandler(item)}
                    ></input>
                    <label
                      htmlFor={item}
                      className="absolute left-3 top-[50%] -translate-y-[50%] select-none text-gray/90 transition-all duration-200 peer-checked:text-white"
                    >
                      #{item}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

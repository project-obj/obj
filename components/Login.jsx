'use client';
import React, { useState } from 'react';
import Input from '@/components/Input';
import IdCard from '@/components/svg/IdCard';
import Lock from '@/components/svg/Lock';
import Link from 'next/link';
import Form from './Form';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const router = useRouter();
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // const response = await axios({
    //   method: 'POST',
    //   url: `${process.env.NEXT_PUBLIC_SERVER}/user/login`,
    //   data: {
    //     userid: idInput,
    //     password: pwInput,
    //   },
    // });

    // const { token, name } = response.data;
    // Cookies.set('token', token);
    // Cookies.set('name', name);

    // setIdInput('');
    // setPwInput('');
    Cookies.set('name', '이이이이이잉');

    router.push('/');
  };

  return (
    <main className="mt-[40px] flex w-full flex-1 flex-col items-center text-center lg:mt-[100px] lg:px-20">
      <div className="w-4/5 rounded-2xl bg-white lg:hidden">
        <div className="w-full p-5">
          <div className="text-left font-bold">
            <span className="text-mint">OBJ</span>ect.
          </div>
          <div className="py-10">
            <h2 className="text-[24px] font-bold text-mint-em">
              로그인이 필요해요.
            </h2>
          </div>
          <div className="mb-2 inline-block w-10 border-2 border-mint"></div>
          <Form onSubmit={(e) => handleLoginSubmit(e)}>
            <Input
              svg={<IdCard />}
              type="text"
              placeholder="ID를 입력해주세요."
              value={idInput}
              onChange={(e) => {
                setIdInput(e.target.value);
              }}
            />
            <Input
              svg={<Lock />}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={pwInput}
              onChange={(e) => {
                setPwInput(e.target.value);
              }}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="mx-1 inline-block rounded-full border-2 border-mint bg-mint px-8 py-2 font-semibold text-white hover:bg-white hover:text-mint"
              >
                로그인
              </button>
              <Link
                href="/user/signup"
                className="mx-1 inline-block rounded-full border-2 border-mint px-8 py-2 font-semibold hover:bg-white hover:text-mint"
              >
                회원가입
              </Link>
            </div>
          </Form>
        </div>
      </div>
      {/* if width > 1024px */}
      <div className="mx-auto hidden w-3/4 max-w-4xl rounded-2xl bg-white lg:flex">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-mint">OBJ</span>ect.
          </div>
          <div className="py-10">
            <h2 className="text-[24px] font-bold text-mint-em">
              로그인이 필요해요.
            </h2>
          </div>
          <div className="mb-2 inline-block w-10 border-2 border-mint"></div>
          <Form onSubmit={(e) => handleLoginSubmit(e)}>
            <Input
              svg={<IdCard />}
              type="text"
              placeholder="ID를 입력해주세요."
              value={idInput}
              onChange={(e) => {
                setIdInput(e.target.value);
              }}
            />
            <Input
              svg={<Lock />}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={pwInput}
              onChange={(e) => {
                setPwInput(e.target.value);
              }}
            />
            <button
              type="submit"
              className="inline-block rounded-full border-2 border-mint bg-mint px-12 py-2 font-semibold text-white hover:bg-white hover:text-mint"
            >
              로그인
            </button>
          </Form>
        </div>

        <div className="w-2/5 rounded-br-2xl rounded-tr-2xl bg-mint/80 px-12 py-36 text-white">
          <h2 className="mb-2 font-bold">계정이 없으신가요?</h2>
          <div className="mb-2 inline-block w-10 border-2 border-white"></div>
          <p className="mb-2">
            OBJect에 가입하고
            <br />
            후회없는 외출을 누리세요.
          </p>
          <Link
            href="/user/signup"
            className="rounded-full border-2 border-white px-12 py-2 text-[12px] font-semibold hover:bg-white hover:text-mint"
          >
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;

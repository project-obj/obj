'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import UserFormWrapper from './UserFormWrapper';
import Input from '@/components/Input';
import IdCard from '@/components/svg/IdCard';
import Lock from '@/components/svg/Lock';
import Form from './Form';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import Cookies from 'js-cookie';

import useInput from '@/hooks/useInput';
import useCurrentUser from '@/hooks/useCurrentUser';

const Login = () => {
  const router = useRouter();
  const [logInError, setLogInError] = useState(false);
  const [idInput, setIdInput] = useInput('');
  const [pwInput, setPwInput] = useInput('');

  const { userData, error, isLoading, mutate } = useCurrentUser();

  const handleLoginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);

      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER}/user/login`, {
          userid: idInput,
          password: pwInput,
        })
        .then((res) => {
          Cookies.set('token', res.data.token, { expires: 1 });
          Cookies.set('name', res.data.name, { expires: 1 });
          Cookies.set('userid', idInput, { expires: 1 });
          axios.defaults.headers.common['token'] = res.data.token;
          mutate();
        })
        .catch((error) => {
          console.dir(error);
          setLogInError(error.response?.status === 401);
        });
    },
    [idInput, pwInput, mutate],
  );

  useEffect(() => {
    if (!error && userData) {
      console.log('로그인됨', userData);
      return router.push('/');
    }
  }, [userData]);

  if (!error && userData) {
    console.log('로그인됨', userData);
    return router.push('/');
  }
  return (
    <UserFormWrapper
      type="login"
      message="로그인이 필요해요."
      question="아직 가입하지 않으셨나요?"
    >
      <Form onSubmit={handleLoginSubmit}>
        <Input
          svg={<IdCard />}
          type="text"
          placeholder="ID를 입력해주세요."
          value={idInput}
          onChange={setIdInput}
        />
        <Input
          svg={<Lock />}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={pwInput}
          onChange={setPwInput}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-block rounded-full border-2 border-mint bg-mint px-8 py-2 font-semibold text-white hover:bg-white hover:text-mint"
          >
            로그인
          </button>
          <Link
            href="/user/signup"
            className="mx-1 inline-block rounded-full border-2 border-mint px-8 py-2 font-semibold hover:bg-white hover:text-mint md:hidden"
          >
            회원가입
          </Link>
        </div>
      </Form>
    </UserFormWrapper>
  );
};

export default Login;

'use client';
import React, { useCallback } from 'react';
import Link from 'next/link';
import UserFormWrapper from './UserFormWrapper';
import Input from '@/components/Input';
import Form from './Form';
import { useRouter } from 'next/navigation';

import axios from 'axios';

import useInput from '@/hooks/useInput';
import useCurrentUser from '@/hooks/useCurrentUser';

const SignUp = () => {
  const { userData } = useCurrentUser();
  const router = useRouter();
  const [nameInput, setNameInput] = useInput('');
  const [idInput, setIdInput] = useInput('');
  const [pwInput, setPwInput] = useInput('');

  const handleSignUpSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER}/user/signup`,
          {
            name: nameInput,
            userid: idInput,
            password: pwInput,
          },
        );
        if (res.status === 201) {
          router.push('/user/login');
        }
      } catch (error) {
        console.log(error);
      }
    },
    [nameInput, idInput, pwInput],
  );

  if (userData) {
    return router.push('/');
  }

  return (
    <UserFormWrapper
      type="signup"
      message="MARKER가 되어주세요."
      question="이미 회원이라면?"
    >
      <Form onSubmit={handleSignUpSubmit}>
        <Input
          type="text"
          placeholder="이름을 입력해주세요."
          value={nameInput}
          onChange={setNameInput}
        />
        <Input
          type="text"
          placeholder="ID를 입력해주세요."
          value={idInput}
          onChange={setIdInput}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={pwInput}
          onChange={setPwInput}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-block rounded-full border-2 border-mint bg-mint px-12 py-2 font-semibold text-white hover:bg-white hover:text-mint"
          >
            회원가입
          </button>
          <Link
            href="/user/signup"
            className="mx-1 inline-block rounded-full border-2 border-mint px-8 py-2 font-semibold hover:bg-white hover:text-mint md:hidden"
          >
            로그인
          </Link>
        </div>
      </Form>
    </UserFormWrapper>
  );
};

export default SignUp;

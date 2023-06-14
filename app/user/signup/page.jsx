'use client';
import React, { useState } from 'react';
import FormField from '@/components/FormField';
import Input from '@/components/Input';
import IdCard from '@/components/svg/IdCard';
import Lock from '@/components/svg/Lock';
import Link from 'next/link';

import axios from 'axios';

const SignUp = () => {
  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleSignUp = async () => {
    const response = await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_SERVER}/user/join`,
      data: {
        userid: idInput,
        name: nameInput,
        email: emailInput,
        password: pwInput,
      },
    });
    console.log(response);
  };

  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh/1.5)]">
      <div
        className={`
        bg-SignUp w-[300px] md:w-[420px] rounded-lg shadow-lg 
        overflow-hidden before:content-[""] before:absolute 
        before:bg-transparent before:w-[55px] 
        before:right-[40px] before:bottom-[45px] 
        before:h-[55px] before:z-10`}
      >
        <div className="block text-center bg-mint">
          <FormField>
            <Input
              svg={<IdCard />}
              placeholder="ID"
              type="text"
              value={idInput}
              onChange={(e) => {
                setIdInput(e.target.value);
              }}
            />
          </FormField>
          <FormField>
            <Input
              svg={<IdCard />}
              placeholder="E-mail"
              type="email"
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
          </FormField>
          <FormField>
            <Input
              svg={<IdCard />}
              placeholder="성함을 입력해주세요."
              type="text"
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
            />
          </FormField>

          <Input
            svg={<Lock />}
            placeholder="Password"
            type="password"
            value={pwInput}
            onChange={(e) => {
              setPwInput(e.target.value);
            }}
          />
          <button onClick={handleSignUp}>확인</button>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

'use client';
import React, { useState } from 'react';
import FormField from '@/components/FormField';
import Input from '@/components/Input';
import IdCard from '@/components/svg/IdCard';
import Lock from '@/components/svg/Lock';
import Link from 'next/link';

import axios from 'axios';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleLogin = async () => {
    const response = await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_SERVER}/user/login`,
      data: {
        userid: idInput,
        password: pwInput,
      },
    });
    console.log(response);
    setIdInput('');
    setPwInput('');
  };

  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh/1.5)]">
      <div
        className={`
        bg-login w-[300px] md:w-[420px] rounded-lg shadow-lg 
        overflow-hidden before:content-[""] before:absolute 
        before:bg-transparent before:w-[55px] 
        before:right-[40px] before:bottom-[45px] 
        before:h-[55px] before:z-10`}
      >
        <div className="block text-center bg-mint">
          <div className="block box-border w-full m-0 mb-[30px] p-[40px] text-[19px] bg-beige/30">
            <h2 className="text-light">계정이 없으신가요?</h2>
            <button>
              <Link href="">회원가입</Link>
            </button>
          </div>
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

          <Input
            svg={<Lock />}
            placeholder="Password"
            type="password"
            value={pwInput}
            onChange={(e) => {
              setPwInput(e.target.value);
            }}
          />
          <button onClick={handleLogin}>확인</button>
        </div>
      </div>
    </main>
  );
};

export default Login;

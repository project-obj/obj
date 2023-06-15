'use client';
import React, { useState } from 'react';
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
    <main className="flex h-[calc(100vh/1.5)] flex-col items-center justify-center">
      <div
        className={`
        bg-SignUp before:bg-transparent w-[300px] overflow-hidden rounded-lg 
        shadow-lg before:absolute before:bottom-[45px] 
        before:right-[40px] before:z-10 
        before:h-[55px] before:w-[55px] 
        before:content-[""] md:w-[420px]`}
      >
        <div className="block bg-mint text-center">
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

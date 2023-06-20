'use client';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const page = ({ params }) => {
  console.log(params.userid);
  useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        token: `${Cookies.get('token')}`,
      },
      url: `${process.env.NEXT_PUBLIC_SERVER}/user/myPlace`,
      data: {
        loginid: params.userid,
      },
      withCredentials: true,
    });
  }, []);

  return <div>page</div>;
};

export default page;

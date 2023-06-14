'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './svg/Hamburger';
import XButton from './svg/XButton';

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <header className="relative">
      <div className="bg-[#F5EFE7] py-[10px] border-b border-[#4F709C]/[0.2] top-0 left-0 right-0 sticky z-40">
        <nav className="flex flex-wrap max-w-6xl mx-auto px-[20px] justify-between items-center">
          <div>
            <Link href="/" className="flex justify-start items-center">
              <Image
                width={50}
                height={50}
                src="/img/logo.png"
                priority
                alt="logo"
              />
              <p>OBJect.</p>
            </Link>
          </div>
          {/* 모바일 */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
              {isMenuOpened ? <XButton /> : <Hamburger />}
            </button>
          </div>
          {/* 태블릿++ */}
          <div className="hidden md:block w-64">
            <ul className="flex justify-between items-center">
              <li>
                <Link href="/list">
                  <p className="hover:scale-110">북마크</p>
                </Link>
              </li>
              <li>
                <Link href="/user/:id">
                  <p className="hover:scale-110">마이페이지</p>
                </Link>
              </li>
              <li>
                <Link href="/rank">
                  <p className="hover:scale-110">여기어때?</p>
                </Link>
              </li>
              <li>
                <Link href="/user/login">
                  <p className="hover:scale-110 hover:text-[#4F709C]">로그인</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* 모바일 드롭박스 */}
      {isMenuOpened ? (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 z-30 shadow-lg">
          <ul className="divide-y divide-[#EBEBEB]">
            <li className="px-6 py-3">
              <Link href="/list">
                <p className="block text-center">북마크</p>
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link href="/user/:id">
                <p className="block text-center">마이페이지</p>
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link href="/rank">
                <p className="block text-center">여기어때?</p>
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link href="/user/login">
                <p className="block text-center">로그인</p>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;

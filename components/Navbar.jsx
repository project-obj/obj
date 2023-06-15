'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './svg/Hamburger';
import XButton from './svg/XButton';

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const user = 1;
  return (
    <header className="relative w-screen">
      <div className="sticky left-0 right-0 top-0 z-40 border-b border-[#4F709C]/[0.2] bg-white py-[10px]">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-[20px]">
          <div>
            <Link href="/" className="flex items-center justify-start">
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
          <div className="hidden w-80 md:block">
            <ul className="flex items-center justify-between">
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
              {!!user ? (
                <li>
                  <Link href="/user">
                    <p className="hover:scale-110 hover:text-[#4F709C]">
                      {user}
                    </p>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href="/user/login">
                    <p className="hover:scale-110 hover:text-[#4F709C]">
                      로그인
                    </p>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
      {/* 모바일 드롭박스 */}
      {isMenuOpened ? (
        <div className="absolute left-0 right-0 top-full z-30 bg-white shadow-lg md:hidden">
          <ul className="divide-y divide-[#EBEBEB]">
            <li className="px-6 py-3">
              <Link onClick={() => setIsMenuOpened(false)} href="/list">
                <p className="block text-center">북마크</p>
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link onClick={() => setIsMenuOpened(false)} href="/user/:id">
                <p className="block text-center">마이페이지</p>
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link onClick={() => setIsMenuOpened(false)} href="/rank">
                <p className="block text-center">여기어때?</p>
              </Link>
            </li>
            {!!user ? (
              <li className="px-6 py-3">
                <Link onClick={() => setIsMenuOpened(false)} href="/user">
                  <p className="block text-center">계정</p>
                </Link>
              </li>
            ) : (
              <li className="px-6 py-3">
                <Link onClick={() => setIsMenuOpened(false)} href="/user/login">
                  <p className="block text-center">로그인</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;

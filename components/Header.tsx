"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const activeLinkClasses = "bg-gray-100 text-black rounded-full shadow-md";    // 마우스 올려서 활성화 되었을 때
  const inactiveLinkClasses = "text-black";                                     // 기본
  
  return (    // ~ 8/25 디자인 수정하기
    <header className="w-full flex flex-col items-center justify-start">
      <img
        src="/Hello.svg"
        alt="Hello 로고"
        className="w-[100px] mb-4"
      />

      <nav className="mt-8 w-full">
        <ul className="space-y-4">
          <li>
            <Link 
              href="/viral-sounds"
              className={`w-full flex items-center gap-2 px-6 py-3 font-semibold transition-colors
                          hover:bg-gray-100 hover:text-black rounded-full
                          ${pathname === '/Home' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              <span role="img" aria-label="Home">🏠</span>
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/viral-sounds"
              className={`w-full flex items-center gap-2 px-6 py-3 font-semibold transition-colors
                          hover:bg-gray-100 hover:text-black rounded-full
                          ${pathname === '/viral-sounds' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              <span role="img" aria-label="Viral Sounds">📊</span>
              Viral Sounds
            </Link>
          </li>
          <li>
            <Link 
              href="/explore"
              className={`w-full flex items-center gap-2 px-6 py-3 font-semibold transition-colors
                          hover:bg-gray-100 hover:text-black rounded-full
                          ${pathname === '/explore' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              <span role="img" aria-label="Explore">🌐</span>
              Explore
            </Link>
          </li>
          <li>
            <Link 
              href="/notifications"
              className={`w-full flex items-center gap-2 px-6 py-3 font-semibold transition-colors
                          hover:bg-gray-100 hover:text-black rounded-full
                          ${pathname === '/notifications' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              <span role="img" aria-label="Notifications">🔔</span>
              Notifications
            </Link>
          </li>
          <li>
            <Link 
              href="/profile"
              className={`w-full flex items-center gap-2 px-6 py-3 font-semibold transition-colors
                          hover:bg-gray-100 hover:text-black rounded-full
                          ${pathname === '/profile' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              <span role="img" aria-label="Profile">👤</span>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
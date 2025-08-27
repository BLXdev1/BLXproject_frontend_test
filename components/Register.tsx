"use client";

import React from 'react';

interface RegisterModalProps {    // 회원 가입 창 열고 닫는 props
  onClose: () => void;
}

export default function RegisterModal({ onClose }: RegisterModalProps) {
  return (    // ~8/25 디자인 수정하기
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">회원가입</h2>
        <form>
          {/* ... registration form ... */}
          <input type="text" placeholder="아이디" className="border p-2 mb-2 w-full" />
          <input type="nickname" placeholder="닉네임" className="border p-2 mb-2 w-full" />
          <input type="password" placeholder="비밀번호" className="border p-2 mb-2 w-full" />
          <input type="Email" placeholder="이메일" className="border p-2 mb-4 w-full" />
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">회원가입</button>
        </form>
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700">닫기</button>
      </div>
    </div>
  );
}
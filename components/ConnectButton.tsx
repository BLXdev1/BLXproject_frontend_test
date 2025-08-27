"use client";

import React, {useState} from "react";
import Login from './Login';
import Register from './Register';

export default function ConnectButton() {
  const [showLoginModal, setShowLoginModal] = useState(false);    // true 됐을 때만 보이도록 함. 클릭하기 전에는 false로 초기화하여 안보이게
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

  const handleOpenRegister = () => setShowRegisterModal(true);
  const handleCloseRegister = () => setShowRegisterModal(false);

  /* const handleConnect = () => {
    window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=Xaman+%EC%A7%80%EA%B0%91+%EC%97%B0%EA%B2%B0&ackey=a898w0zi', '_blank', 'noopener,noreferrer');
  }; 나중에 지갑 연결할 때 주석 해제, 링크에 지갑 연결 링크 삽입*/

  return (    // ~ 8/25 디자인 수정하기
    <div className="flex flex-col gap-2">
      <button
        // onClick={handleConnect}    나중에 지갑 연결할 때 주석 해제
        className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition-colors mt-2"
      >
        CONNECT
      </button>

      <button
        onClick={handleOpenLogin}
        className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        로그인
      </button>

      <button
        onClick={handleOpenRegister}
        className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        회원가입
      </button>

      {showLoginModal && <Login onClose={handleCloseLogin} />}
      {showRegisterModal && <Register onClose={handleCloseRegister} />}
    </div>
  );
}
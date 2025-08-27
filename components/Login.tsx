"use client";

import React, { useState } from 'react';

interface LoginModalProps {     // 로그인 창 열고 닫는 props
    onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
    const [rememberMe, setRememberMe] = useState(false);        // 아이디 기억하기 useState false로 초기화

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {      // 체크 박스 파라미터
        setRememberMe(e.target.checked);
    };

    return (    // ~ 8/25 디자인 수정하기
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">로그인</h2>
                <form>
                    {/* ... login form ... */}
                    <input type="text" placeholder="아이디" className="border p-2 mb-2 w-full" />
                    <input type="password" placeholder="비밀번호" className="border p-2 mb-2 w-full" />
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="remember-me"
                            checked={rememberMe}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="remember-me">아이디 기억하기</label>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">로그인</button>
                </form>
                <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700">닫기</button>
            </div>
        </div>
    );
}
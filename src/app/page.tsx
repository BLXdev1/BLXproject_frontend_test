"use client";

import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import ConnectButton from "../../components/ConnectButton";

export default function Home() {
  return (
    <div className="grid grid-cols-[300px_minmax(0,1fr)_150px] h-screen">
      {/* 왼쪽 메뉴창 (Header)*/}
      <aside className="bg-white p-4 flex items-start justify-center">
        <Header />
      </aside>

      {/* 메인 컨텐츠 영역 */}
      <main className="overflow-y-auto bg-white border-x-2 border-gray-200">
        <MainContent />
      </main>

      {/* Xaman connect 버튼 */}
      <aside className="bg-white p-4 flex items-start justify-center">
        <ConnectButton />
      </aside>
    </div>
  );
}
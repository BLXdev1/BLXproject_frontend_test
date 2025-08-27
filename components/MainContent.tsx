"use client";

import { useState, KeyboardEvent, useRef, useEffect } from "react";

// 백엔드로부터 받을 노래 데이터의 타입을 정의합니다.
interface SongData {
  id: number;
  title: string;
  artist: string;
  albumArtUrl: string;
  audioSrcUrl: string;
}

export default function MainContent() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");
  // 노래 정보를 저장할 상태(state)
  const [songData, setSongData] = useState<SongData | null>(null);
  // 오디오 플레이어 요소를 직접 제어하기 위한 ref
  const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect를 사용하여 songData가 변경될 때 오디오를 재생합니다.
  useEffect(() => {
    // songData가 있고, audioRef가 연결되어 있을 때만 실행
    if (songData && audioRef.current) {
      audioRef.current.play().catch(error => {
        // 자동 재생 정책에 의해 재생이 실패할 수 있습니다.
        console.log("자동 재생이 브라우저 정책에 의해 차단되었을 수 있습니다:", error);
      });
    }
  }, [songData]); // songData가 변경될 때마다 이 effect를 실행합니다.

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const requestToMain = async () => {
    try {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      console.log("메인 요청 응답:", data);
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("메인 요청 오류:", error);
      alert("메인 요청에 실패했습니다.");
    }
  };

  const requestToHome = async () => {
    try {
      const response = await fetch("http://localhost:8080/home");
      const data = await response.json();
      console.log("home 요청 응답:", data);
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("home 요청 오류:", error);
      alert("home 요청에 실패했습니다.");
    }
  };

  // 1번 노래를 불러오는 함수 (재생 로직 제거)
  const requestAndPlayMusic = async () => {
    console.log('음악 재생 버튼 클릭됨!');
    try {
      const response = await fetch('http://localhost:8080/music/1');
      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }
      const data: SongData = await response.json();
      
      // --- 이 부분을 추가했습니다 ---
      console.log("백엔드로부터 받은 데이터:", data); 
      
      // 상태만 업데이트하면, 위 useEffect가 알아서 재생을 처리합니다.
      setSongData(data);
    } catch (error) {
      console.error('음악 요청 오류:', error);
      alert('음악을 불러오는 데 실패했습니다.');
    }
  };

  return (
    <div>
      <main className="p-6 flex flex-col items-center gap-6">
        {/* 검색 박스 */}
        <section className="flex gap-2 w-full max-w-xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="검색어를 입력하세요"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <button
            onClick={addItem}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            🔍
          </button>
        </section>

        {/* 동적 리스트 */}
        <div className="w-full max-w-md">
          <h4 className="text-xl text-left font-semibold mb-2">
            최근 검색 기록
          </h4>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="p-2 bg-white shadow mb-2 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xl font-bold">New users only</h3>
        <p className="text-center">
          <span className="text-red-500 font-bold">
            Stop Working, Start Listening
          </span>
          <br />
          <span className="text-gray-600 font-bold">
            Honest rewards for
            <br />
            your playtime
          </span>
        </p>

        <h3 className="text-xl font-bold">Listen & sleep well</h3>
        <section className="border border-gray-300 p-4 text-center w-[320px]">
          {/* 노래 정보 표시 */}
          {songData && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold">{songData.title}</h4>
              <p className="text-gray-500">{songData.artist}</p>
            </div>
          )}
          <audio ref={audioRef} controls className="mx-auto mb-2 w-full" src={songData?.audioSrcUrl}>
            Your browser does not support the audio element.
          </audio>

          {/* 버튼들 */}
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={requestAndPlayMusic}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              1번 노래 불러오기 및 재생
            </button>
            <button
              onClick={requestToMain}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              메인으로 요청 보내기
            </button>
            <button
              onClick={requestToHome}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              home으로 요청 보내기
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

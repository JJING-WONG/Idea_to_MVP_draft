import BackButton from "../../components/BackButton";
import HeaderSlot from "../../components/HeaderSlot";
import { useEffect } from "react";

export default function Toilet() {
  useEffect(() => {
    const audio = new Audio("/toilet.mp3");
    audio.volume = 1;
    audio.play().catch(() => {
    });
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <main className="min-h-screen bg-slate-200 flex items-center justify-center p-8">
      <section
        className="
          w-7xl min-h-200
          bg-slate-100
          rounded-3xl
          shadow-xl
          p-8
          flex flex-col
          gap-10
        "
      >
        <HeaderSlot>
          <BackButton />
        </HeaderSlot>
          <img
            src="/toilet.jpeg"
            alt="화장실 위치"
            className="
              max-w-full
              h-[600px]
              object-contain
            "
          />
        
      </section>
    </main>
  );
}
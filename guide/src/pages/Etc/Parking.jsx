import BackButton from "../../components/BackButton";
import HeaderSlot from "../../components/HeaderSlot";
import { useEffect } from "react";

export default function Parking() {
  useEffect(() => {
    const audio = new Audio("/parking.mp3");
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

        <div className="flex-1 flex items-center justify-center">
          <div
            className="
              w-full max-w-[900px]
              h-[500px]
              p-8
              rounded-2xl
              bg-white
              shadow
              flex items-center justify-center
              text-center
              text-5xl
              font-semibold
              text-slate-700
            "
          >
            <img
              src="/parking.jpeg"
              alt="주차정산 방법"
              className="
                max-w-full
                max-h-full
                object-contain
              "
            />
          </div>
        </div>
        
      </section>
    </main>
  );
}
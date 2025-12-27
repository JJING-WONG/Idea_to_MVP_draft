import BackButton from "../components/BackButton";
import HeaderSlot from "../components/HeaderSlot";
import { useEffect } from "react";

export default function PlasticPage() {
  useEffect(() => {
    const audio = new Audio("/plastic.mp3");
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
          w-full max-w-[1280px] h-[800px]
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

        <div className="flex-1 grid grid-cols-2 gap-10">

          <div className="flex items-center justify-center">
            <div
              className="
                w-full h-full
                rounded-2xl
                bg-white
                shadow
                flex items-center justify-center
                p-6
              "
            >
              <img
                src="/plastic.avif"
                alt="비닐 분리배출 안내"
                className="
                  max-w-full
                  max-h-full
                  object-contain
                "
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="
                w-full h-full
                rounded-2xl
                bg-white
                shadow
                p-10
                flex items-center justify-center
              "
            >
              <p className="text-[29px] leading-relaxed text-slate-700 text-center">
                비닐은 키오스크 좌측 하단에 있으며<br />
                무료가 아닌 100원 판매되고 있습니다.<br />
                키오스크에서 비닐봉투 추가를 선택해주세요.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
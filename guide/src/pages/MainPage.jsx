import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainMenuButton from "../components/MainMenuButton";
import HeaderSlot from "../components/HeaderSlot";
import LogoTile from "../components/LogoTile";

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio("/intro.mp3");
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
          w-full max-w-[1280px] min-h-[800px]
          bg-slate-100
          rounded-3xl
          shadow-xl
          p-8
          flex flex-col
          gap-8
        "
      >
        <HeaderSlot>
          <LogoTile />
        </HeaderSlot>

        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8">
          <MainMenuButton
            title="결제"
            colorClass="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate("/payment")}
          />
          <MainMenuButton
            title="상품"
            colorClass="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => navigate("/product")}
          />
          <MainMenuButton
            title="비닐"
            colorClass="bg-amber-500 hover:bg-amber-600"
            onClick={() => navigate("/plastic")}
          />
          <MainMenuButton
            title="주차정산 / 화장실"
            colorClass="bg-slate-700 hover:bg-slate-800"
            onClick={() => navigate("/etc")}
          />
        </div>
      </section>
    </main>
  );
}
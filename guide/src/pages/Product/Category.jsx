import BackButton from "../../components/BackButton";
import HeaderSlot from "../../components/HeaderSlot";
import MainMenuButton from "../../components/MainMenuButton";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
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

        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8">
          <MainMenuButton
            title="아이스크림"
            colorClass="bg-blue-600 hover:bg-blue-700"
            // onClick={() => navigate("/payment/method")}
          />
          <MainMenuButton
            title="과자"
            colorClass="bg-emerald-600 hover:bg-emerald-700"
            // onClick={() => navigate("/payment/cancel")}
          />
          <MainMenuButton
            title="음료"
            colorClass="bg-amber-500 hover:bg-amber-600"
            // onClick={() => navigate("/payment/qr")}
          />
          <MainMenuButton
            title="기타"
            colorClass="bg-slate-700 hover:bg-slate-800"
            // onClick={() => navigate("/payment/account")}
          />
        </div>
        
        
        
      </section>
    </main>
  );
}
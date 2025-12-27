import MainMenuButton from "../components/MainMenuButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
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
        <div className="w-55 h-20">
          <BackButton />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full grid grid-cols-2 gap-10">
            <div className="h-130">
              <MainMenuButton
                title="카테고리"
                colorClass="bg-indigo-600 hover:bg-indigo-700"
                onClick={() => navigate("/product/category")}
              />
            </div>

            <div className="h-130">
              <MainMenuButton
                title="재고"
                colorClass="bg-teal-600 hover:bg-teal-700"
                onClick={() => navigate("/product/stock")}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
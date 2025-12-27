import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="w-full h-full rounded-2xl bg-slate-200 hover:bg-slate-300 shadow-sm
                 flex items-center justify-center gap-3 px-5
                 text-slate-800 font-semibold text-lg"
    >
      <span aria-hidden>←</span>
      뒤로가기
    </button>
  );
}
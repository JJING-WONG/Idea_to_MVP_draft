import { useNavigate } from "react-router-dom";

export default function MenuCardButton({ label, to, className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={[
        "w-full h-full rounded-3xl shadow-lg",
        "flex items-center justify-center",
        "text-white font-bold tracking-tight",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20",
        "transition active:scale-[0.99]",
        className,
      ].join(" ")}
      aria-label={`${label} 페이지로 이동`}
    >
      <span className="text-4xl md:text-5xl">{label}</span>
    </button>
  );
}
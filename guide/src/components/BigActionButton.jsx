export default function BigActionButton({ label, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full h-40 rounded-3xl shadow-lg",
        "flex items-center justify-center",
        "text-white font-bold text-4xl",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20",
        "transition active:scale-[0.99]",
        className,
      ].join(" ")}
    >
      {label}
    </button>
  );
}
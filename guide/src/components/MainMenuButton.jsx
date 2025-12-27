export default function MainMenuButton({ title, onClick, colorClass }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full h-full
        rounded-2xl
        ${colorClass}
        text-white text-4xl font-bold
        shadow-md
        transition
        hover:-translate-y-1 hover:shadow-xl
        focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
        focus-visible:ring-blue-400
      `}
    >
      {title}
    </button>
  );
}
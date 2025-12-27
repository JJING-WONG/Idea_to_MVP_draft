import BackButton from "../../components/BackButton";
import HeaderSlot from "../../components/HeaderSlot";

export default function Stock() {
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
              text-8xl
              font-semibold
              text-slate-700
            "
          >
            준비중입니다
          </div>
        </div>
        
      </section>
    </main>
  );
}
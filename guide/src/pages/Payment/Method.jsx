import BackButton from "../../components/BackButton";
import HeaderSlot from "../../components/HeaderSlot";
import Card from "../../assets/card.mp4";

export default function Method() {
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
          <video
            src="/card.mp4"
            controls
            autoPlay
            muted
            loop
            className="
              w-full max-w-[900px]
              max-h-[600px]
              rounded-2xl
              shadow-lg
              bg-black
            "
          />
        </div>
        
      </section>
    </main>
  );
}
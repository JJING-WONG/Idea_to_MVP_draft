import BackButton from "../../components/BackButton";

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
        <div className="w-55 h-20">
          <BackButton />
        </div>

        
      </section>
    </main>
  );
}
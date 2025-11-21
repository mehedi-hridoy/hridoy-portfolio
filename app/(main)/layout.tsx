import Navbar from "../components/Navbar";
import LeftCard from "../components/LeftCard";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="pt-24 px-4 sm:px-6 max-w-7xl mx-auto pb-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* LEFT CARD — Desktop (Sticky) */}
          <div className="hidden lg:block lg:w-[35%] sticky top-28 h-fit">
            <LeftCard />
          </div>

          {/* LEFT CARD — Mobile & Tablet (Not Sticky, Centered) */}
          <div className="lg:hidden w-full flex justify-center mb-8 px-2">
            <LeftCard />
          </div>

          {/* RIGHT CONTENT — Scrollable */}
          <div className="w-full lg:w-[65%]">{children}</div>
        </div>
      </main>
    </>
  );
}

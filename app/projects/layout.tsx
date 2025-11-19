import Navbar from "@/app/components/Navbar";
import LeftCard from "@/app/components/LeftCard";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT FIXED CARD — Desktop */}
          <div className="hidden lg:block lg:w-[35%] sticky top-28 h-fit">
            <LeftCard />
          </div>

          {/* LEFT CARD — Mobile */}
          <div className="block lg:hidden w-full">
            <LeftCard />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[65%]">{children}</div>
        </div>
      </main>
    </>
  );
}

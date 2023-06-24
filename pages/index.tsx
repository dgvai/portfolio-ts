import { Intro } from "@/components/Intro";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-full text-whiteboard">
      <Sidebar className="w-72 min-h-screen bg-tinker flex flex-col p-2 fixed" />
      <div className="ml-72 min-h-screen bg-whiteboard text-midnight flex flex-col p-10">
        <Intro />
      </div>
    </main>
  );
}
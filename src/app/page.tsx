import Image from 'next/image';
import AuroraBackground from './_components/ui/aurora-background';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <p className="sm:text-3xl md:text-6xl lg:text-9xl text-center m-2 mb-1">
        Brian Galyen
      </p>
      <div className="m-4">
        <hr></hr>
        {/* //?? Consider Typewriter Effect Below */}
        <p className="text-center text-balance sm:text-lg md:text-2xl lg:text-3xl m-3">
          Developing Full Stack Apps Using Agile Strats.
        </p>
      </div>
    </main>
  );
}

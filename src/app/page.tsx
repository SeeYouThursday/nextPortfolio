import Image from 'next/image';
import { Motto, MottoSubTitle } from './_components/Motto';
import Aurora from './_components/AuroraBackground';
import HomeBtns from './_components/Nav/HomeNav';

export default function Home() {
  return (
    <Aurora>
      <main className="flex flex-col items-center justify-center h-[90svh]">
        <h1 className="md:text-9xl text-5xl font-semibold md:font-normal text-center m-2 mb-1">
          Brian Galyen
        </h1>
        <div className="m-4">
          <hr></hr>
          {/* //?? Consider Typewriter Effect Below */}
          {/* <p className="text-center text-balance sm:text-lg md:text-2xl lg:text-3xl m-3">
          Developing Full Stack Apps Using Agile Strats.
        </p> */}
          <Motto />

          {/* <Image
          src="/jesuswalk.png"
          height={100}
          width={100}
          alt="Brian walking down the road"
        />
        <MottoSubTitle /> */}
        </div>
        <div>
          <HomeBtns location="under" />
        </div>
      </main>
    </Aurora>
  );
}

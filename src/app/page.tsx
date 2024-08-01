import { Motto, MottoSubTitle } from './_components/Motto';
import HomeBtns from './_components/Nav/HomeNav';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[80svh]">
      <h1 className="md:text-9xl text-5xl font-semibold md:font-normal text-center m-2 mb-1">
        Brian Galyen
      </h1>
      <div className="m-4">
        <hr></hr>
        <Motto />
      </div>
      {/* <div>
        <HomeBtns location="under" />
      </div> */}
    </main>
  );
}

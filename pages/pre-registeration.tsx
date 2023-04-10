import Image from "next/image";
import { firstSlide, secondSlide, thirdSlide } from "config";
import Link from "next/link";

export default function PreRegisteration() {
  return (
    <>
      <main>
        <div className="container w-full mx-auto max-sm:px-10 ">
          <div className="main-content  mx-auto max-w-full w-[1020px] mt-14 ">
            <div className="relative">
              <Image
                src={firstSlide}
                className="w-full h-full object-cover"
                width={1020}
                height={620}
              />
              <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                <p className="p-4 text-4xl uppercase font-normal text-white">
                  New Mode Design: Tile Puzzle
                </p>
                <p className="pl-4 pb-10 text-2xl text-white opacity-60">
                  Inside the studio and how its done
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[11px] ">
              {/* <div
                className={`relative  hover:cursor-pointer ${
                  imgaeStatus === 0 ? "border-2 border-[#5EF388]" : ""
                }`}
                onClick={handleSelectFistImage}
              >
                <div
                  className={`absolute left-0 top-0 z-10 -rotate-90  ${
                    imgaeStatus !== 0 ? "hidden" : ""
                  }`}
                >
                  <TOPRigthSVG />
                </div>
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    New Mode Design:
                    <br /> Tile Puzzle
                  </p>
                </div>
                <Image
                  src={firstSlide}
                  className="max-h-[146px] min-h-[146px] object-cover w-full"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    New Mode Design:
                    <br /> Tile Puzzle
                  </p>
                </div>
              </div>
              <div
                className={`relative  hover:cursor-pointer ${
                  imgaeStatus === 1 ? "border-2 border-[#5EF388]" : ""
                }`}
                onClick={handleSelectSecondImage}
              >
                <div
                  className={`absolute left-0 top-0 z-10 -rotate-90  ${
                    imgaeStatus !== 1 ? "hidden" : ""
                  }`}
                >
                  <TOPRigthSVG />
                </div>
                <Image
                  src={secondSlide}
                  className="max-h-[146px] min-h-[146px] object-cover w-full"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60 ">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    GAME UPDATE:
                    <br /> GETTING READY
                  </p>
                </div>
              </div>
              <div
                className={`relative  hover:cursor-pointer ${
                  imgaeStatus === 2 ? "border-2 border-[#5EF388]" : ""
                }`}
                onClick={handleSelectThirdImage}
              >
                <div
                  className={`absolute left-0 top-0 z-10 -rotate-90  ${
                    imgaeStatus !== 2 ? "hidden" : ""
                  }`}
                >
                  <TOPRigthSVG />
                </div>
                <Image
                  src={thirdSlide}
                  className="max-h-[146px] min-h-[146px] object-cover w-full"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60 ">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    GAME UPDATE: <br /> GETTING READY
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="main-content text-3xl mx-auto mb-10 max-sm:max-w-full lg:w-[1020px]  h-auto sm:mt-14 font-semibold space-y-4">
            <div className=" text-4xl tracking-widest text-white">
              Start climbing the wait list today and receive exclusive in-game
              rewards
            </div>
            <div className="w-full flex flex-col justify-items-center space-y-16">
              <button className="bg-[#5EF388] mx-auto text-2xl mt-4 max-sm:w-full px-10 py-2">
                Signup Now for Early Access
              </button>

              <div className="text-white space-y-4 mx-auto">
                <li>Benefit One - Marketing Copy TBD</li>
                <li>Benefit One - Marketing Copy TBD</li>
                <li>Benefit One - Marketing Copy TBD</li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

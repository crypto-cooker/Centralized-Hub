/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Drip from "../public/img/drip.png";
import Coffee from "../public/img/coffee.png";
import Skate from "../public/img/skate.png";
import { TOPRigthSVG } from "components/SVGList";
import { TOPLeftSVG } from "components/SVGList";
import Button from "components/Button";
import Footer from "components/Footer";
import Link from "next/link";

export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  return (
    <>
      <main>
        <div className="container w-full mx-auto max-sm:px-10 ">
          <div className="main-content  mx-auto max-w-full w-[1020px] mt-14 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
            <div className="col-span-3 relative max-sm:hidden">
              <div className="absolute right-0 top-0 z-10">
                <TOPRigthSVG />
              </div>
              <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                <p className="p-4 text-4xl uppercase font-normal text-white">
                  New Mode Design: Tile Puzzle
                </p>
                <p className="pl-4 pb-10 text-2xl text-white opacity-60">
                  Inside the studio and how its done
                </p>
              </div>
              <img src="/img/drip.png" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-y-[11px] ">
              <div className="relative border-2 border-[#5EF388]">
                <div className="absolute left-0 top-0 z-10 -rotate-90">
                  <TOPRigthSVG />
                </div>
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    New Mode Design:
                    <br /> Tile Puzzle
                  </p>
                </div>
                <img
                  src="/img/drip.png"
                  className="max-h-[146px] min-h-[146px] object-cover w-full"
                />
              </div>
              <div className="relative">
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    GAME UPDATE:
                    <br /> GETTING READY
                  </p>
                </div>
                <img
                  src="/img/coffee.png"
                  className="max-h-[146px] min-h-[146px] object-cover w-full"
                />
              </div>
              <div className="relative">
                <div className="absolute bottom-0 w-full bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
                  <p className="p-4 text-lg uppercase font-normal text-white">
                    GAME UPDATE: <br /> GETTING READY
                  </p>
                </div>
                <img
                  src="/img/skate.png"
                  className="max-h-[146px] min-h-[146px] object-cover w-full"
                />
              </div>
            </div>
          </div>
          <div className="main-content text-3xl mx-auto mb-10 max-sm:max-w-full lg:w-[1020px]  h-auto sm:mt-14   font-semibold">
            <div className="uppercase text-5xl tracking-widest text-white">
              Featured Apps
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2 max-lg:grid-cols-1 max-lg:w-full">
              <div>
                <Link href="https://skatex.io/staking">
                  <div className="flex items-center justify-center bg-stone-200  cursor-pointer select-none p-10 border-2 border-white">
                    <p className="uppercase">Staking</p>
                  </div>
                </Link>
                <div className="text-white space-y-2 mb-4">
                  <p className="uppercase text-base ">web3 app</p>

                  <p className=" text-2xl">
                    Stake your NFT and <br />
                    collect GRIND
                  </p>
                </div>
                <a
                  href="https://skatex.io/staking"
                  className="bg-[#5EF388] text-xl mt-4 max-sm:w-full px-10 py-2"
                >
                  PLAY
                </a>
              </div>
              <div>
                <Link href="http://skatex.io/xmachine">
                  <div className="flex items-center justify-center bg-stone-200  cursor-pointer select-none p-10  border-2 border-white">
                    <p className="uppercase">X-Machine</p>
                  </div>
                </Link>
                <div className="text-white space-y-2 mb-4">
                  <p className="uppercase text-base">web3 app</p>

                  <p className=" text-2xl">
                    Play the X-Machine for <br />
                    exclusive prizes
                  </p>
                </div>
                <a
                  href="http://skatex.io/xmachine"
                  className="bg-[#5EF388] text-xl mt-4 max-sm:w-full px-10 py-2"
                >
                  PLAY
                </a>
              </div>
              <div>
                <Link href="https://kickflip.skatex.io/">
                  <div className="flex items-center justify-center bg-stone-200  cursor-pointer select-none p-10  border-2 border-white">
                    <p className="uppercase">Mini KickFlip</p>
                  </div>
                </Link>
                <div className="text-white space-y-2 mb-4">
                  <p className="uppercase text-base ">web3 app</p>

                  <p className="e text-2xl">
                    Think you can pick the <br />
                    right call?
                  </p>
                </div>
                <a
                  href="https://kickflip.skatex.io/"
                  className="bg-[#5EF388] text-xl mt-4 max-sm:w-full px-10 py-2"
                >
                  PLAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

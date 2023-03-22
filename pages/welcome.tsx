/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Button from "components/Button";
import { TOPRigthSVG } from "components/SVGList";
import { useMainContext } from "contexts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Warning from "../public/img/warning.png";

export default function WelcomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const { authToken, gamerTag, status } = useMainContext();
  const navigator = useRouter();

  useEffect(() => {
    if (!authToken) {
      navigator.push("/signin");
    }
  }, [authToken]);

  return (
    <>
      <main>
        {status === "active" && (
          <>
            <div className="absolute w-[78px] h-[138px] top-[205px] right-0 bg-gray-400 z-50" />
            <div className="absolute w-[78px] h-[138px] top-[375px] right-0 bg-gray-400 z-50" />
          </>
        )}
        <div className="container w-full mx-auto max-lg:px-10 relative">
          {status === "unverified" && (
            <>
              <div className="flex  mx-auto px-10 justify-items-center bg-white rounded-xl w-[1020px] hover:cursor-pointer max-lg:w-full max-lg:px-2">
                <div className="w-[3%] pt-2 max-lg:w-[10%] justify-itmes-center">
                  <Image src={Warning} />
                </div>
                <p className="text-sm text-[#FF0000] pt-2 max-lg:pt-0">
                  Your account hasn’t been verified yet. Please verify your
                  account to participate in HUB features. If you need to resend
                  the verification link, click here.
                </p>
              </div>
              <div className="main-content  mx-auto max-w-full w-[1020px] mt-8 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
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
                  <img
                    src="/img/drip.png"
                    className="w-full h-full object-cover"
                  />
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
                        GAME UPDATE: GETTING READY
                      </p>
                    </div>
                    <img
                      src="/img/skate.png"
                      className="max-h-[146px] min-h-[146px] object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {status === "active" && (
            <div
              className={`main-content  mx-auto max-w-full w-[1020px] mt-14 flex-col space-y-8`}
            >
              <div>
                <p className="text-4xl text-white uppercase">GM, {gamerTag}</p>
              </div>
              <div className="flex space-x-2">
                <div className="w-16 h-16 rounded-full bg-[#D9D9D9]"></div>
                <div className="flex-col space-y-2 w-[80%]">
                  <p className="text-2xl text-white uppercase">
                    HUB ACCOUNT LEVEL
                  </p>
                  <div className="w-full h-6 bg-[#D9D9D9] rounded-3xl"></div>
                </div>
              </div>
              <div className="flex space-x-10 ">
                <div className="bg-[#D9D9D9] h-48 w-full"></div>
                <div className="bg-[#D9D9D9] h-48 w-full"></div>
              </div>
            </div>
          )}

          <div
            className={`main-content text-3xl mx-auto mb-10 max-sm:max-w-full  lg:w-[1020px] h-auto sm:mt-14  font-semibold`}
          >
            <div className="uppercase text-5xl tracking-widest text-white">
              Featured Apps
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2 max-lg:grid-cols-1 max-lg:w-full">
              {/* <div className="flex-col justify-items-center sm:flex-row space-y-4 sm:space-y-0 items-center flex w-2/3 sm:justify-around  text-xs tracking-wider font-bold mt-24 sm:mt-40"> */}
              <div>
                <div className="flex items-center justify-center bg-stone-200  cursor-pointer select-none p-10 border-2 border-white">
                  <p className="uppercase">Staking</p>
                </div>
                <div className="text-white space-y-2">
                  <p className="uppercase text-base ">web3 app</p>

                  <p className=" text-2xl">
                    Stake your NFT and <br />
                    collect GRIND
                  </p>
                </div>
                <Button
                  label="PLAY"
                  className="bg-[#5EF388] text-xl mt-4 max-sm:w-full"
                ></Button>
              </div>
              <div>
                <div className="flex items-center justify-center bg-stone-200  cursor-pointer select-none p-10  border-2 border-white">
                  <p className="uppercase">X-Machine</p>
                </div>
                <div className="text-white space-y-2">
                  <p className="uppercase text-base">web3 app</p>

                  <p className=" text-2xl">
                    Play the X-Machine for <br />
                    exclusive prizes
                  </p>
                </div>
                <Button
                  label="PLAY"
                  className="bg-[#5EF388] text-xl mt-4 max-sm:w-full"
                ></Button>
              </div>
              <div>
                <div className="flex items-center justify-center bg-stone-200  cursor-pointer select-none p-10  border-2 border-white">
                  <p className="uppercase">Mini KickFlip</p>
                </div>
                <div className="text-white space-y-2">
                  <p className="uppercase text-base ">web3 app</p>

                  <p className="e text-2xl">
                    Think you can pick the <br />
                    right call?
                  </p>
                </div>
                <Button
                  label="PLAY"
                  className="bg-[#5EF388] text-xl mt-4 max-sm:w-full"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

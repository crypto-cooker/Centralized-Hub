/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Button from "components/Button";
import { TOPRigthSVG } from "components/SVGList";
import { useMainContext } from "contexts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Warning from "../public/img/warning.png";
import { resendVerify } from "../actions/verify";
import { successAlertBottom } from "components/ToastGroup";
import Link from "next/link";
import { firstSlide, secondSlide, thirdSlide } from "config";

function getImageSrc(image: StaticImageData): string {
  return image.src.toString();
}

export default function WelcomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const { authToken, gamerTag, status } = useMainContext();
  const [storeEmail, setStoreEmail] = useState<string>("");

  const [currentImage, setCurrentImage] = useState<string>(() =>
    getImageSrc(firstSlide)
  );
  const [imgaeStatus, setImageStatus] = useState<number>(0);

  const handleSelectFistImage = () => {
    setCurrentImage(() => getImageSrc(firstSlide));
    setImageStatus(0);
  };
  const handleSelectSecondImage = () => {
    setCurrentImage(() => getImageSrc(secondSlide));
    setImageStatus(1);
  };
  const handleSelectThirdImage = () => {
    setCurrentImage(() => getImageSrc(thirdSlide));
    setImageStatus(2);
  };
  const navigator = useRouter();

  const resendEmail = async () => {
    const res = await resendVerify(storeEmail);
    console.log(res);
    successAlertBottom("Your verify link was resent to your email");
  };

  useEffect(() => {
    if (!authToken) {
      navigator.push("/signin");
    }
    const setemail = localStorage.getItem("storeEmail");
    setStoreEmail(setemail);
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
              <div className="flex  mx-auto px-10 py-1 justify-items-center bg-white rounded-md w-[1020px] hover:cursor-pointer max-lg:w-full max-lg:px-2">
                <div className="w-[3%] py-2 max-lg:w-[10%] justify-itmes-center">
                  <Image src={Warning} />
                </div>
                <p className="text-sm text-[#FF0000] py-2 max-lg:pt-0">
                  Your account hasn’t been verified yet. Please verify your
                  account to participate in HUB features. If you need to resend
                  the verification link,
                  <p
                    className="text-sm text-[#FF0000] py-2 max-lg:pt-0"
                    onClick={resendEmail}
                  >
                    click here.
                  </p>
                </p>
              </div>
              <div className="main-content  mx-auto max-w-full w-[1020px] mt-14 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
                <div className="col-span-3 relative max-sm:hidden">
                  <div className="absolute right-0 top-0 z-10">
                    <TOPRigthSVG />
                  </div>
                  <Image
                    src={currentImage}
                    className="w-full h-full object-cover"
                    width={1000}
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
                  <div
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

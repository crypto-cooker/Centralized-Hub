/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import "animate.css/animate.min.css";
import { TOPRigthSVG } from "components/SVGList";
import ImageGallery from "react-image-gallery";

// import "bootstrap/dist/css/bootstrap.min.css";

import { TOPLeftSVG } from "components/SVGList";
import Button from "components/Button";
import Footer from "components/Footer";
import { Bounce, Flip, Fade } from "react-reveal";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { firstSlide, secondSlide, thirdSlide, Slides } from "config";

function getImageSrc(image: StaticImageData): string {
  return image.src.toString();
}
export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const [currentImage, setCurrentImage] = useState<string>(() =>
    getImageSrc(firstSlide)
  );
  const [imgaeStatus, setImageStatus] = useState<number>(1);
  // const [imgIndex, setImgIndex] = useState<number>(0);
  const bootstrap = Slides;
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelectFistImage = () => {
    setCurrentImage(() => getImageSrc(firstSlide));
    setImageStatus(1);
    clearInterval(0);
  };
  const handleSelectSecondImage = () => {
    setCurrentImage(() => getImageSrc(secondSlide));
    setImageStatus(2);
    clearInterval(0);
  };
  const handleSelectThirdImage = () => {
    setCurrentImage(() => getImageSrc(thirdSlide));
    setImageStatus(3);
    clearInterval(0);
  };

  const [image, setImage] = useState<number>(0);

  setTimeout(() => {
    let imgIndex = image + 1;

    if (imgIndex > 3) {
      imgIndex = 1;
    }
    setImage(imgIndex);
  }, 3000);

  useEffect(() => {
    setCurrentImage(() =>
      getImageSrc(
        image === 1 ? firstSlide : image === 2 ? secondSlide : thirdSlide
      )
    );
    setImageStatus(image);
  }, [image]);

  return (
    <>
      <main>
        <div className="container w-full mx-auto max-sm:px-10 ">
          <div className="main-content  mx-auto max-w-full w-[1020px] mt-14 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
            <div className="col-span-3 relative max-sm:hidden duration-300 transition-all">
              <div className="absolute right-0 top-0 z-10">
                <TOPRigthSVG />
              </div>

              <CSSTransition
                key={currentImage}
                timeout={3000}
                classNames="fade"
              >
                <Image
                  src={currentImage}
                  className="w-full h-full object-cover animate__animated animate__slideInLeft"
                  width={1000}
                  height={620}
                />
              </CSSTransition>

              {/* <ImageGallery
                items={images}
                autoPlay={true}
                showPauseButton={false}
              /> */}

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
                  imgaeStatus === 1 ? "border-2 border-[#5EF388]" : ""
                }`}
                onClick={handleSelectFistImage}
              >
                <div
                  className={`absolute left-0 top-0 z-10 -rotate-90  ${
                    imgaeStatus === 1 ? "" : "hidden"
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
                  imgaeStatus === 2 ? "border-2 border-[#5EF388]" : ""
                }`}
                onClick={handleSelectSecondImage}
              >
                <div
                  className={`absolute left-0 top-0 z-10 -rotate-90  ${
                    imgaeStatus === 2 ? "" : "hidden"
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
                  imgaeStatus === 3 ? "border-2 border-[#5EF388]" : ""
                }`}
                onClick={handleSelectThirdImage}
              >
                <div
                  className={`absolute left-0 top-0 z-10 -rotate-90  ${
                    imgaeStatus === 3 ? "" : "hidden"
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

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];
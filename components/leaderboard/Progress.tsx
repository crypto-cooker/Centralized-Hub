import { PercentFirstStep } from "components/SVGList";
import Image from "next/image";
import Capsule from "./Capsule";

interface ProgressProps {
  currentPoints: number;
  milestoneEarned: number;
}

const Progress = ({ currentPoints, milestoneEarned }: ProgressProps) => {
  return (
    <div className="w-full flex-col mb-10">
      <div className="w-full flex place-content-center">
        <p className="text-8xl text-white uppercase">Your Progress</p>
      </div>
      <div className="pb-16 bg-black/50">
        <div className="container mx-auto">
          <p className="text-white text-6xl font-semibold">Curtis</p>
        </div>
        <div className="container mx-auto grid grid-cols-6 gap-4">
          <div className="flex-col space-y-6 col-span-4">
            <div className="relative w-full pt-10">
              <div className="absolute top-1 flex w-full">
                <div className=" flex-col  flex items-center">
                  <p className="text-3xl text-white">70</p>
                  <Image src="/img/leaderboard/70.png" width={60} height={20} />
                </div>
              </div>
              <div className="absolute top-1 flex w-full">
                <div className="w-full flex justify-end">
                  <div className="flex-col flex items-center">
                    <p className="text-3xl text-white">1000</p>
                    <Image
                      src="/img/leaderboard/1000.png"
                      width={60}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1 flex w-full">
                <div className="w-full flex justify-center">
                  <div className=" flex-col  right-0 flex items-center">
                    <p className="text-3xl text-white">500</p>
                    <Image
                      src="/img/leaderboard/500.png"
                      width={60}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1 left-0 flex w-1/2">
                <div className="w-full flex justify-center">
                  <div className=" flex-col  right-0 flex items-center">
                    <p className="text-3xl text-white">250</p>
                    <Image
                      src="/img/leaderboard/250.png"
                      width={60}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1 left-0 flex w-1/4">
                <div className="w-full flex justify-center">
                  <div className=" flex-col  right-0 flex items-center">
                    <p className="text-3xl text-white">125</p>
                    <Image
                      src="/img/leaderboard/125.png"
                      width={60}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-6 bg-[#FEFEFE]">
                <div
                  className="h-6 bg-[#5EF388]"
                  style={{ width: `${currentPoints / 10}%` }}
                ></div>
              </div>
            </div>
            <div className="w-full relative">
              <div className="absolute top-1 flex w-full">
                <Capsule
                  currentPoints={currentPoints}
                  points={70}
                  itemAmount={1}
                />
              </div>

              <div className="absolute top-1 flex w-full">
                <div className="w-full flex justify-end">
                  <Capsule
                    currentPoints={currentPoints}
                    points={1000}
                    itemAmount={5}
                  />
                </div>
              </div>
              <div className="absolute top-1 flex w-full">
                <div className="w-full flex justify-center">
                  <Capsule
                    currentPoints={currentPoints}
                    points={500}
                    itemAmount={4}
                  />
                </div>
              </div>
              <div className="absolute top-1 left-0 flex w-1/2">
                <div className="w-full flex justify-center">
                  <Capsule
                    currentPoints={currentPoints}
                    points={250}
                    itemAmount={3}
                  />
                </div>
              </div>
              <div className="absolute top-1 left-0 flex w-1/4">
                <div className="w-full flex justify-center">
                  <Capsule
                    currentPoints={currentPoints}
                    points={125}
                    itemAmount={2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-span-1 border-2 border-white bg-[#E6E6E6] flex-col space-y-2 items-center">
            <div className="flex space-x-2 ">
              <Image
                src="/img/leaderboard/capsule.png"
                width={60}
                height={60}
              />
              <p className="text-5xl">{milestoneEarned}</p>
            </div>
            <div className="text-2xl">Milestones Earned </div>
          </div>
          <div className="flex col-span-1 border-2 border-white bg-[#E6E6E6] flex-col space-y-4 items-center">
            <p className="text-5xl">{currentPoints}</p>
            <div className="text-2xl">Current Points </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

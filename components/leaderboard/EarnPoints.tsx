interface EarnPoinstsProps {
  points: number;
}
const EarnPoints = ({ points }: EarnPoinstsProps) => {
  return (
    <div className=" container w-full mx-auto flex-col space-y-8 bg-[#E6E6E6] p-4 mb-10">
      <div className="w-full flex items-center place-content-center">
        <p className="text-5xl uppercase font-semibold">HOW TO EARN POINTS</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <div className="flex-col">
            <div className="w-full flex flex-col  space-y-4 items-center">
              <p className="text-4xl font-semibold"> Register Account </p>
              <p className="text-3xl font-semibold ">{points} points</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex-col">
            <div className="w-full flex flex-col space-y-4 items-center">
              <p className="text-4xl font-semibold"> Collect Tickets </p>
              <p className="text-3xl font-semibold">{points} points</p>
            </div>
          </div>
        </div>
        <div className="...">
          <div className="flex-col">
            <div className="w-full flex flex-col space-y-4 items-center">
              <p className="text-4xl font-semibold"> Refer a Friend </p>
              <p className="text-3xl font-semibold">{points} points</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex-col">
            <div className="w-full flex flex-col space-y-4 items-center">
              <p className="text-4xl font-semibold"> Follow on Twitter </p>
              <p className="text-3xl font-semibold">{points} points</p>
            </div>
          </div>
        </div>
        <div className="...">
          <div className="flex-col">
            <div className="w-full flex flex-col space-y-4  items-center">
              <p className="text-4xl font-semibold">Like/RT </p>
              <p className="text-3xl font-semibold">{points} points</p>
            </div>
          </div>
        </div>
        <div className="...">
          <div className="flex-col">
            <div className="w-full flex flex-col  space-y-4 items-center">
              <p className="text-4xl font-semibold">Join/Rank up on Discord</p>
              <p className="text-3xl font-semibold">{points} points</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex place-content-center">
        <p className="text-3xl">Points may take up to 24 hours to update</p>
      </div>
    </div>
  );
};

export default EarnPoints;

import Image from "next/image";
interface CapsuleProps {
  currentPoints: number;
  points: number;
  itemAmount: number;
}
const Capsule = ({ currentPoints, points, itemAmount }: CapsuleProps) => {
  return (
    <>
      <div className="  flex items-center">
        <Image
          className={`${
            currentPoints <= points ? "rounded-full bg-[#FFE600]" : ""
          }`}
          src="/img/leaderboard/capsule.png"
          width={40}
          height={40}
        />
        <p className="text-3xl text-white">{itemAmount}</p>
      </div>
    </>
  );
};

export default Capsule;

import Image from "next/image";

interface RankProps {
  rank?: string;
  score?: string;
  reward?: string;
}
const Rank = ({ rank, score, reward }: RankProps) => {
  return (
    <div className="w-full flex-col  bg-black/50 pb-16">
      <div className="container mx-auto pb-6">
        <p className="text-2xl text-white uppercase font-semibold">My Rank</p>
      </div>
      <div className=" bg-gradient-to-r from-cyan-500  py-4">
        <div className="container mx-auto text-6xl font-semibold text-white flex justify-between">
          <div className="flex space-x-4">
            <Image src="/img/leaderboard/star.png" width={60} height={60} />
            <p>{rank}4321</p>
          </div>
          <p>{score}12345</p>
          <div className="w-1/5 border-2 bg-[#465F6F] flex justify-between py-4 px-10">
            <Image
              src="/img/leaderboard/grindToken.png"
              width={30}
              height={30}
            />
            <Image
              src="/img/leaderboard/ticketBlue.png"
              width={40}
              height={10}
            />
            <Image
              src="/img/leaderboard/ticketRed.png"
              width={40}
              height={10}
            />
            <Image
              src="/img/leaderboard/boardNFT_sm 2.png"
              width={30}
              height={30}
            />
            <Image src="/img/leaderboard/solana.png" width={25} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;

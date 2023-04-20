interface RankProps {
  rank?: string;
  score?: string;
  reward?: string;
}
const Rank = ({ rank, score, reward }: RankProps) => {
  return (
    <div className="w-full flex-col  bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
      <div className="w-full flex place-content-center mb-10">
        <p className="text-2xl text-white uppercase">My Rank</p>
      </div>
    </div>
  );
};

export default Rank;

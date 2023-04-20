interface EventLeaderboardProps {
  rank?: number;
  name?: string;
  score?: string;
  reward?: string;
}
const EventLeaderboard = ({
  rank,
  name,
  score,
  reward
}: EventLeaderboardProps) => {
  return (
    <div className="w-full flex-col ">
      <div className="w-full flex place-content-center mb-10">
        <p className="text-8xl text-white uppercase">EVENT LEADERBOARD</p>
      </div>
      <div className="pb-16 bg-black/30 bg-gradient-to-b from-black/10 to-black/60">
        <table className="w-full text-white text-2xl border-b-2">
          <thead className="uppercase border-b-2 mb-2">
            <tr>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              <th scope="col" className="px-6 py-3">
                Rank Rewards
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="mt-2">
              <td></td>
              <td></td>
              <td></td>
              <td className="border-2 border-white"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLeaderboard;

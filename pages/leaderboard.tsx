import EarnPoints from "components/leaderboard/EarnPoints";
import EventDescription from "components/leaderboard/EventDescription";
import EventLeaderboard from "components/leaderboard/EventLeaderboard";
import EventName from "components/leaderboard/EventName";
import Progress from "components/leaderboard/Progress";
import Rank from "components/leaderboard/Rank";

export default function LeaderboardPage() {
  return (
    <>
      <EventName eventName={"Event Name"} />
      <EventDescription eventDescription={""} />
      <EarnPoints points={12} />
      <Progress currentPoints={500} milestoneEarned={4} />
      <EventLeaderboard />
      <Rank />
    </>
  );
}

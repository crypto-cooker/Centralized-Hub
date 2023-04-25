import EventDescription from "components/leaderboard/EventDescription";
import EventLeaderboard from "components/leaderboard/EventLeaderboard";
import EventName from "components/leaderboard/EventName";
import Rank from "components/leaderboard/Rank";
import Progress from "components/pre-event/Progress";
import Table from "components/pre-event/Table";

export default function PreEvent() {
  return (
    <div className="relative bg-cover bg-[url('/img/Background.jpg')] bg-no-repeat h-auto">
      <EventName
        className="border-2 container mx-auto"
        eventName={"Pre-Registration Event"}
        time={""}
      />
      <div className="container mx-auto flex space-x-10">
        <div>
          <EventDescription
            className="px-10 h-auto"
            eventDescription={
              "TEST TEST TEST TES T TEST TESTTEST TEST TEST TEST TEST TESTTEST TEST TEST TEST TEST TEST "
            }
            title={"Event Info"}
          />
          <Progress currentPoints={700} />
        </div>
        {/* <EventLeaderboard title={""} /> */}
        <Table />
      </div>
    </div>
  );
}

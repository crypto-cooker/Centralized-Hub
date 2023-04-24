interface EventNameProps {
  eventName: string;
  time: string;
}

const EventName = ({ eventName, time }: EventNameProps) => {
  return (
    <div className=" mx-auto bg-black/50  mb-10">
      <div className="w-full  flex-col text-center py-6">
        <p className="text-8xl text-white uppercase">{eventName}</p>
        <p className="text-4xl text-white ">
          {time}37 Days, 0 hours, 48 minutes remaining
        </p>
      </div>
    </div>
  );
};

export default EventName;

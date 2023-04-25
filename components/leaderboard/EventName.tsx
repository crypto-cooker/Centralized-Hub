interface EventNameProps {
  className?: string;
  eventName: string;
  time: string;
}

const EventName = ({ eventName, time, className }: EventNameProps) => {
  return (
    <div className={` mx-auto bg-black/50  mb-10 ${className ?? ""}`}>
      <div className="w-full  flex-col text-center py-6">
        <p className={`text-8xl text-white ${className ? "" : "uppercase"}`}>
          {eventName}
        </p>
        <p className="text-4xl text-white mt-6">
          {time}37 Days, 0 hours, 48 minutes remaining
        </p>
      </div>
    </div>
  );
};

export default EventName;

interface EventNameProps {
  eventName: string;
}

const EventName = ({ eventName }: EventNameProps) => {
  return (
    <div className=" mx-auto bg-black/30 bg-gradient-to-b from-black/10 to-black/60 mb-10">
      <div className="w-full flex place-content-center">
        <p className="text-8xl text-white uppercase">{eventName}</p>
      </div>
    </div>
  );
};

export default EventName;

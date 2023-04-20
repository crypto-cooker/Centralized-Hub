import { TOPRigthSVG } from "components/SVGList";

interface EventDescriptionProps {
  eventDescription: string;
}

const EventDescription = ({ eventDescription }: EventDescriptionProps) => {
  return (
    <div className="relative container w-full mx-auto flex items-center bg-white border-2 border-[#5EF388]">
      <div className={`absolute left-0 top-0 z-10 -rotate-90  `}>
        <TOPRigthSVG />
      </div>
      <div className="flex items-center w-full place-content-center">
        <p className="text-5xl  uppercase font-semibold">
          Event Info Description
        </p>
      </div>
      <div className="text-4xl">{eventDescription}</div>
    </div>
  );
};

export default EventDescription;

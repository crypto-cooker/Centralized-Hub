import { TOPRigthSVG } from "components/SVGList";

interface EventDescriptionProps {
  eventDescription: string;
  title: string;
  className?: string;
}

const EventDescription = ({
  eventDescription,
  title,
  className
}: EventDescriptionProps) => {
  return (
    <div className="relative container w-full mx-auto flex-col items-center bg-white border-2 border-[#5EF388] ">
      <div
        className={`absolute left-0 top-0 z-10 -rotate-90 ${
          className ? "hidden" : ""
        } `}
      >
        <TOPRigthSVG />
      </div>
      <div className="flex pt-6 items-center w-full place-content-center">
        <p className={`text-5xl font-semibold ${className ? "" : "uppercase"}`}>
          {title}
        </p>
      </div>
      <div className="text-4xl p-6">{eventDescription}</div>
    </div>
  );
};

export default EventDescription;

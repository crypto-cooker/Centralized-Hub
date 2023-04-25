interface PreEventProgressProps {
  currentPoints: number;
}
const Progress = ({ currentPoints }: PreEventProgressProps) => {
  return (
    <>
      <div className="flex">
        <div></div>
        <div className="w-20 h-96 bg-[#5EF388]">
          <div
            className="h-auto bg-[#303438]
            "
            style={{ height: `${currentPoints / 10}%` }}
          ></div>
        </div>
        <div></div>
      </div>
      <div></div>
    </>
  );
};

export default Progress;

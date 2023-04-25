import Image from "next/image";
interface EventLeaderboardProps {
  className?: string;
  rank?: number;
  name?: string;
  score?: string;
  reward?: string;
  title?: string;
}
const EventLeaderboard = ({
  className,
  rank,
  name,
  score,
  reward,
  title
}: EventLeaderboardProps) => {
  return (
    <div className="w-full flex-col ">
      <div className="w-full flex place-content-center mb-10">
        <p className={`text-8xl text-white ${className ? "" : "uppercase"}`}>
          {title}
        </p>
      </div>
      <div className="pb-6 bg-black/50">
        <table className="w-full text-white text-2xl  border-b-2">
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
              <th className="px-4"></th>
            </tr>
          </thead>
          <tbody className="text-4xl">
            <div className="h-4" />
            <tr className="bg-gradient-to-r from-[#FFEA7A]">
              <td
                scope="row"
                className="px-6 w-1/5 text-center font-medium  whitespace-nowrap"
              >
                1
              </td>
              <td
                scope="row"
                className="px-6 w-1/5  text-center font-medium  whitespace-nowrap"
              >
                asdf
              </td>
              <td
                scope="row"
                className="px-6  w-2/5 text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td
                scope="row"
                className="font-medium w-full border-2 border-[#FFEA7A]  flex justify-between px-10 py-4"
              >
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={5}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={5}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={20}
                  height={15}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r from-[#B8D4FD]">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                2
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                zxccv
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="font-medium w-full border-2 border-[#B8D4FD]  flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={5}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={5}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={20}
                  height={15}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r  from-[#FFC27A]">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                3
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                qwerwer
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="w-full border-2 border-[#FFC27A]  flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={30}
                  height={20}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r  ">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                4
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                cdas
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="w-full border-2   flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={30}
                  height={20}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r  ">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                5
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                rytu
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="w-full border-2   flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={30}
                  height={20}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r ">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                6
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                xcvx
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="w-full border-2  flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={30}
                  height={20}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r  ">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                7
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                yuit
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="w-full border-2   flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={30}
                  height={20}
                />
              </td>
            </tr>
            <div className="h-4" />
            <tr className="mt-2  bg-gradient-to-r ">
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                8
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                vbngt
              </td>
              <td
                scope="row"
                className="px-6  text-center font-medium  whitespace-nowrap"
              >
                12345
              </td>
              <td className="w-full border-2 flex justify-between px-10 py-4">
                <Image
                  src="/img/leaderboard/grindToken.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/ticketBlue.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/ticketRed.png"
                  width={30}
                  height={20}
                />
                <Image
                  src="/img/leaderboard/boardNFT_sm 2.png"
                  width={25}
                  height={25}
                />
                <Image
                  src="/img/leaderboard/solana.png"
                  width={30}
                  height={20}
                />
              </td>
            </tr>
            <div className="h-4" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLeaderboard;

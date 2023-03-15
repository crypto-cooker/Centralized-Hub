/* eslint-disable react-hooks/exhaustive-deps */


export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  return (
    <>
      <main>
        <div className="container w-full mx-auto">
          <div className="main-content text-3xl mx-auto sm:bg-white max-w-full w-[820px] sm:h-[460px] h-auto sm:mt-14 text-center p-12 font-semibold">
            <div className="uppercase text-xl tracking-widest ">Welcome</div>
            <div className="flex-col sm:flex-row space-y-4 sm:space-y-0 items-center flex w-2/3 sm:justify-around mx-auto text-xs tracking-wider font-bold mt-24 sm:mt-40">
              <div className="flex items-center justify-center bg-stone-200 w-[100px] h-[100px] cursor-pointer select-none"></div>
              <div className="flex items-center justify-center bg-stone-200 w-[100px] h-[100px] cursor-pointer select-none"></div>
              <div className="flex items-center justify-center bg-stone-200 w-[100px] h-[100px] cursor-pointer select-none"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

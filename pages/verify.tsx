import { useMainContext } from "../contexts/index";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Button from "components/Button";

export default function VerifyPage(
  props: {
    startLoading: Function;
    closeLoading: Function;
    pageLoading: boolean;
  },
  StautsProps: { status: number }
) {
  // const { authToken, gamerTag } = useMainContext
  const routes = useRouter();
  const [currentStatus, setCurrentStatus] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleVerifyBtnClicked = useCallback(async () => {
    if (currentStatus === 1) {
      console.log("hereere>>>", currentStatus);
      setCurrentStatus(0);
      return;
    }

    if (currentStatus === 0) {
    }

    // setCurrentStatus(currentStatus + 1);
  }, [currentStatus]);
  return (
    <>
      <main className="h-[calc(100%-300px)]">
        <div className="container w-full mx-auto h-full flex justify-center items-center">
          <div className="main-content text-3xl mx-auto sm:bg-white max-w-full w-[820px] sm:h-[460px] h-auto sm:mt-14 text-center p-12 font-semibold">
            {currentStatus === 0 && (
              <>
                <div className=" text-xl tracking-widest font-bold">
                  Verify Your Email Address
                </div>
                <div className="text-xl tracking-widest mt-4">
                  You're alomost there. We send an email to <br />
                  <div className=" uppercase text-xl tracking-widest font-bold ">
                    email Address
                  </div>
                </div>
                <div className="text-xl tracking-widest">
                  Click on the link in the email to complete your registeration
                </div>
              </>
            )}
            {currentStatus === 1 && (
              <>
                <div className=" text-xl tracking-widest ">
                  Verify Your Email Address
                </div>
                <div className="text-xl tracking-widest mt-4">
                  You're alomost there. We send an email to <br />
                  <div className=" uppercase text-xl tracking-widest ">
                    email Address
                  </div>
                </div>
                <div className="text-xl tracking-widest">
                  Click on the link in the email to complete your registeration
                </div>
              </>
            )}
            <div className="control-box flex flex-col items-center">
              <Button
                label={currentStatus === 1 ? "Sign In" : "Resend Email"}
                isLoading={isProcessing}
                className={`border-2 border-black text-stone-400 text-xl uppercase tracking-widest w-[250px] mt-32
              `}
                onClick={handleVerifyBtnClicked}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

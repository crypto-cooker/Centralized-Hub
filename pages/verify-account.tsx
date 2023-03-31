import { useMainContext } from "../contexts/index";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Button from "components/Button";
import { resendVerify, verifyEmail } from "actions/verify";
import { successAlertBottom } from "components/ToastGroup";

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
  const [storeEmail, setStoreEmail] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [getCode, setGetCode] = useState<string>("");

  const handleVerifyBtnClicked = useCallback(async () => {
    if (currentStatus === 1) {
      setIsProcessing(true);
      console.log("hereere>>>", currentStatus);

      routes.push("/signin");
      setCurrentStatus(0);
      return;
    }

    if (currentStatus === 0) {
      setIsProcessing(true);
      console.log("hereere>>>", currentStatus);
      const res = await resendVerify(email);
      successAlertBottom("Your verify link was resent to your email");
      setIsProcessing(false);
      console.log(res);
    }
    if (currentStatus === 2) {
      setIsProcessing(true);
      const res = await resendVerify(email);
      successAlertBottom("Your verify link was resent to your email");
      setIsProcessing(false);
      console.log(res);
    }

    // setCurrentStatus(currentStatus + 1);
    setIsProcessing(false);
  }, [currentStatus]);

  useEffect(() => {
    if (!routes) return;
    const setemail = localStorage.getItem("storeEmail");
    setStoreEmail(setemail);
    setEmail(setemail);
    console.log(routes);
    if (routes.asPath !== "/verify-account") {
      const path = routes.asPath.split("=");
      const verifycode = path[1].split("&");
      const email = path[2];
      const code = verifycode[0];
      console.log(email, code);
      (async () => {
        const verifyRes = await verifyEmail(email, code);
        console.log(verifyRes);
        if (verifyRes === "OK") {
          setCurrentStatus(1);
        } else {
          setCurrentStatus(2);
        }
      })();
    }
  }, [routes.asPath !== "/verify-account"]);
  return (
    <>
      <main className="h-[calc(100%-300px)]">
        <div className="container w-full mx-auto h-full flex justify-center items-center">
          <div className="main-content text-3xl mx-auto space-y-4 sm:bg-white max-w-full w-[820px] sm:h-[460px] h-auto sm:mt-14 text-center p-12 ">
            {currentStatus === 0 && (
              <>
                <div className=" text-xl font-extrabold mt-12">
                  Verify Your Email Address
                </div>
                <div className="text-xl  mt-4">
                  You're alomost there. We send an email to
                </div>
                <div className=" text-xl  font-extrabold ">{storeEmail}</div>
                <div className="text-xl ">
                  Click on the link in the email to complete your registeration
                </div>
              </>
            )}
            {currentStatus === 1 && (
              <>
                <div className="text-xl font-extrabold mt-12">
                  Your email has been verified
                </div>
                <div className="text-xl  mt-4">
                  You can now sign into your new account
                </div>
              </>
            )}
            {currentStatus === 2 && (
              <>
                <div className=" text-xl font-extrabold mt-12">
                  Email Verification Link Expired
                </div>
                <div className="text-xl px-16 mt-4">
                  It looks like the verification link has expired. Click below
                  to resend the link
                </div>
              </>
            )}
            <div className="control-box flex flex-col items-center">
              <Button
                label={
                  currentStatus === 0
                    ? "Resend Email"
                    : currentStatus === 1
                    ? "Sign In"
                    : currentStatus === 2
                    ? "Resend verification link"
                    : ""
                }
                isLoading={isProcessing}
                className={`border-2 border-black text-black text-xl bg-[#D9D9D9]  w-[250px] mt-16 hover:bg-[#5EF388]
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

import Button from "components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { resetPass } from "actions/forgot";
export default function setNewPassword(
  props: {
    startLoading: Function;
    closeLoading: Function;
    pageLoading: boolean;
  },
  StautsProps: { status: number }
) {
  const [currentStatus, setCurrentStatus] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  useEffect(() => {
    if (!router) return;

    const getEmail = router.query.email;
    const getPasscode = router.query.passwordCode;
    setEmail(getEmail?.toString());
    setPasscode(getPasscode?.toString());
    setPassword("password");
  }, [router]);
  const resetPassword = async () => {
    const resetRes = await resetPass(email, password, passcode);
    console.log(resetRes);
    if (typeof resetRes === "string") {
      setCurrentStatus(1);
    }
  };
  return (
    <>
      <main className="h-[calc(100%-300px)]">
        <div className="container w-full mx-auto h-full flex justify-center items-center">
          <div className="main-content text-3xl mx-auto sm:bg-white max-w-full w-[820px] sm:h-[460px] h-auto sm:mt-14 text-center p-12 font-semibold">
            {currentStatus === 0 && (
              <>
                <div className=" text-xl tracking-widest font-bold">
                  Trouble Signing In?
                </div>
                <div className="text-xl tracking-widest mt-4">
                  Click the button below to rest your password. If you did not
                  request a password rest, you can disregard this message.
                </div>
                {/* <div className="text-xl tracking-widest">
                  Click on the link in the email to complete your registeration
                </div> */}
              </>
            )}
            {currentStatus === 1 && (
              <>
                <div className=" text-xl tracking-widest ">
                  Reset Password Link Expired
                </div>
                <div className="text-xl tracking-widest mt-4">
                  It looks like the password reset link has expired. Click below
                  to resend the link
                </div>
                {/* <div className="text-xl tracking-widest">
                  Click on the link in the email to complete your registeration
                </div> */}
              </>
            )}
            <div className="control-box flex flex-col items-center">
              <Button
                label="Reset Password"
                isLoading={isProcessing}
                className={`border-2 border-black text-stone-400 text-xl uppercase tracking-widest w-[250px] mt-32
              `}
                onClick={resetPassword}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Button from "components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { resetPass } from "actions/forgot";
import Input from "components/Input";
import { useMainContext } from "contexts";
export default function setNewPassword(
  props: {
    startLoading: Function;
    closeLoading: Function;
    pageLoading: boolean;
  },
  StautsProps: { status: number }
) {
  const [currentStatus, setCurrentStatus] = useState<number>(0);
  const [pageStatus, setPageStatus] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passConfirm, setPassConfirm] = useState<string>("");
  const [stayIn, setStayIn] = useState<string>("");
  const [passLevelMsg, setPassLevelMsg] = useState<string>("");
  const [passLevelStatus, setPassLevelStatus] = useState<string>("success");
  const [passValidations, setPassValidations] = useState<boolean[]>([
    false,
    false,
    false
  ]);
  const [validation, setValidation] = useState<boolean>(false);

  const { authToken, login } = useMainContext();

  const router = useRouter();
  useEffect(() => {
    if (!router) return;

    const getEmail = router.query.email;
    const getPasscode = router.query.passwordCode;

    setEmail(getEmail?.toString());
    setPasscode(getPasscode?.toString());
  }, [router]);
  const handlePassInputChange = (e) => {
    const pass: string = e.target.value ?? "";
    let validations = Object.assign(passValidations);
    const regex = /[a-zA-Z0-9]/;
    const spRegex = /[^a-zA-Z0-9]/g;
    let count = 0;
    validations[2] = regex.test(pass);
    count += regex.test(pass) ? 1 : 0;
    validations[1] = pass.length > 7;
    count += pass.length > 7 ? 1 : 0;
    count += spRegex.test(pass) ? 1 : 0;
    count += pass.length > 11 ? 1 : 0;
    validations[0] = count > 1;
    switch (count) {
      case 1:
        setPassLevelStatus("error");
        setPassLevelMsg("Too weak");
        break;
      case 2:
        setPassLevelStatus("warning");
        setPassLevelMsg("Better");
        break;
      case 3:
        setPassLevelStatus("success");
        setPassLevelMsg("Strong");
        break;
      case 4:
        setPassLevelStatus("success");
        setPassLevelMsg("Very String");
        break;
      default:
        setPassLevelStatus(" ");
        setPassLevelMsg("Too weak");
    }
    if (!pass) setPassLevelMsg("");

    setPassValidations(validations);
    setPassword(e.target.value);
  };

  const handlePassConfirmInputChange = (e) => {
    setPassConfirm(e.target.value);
  };
  const handleCheckBoxChange = (e) => {
    if (!e.target.checked) setStayIn("");
    else setStayIn("checked");
  };
    const resetPassword = async () => {
      setIsProcessing(true);
      const resetRes = await resetPass(email, password, passcode);

      await login(email, password);
      console.log(resetRes);
      if (typeof resetRes === "string") {
        setPageStatus(0);
        setCurrentStatus(0);
      }
    };

    const toResetPassword = () => {
      if (pageStatus === 1) {
        setPageStatus(0);
      }
      setPageStatus(pageStatus + 1);
    };
    return (
      <>
        {/* {pageStatus === 0 && (
        <main className="h-[calc(100%-300px)]">
          <div className="container w-full mx-auto h-full flex justify-center items-center">
            <div className="main-content text-3xl mx-auto sm:bg-white max-w-full w-[820px] sm:h-[460px] h-auto sm:mt-14 text-center p-12 font-semibold">
              {currentStatus === 0 && (
                <>
                  <div className=" text-xl  font-bold mt-12">
                    Trouble Signing In?
                  </div>
                  <div className="text-xl mt-4 px-14">
                    Click the button below to rest your password. If you did not
                    request a password rest, you can disregard this message.
                  </div>
                </>
              )}
              {currentStatus === 1 && (
                <>
                  <div className=" text-xl mt-12">
                    Reset Password Link Expired
                  </div>
                  <div className="text-xl mt-4 px-14">
                    It looks like the password reset link has expired. Click
                    below to resend the link
                  </div>
                </>
              )}
              {currentStatus === 0 && (
                <div className="control-box flex flex-col items-center">
                  <Button
                    label="Reset Password"
                    isLoading={isProcessing}
                    className={`border-2 border-black text-black bg-[#D9D9D9] text-xl uppercase tracking-widest w-[250px] mt-14
              `}
                    onClick={toResetPassword}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      )} */}
        {pageStatus === 0 && (
          <main className="h-[calc(100%-100px)]">
            <div className="container w-full h-full mx-auto flex justify-center items-center">
              <div className="main-content text-3xl sm:bg-white max-w-full w-[380px] sm:h-[460px] h-auto p-12 font-semibold -translate-y-[50px]">
                <div className="text-2xl tracking-wider uppercase text-center">
                  Reset Password
                </div>
                <div className="w-full mt-8">
                  <Input
                    className="border-0"
                    type="password"
                    value={password}
                    status={passLevelStatus}
                    placeholder="New Password"
                    title="New Password"
                    onChange={handlePassInputChange}
                  />
                  <Input
                    className="border-0 mt-3"
                    type="password"
                    value={passConfirm}
                    status={passLevelStatus}
                    placeholder="Confirm Password"
                    title="Confirm Password"
                    icon=""
                    onChange={handlePassConfirmInputChange}
                    // onIconClick={}
                  />
                </div>
                {/* {passLevelStatus === "error" && (
              <div className="text-xs text-red-500 mt-4 flex space-x-2">
                <div className="w-[20%]">
                  <Image src={Warning} />
                </div>
                <p>
                  Your Gamertag or password may be incorrect. Check to make sure
                  caps lock is off. If you can’t sign in, visit the{" "}
                  <Link href="/forgot">
                    <span className="text-black cursor-pointer">
                      CAN’T SIGN IN
                    </span>
                  </Link>{" "}
                  link for help.
                </p>
              </div>
            )} */}

                <div
                  className={`${
                    passLevelStatus === "error"
                      ? "hidden"
                      : "text-xs text-black mt-4 flex space-x-2"
                  }`}
                >
                  <Input
                    type="checkbox"
                    value={stayIn}
                    onChange={handleCheckBoxChange}
                  />
                  <p>Stay signed in</p>
                </div>

                <div className="control-box flex flex-col items-center">
                  <Button
                    label="Let's Go!"
                    isLoading={isProcessing}
                    className={` ${
                      password && password === passConfirm
                        ? "pl-2 mt-16 text-xl bg-[#5EF388]  text-black uppercase tracking-widest"
                        : "pl-2 border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-16"
                    } `}
                    onClick={resetPassword}
                  />
                  {/* <div className="text-sm uppercase text-center mt-4">
                <Link href="/forgot">
                  <p className="hover:underline cursor-pointer select-none">
                    Can't Sign In?
                  </p>
                </Link>
                <Link href="/signup">
                  <p className="hover:underline cursor-pointer select-none">
                    Create Account
                  </p>
                </Link>
              </div> */}
                </div>
              </div>
            </div>
          </main>
        )}
      </>
    );
}

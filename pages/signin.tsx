/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";

import eyeSvg from "assets/eye.svg";
import eyeNoneSvg from "assets/eye-none.svg";
import { useMainContext } from "contexts";
import Button from "components/Button";
import Input from "components/Input";
import Warning from "../public/img/warning.png";

export default function SignInPage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [passShow, setPassShow] = useState<boolean>(false);
  const [stayIn, setStayIn] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [passLevelMsg, setPassLevelMsg] = useState<string>("");
  const [passLevelStatus, setPassLevelStatus] = useState<string>("success");

  const { authToken, login, onetimeCode } = useMainContext();
  const navigator = useRouter();

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePassInputChange = (e) => {
    setPass(e.target.value);
  };

  const handleCheckBoxChange = (e) => {
    if (!e.target.checked) setStayIn("");
    else setStayIn("checked");
  };

  const handlePassShowIconClicked = () => {
    setPassShow((show) => !show);
  };

  const handleLoginClicked = useCallback(async () => {
    if (!name || !pass) {
      return;
    }
    console.log("here>>>>", passLevelStatus);

    setIsProcessing(true);
    const validLogin = await login(name, pass);
    console.log(authToken);
    if (!authToken) {
      setPassLevelStatus("error");
      setPassLevelMsg(
        "Your Gamertag or password may be incorrect. Check to make sure caps lock is off. If you can’t sign in, visit the CAN’T SIGN IN link for help."
      );
    }

    setIsProcessing(false);
  }, [name, pass, authToken]);

  useEffect(() => {
    if (authToken) {
      navigator.push(
        "https://dda-preregistration.vercel.app/" + onetimeCode + "/" + name
      );
    }
  }, [authToken]);

  return (
    <>
      <main className="h-[calc(100%-100px)]">
        <div className="container w-full h-full mx-auto flex justify-center items-center">
          <div className="main-content text-3xl sm:bg-white max-w-full w-[380px] sm:h-[460px] h-auto p-12 font-semibold -translate-y-[50px]">
            <div className="text-2xl tracking-wider uppercase text-center">
              Sign In
            </div>
            <div className="w-full mt-8">
              <Input
                className="border-0"
                value={name}
                status={passLevelStatus}
                placeholder="GamerTag / Email"
                title="GamerTag"
                onChange={handleNameInputChange}
              />
              <Input
                className="border-0 mt-3"
                type={passShow ? "text" : "password"}
                value={pass}
                status={passLevelStatus}
                placeholder="Password"
                title="Password"
                icon={<Image src={passShow ? eyeNoneSvg : eyeSvg} />}
                onChange={handlePassInputChange}
                onIconClick={handlePassShowIconClicked}
              />
            </div>
            {passLevelStatus === "error" && (
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
            )}

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
                  name && pass
                    ? "pl-2 mt-16 text-xl bg-[#5EF388]  text-black uppercase tracking-widest"
                    : "pl-2 border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-16"
                } `}
                onClick={handleLoginClicked}
              />
              <div className="text-sm uppercase text-center mt-4">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

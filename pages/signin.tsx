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

  const { authToken, login } = useMainContext();
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
    if (!name || !pass) return;

    setIsProcessing(true);
    await login(name, pass);
    setIsProcessing(false);
  }, [name, pass, authToken]);

  useEffect(() => {
    if (authToken) {
      navigator.push("/welcome");
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
                placeholder="GamerTag / Email"
                title="GamerTag"
                onChange={handleNameInputChange}
              />
              <Input
                className="border-0 mt-3"
                type={passShow ? "text" : "password"}
                value={pass}
                placeholder="Password"
                title="Password"
                icon={<Image src={passShow ? eyeNoneSvg : eyeSvg} />}
                onChange={handlePassInputChange}
                onIconClick={handlePassShowIconClicked}
              />
            </div>
            <div className="text-xs text-black mt-4 flex space-x-2">
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
                className="border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-16"
                onClick={handleLoginClicked}
              />
              <div className="text-sm uppercase text-center mt-4">
                <p className="hover:underline cursor-pointer select-none">
                  Can't Sign In?
                </p>
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

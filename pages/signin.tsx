/* eslint-disable react-hooks/exhaustive-deps */
import Button from "components/Button";
import Input from "components/Input";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [stayIn, setStayIn] = useState<string>("checked");

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
                type="password"
                value={pass}
                placeholder="Password"
                title="Password"
                onChange={handlePassInputChange}
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
                className="border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-16"
              />
              <div className="text-sm uppercase text-center mt-4">
                <p className="hover:underline">Can't Sign In?</p>
                <Link href="/signup">
                  <p className="hover:underline">Create Account</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

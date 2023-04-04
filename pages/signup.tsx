/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useState, useEffect } from "react";
import { dispatchRegister, checkEmail } from "actions";
import Button from "components/Button";
import Input from "components/Input";
import { errorAlertBottom, successAlertBottom } from "components/ToastGroup";
import DateInput from "../components/DateInput";
import Warning from "../public/img/warning.png";

export default function SignInPage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const [email, setEmail] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [passConfirm, setPassConfirm] = useState<string>("");
  const [passLevelMsg, setPassLevelMsg] = useState<string>("");
  const [passLevelStatus, setPassLevelStatus] = useState<string>("success");
  const [tagLevelStatus, setTagLevelStatus] = useState<string>("success");

  const [passValidations, setPassValidations] = useState<boolean[]>([
    false,
    false,
    false
  ]);
  const [validation, setValidation] = useState<boolean>(false);
  const [dateValidation, setDateValidation] = useState<boolean>(true);
  const [tagValidation, setTagValidation] = useState<boolean>(false);
  const [receiveBT, setReceiveBT] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const navigator = useRouter();

  const subTitleArray = [
    "Your email is used to log in",
    "Tell us how old are you",
    "What is your gamertag?",
    "Keep it to yourself!"
  ];
  const labelArray = ["Your Email", "Date of Birth", "GamerTag", "Password"];

  const handleEmailInputChange = (e) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
    const isValidEmail = emailRegex.test(email);
    setValidation(isValidEmail);
    setEmail(e.target.value);
  };

  const handleBirthInputChange = (e) => {
    setBirth(e.target.value);
  };

  const handleMonthInputChange = (e) => {
    let _month = e.target.value;
    setMonth(_month);
  };

  const handleDayInputChange = (e) => {
    let _day = e.target.value;
    setDay(_day);
  };

  const handleYearInputChange = (e) => {
    let _year = e.target.value;
    setYear(_year);
  };

  const handleTagInputChange = (e) => {
    let _tag = e.target.value;
    setTag(_tag);
    // const tagRegex = /[a-zA-Z0-9]/;
    // let validation = tagRegex.test(_tag);
    // console.log("shit>>>", validation, _tag.length);
    // if (_tag.length > 3 && validation) {
    //   setTagValidation(true);
    //   setPassLevelStatus("success");
    // } else {
    //   setTagValidation(false);
    //   setPassLevelStatus("error");
    // }
  };

  const handlePassInputChange = useCallback(
    (e) => {
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
          setPassLevelMsg("Very Stroing");
          break;
        default:
          setPassLevelStatus(" ");
          setPassLevelMsg("Too weak");
      }
      if (!pass) setPassLevelMsg("");

      setPassValidations(validations);
      setPass(e.target.value);
    },
    [passValidations]
  );

  const handlePassConfirmInputChange = (e) => {
    setPassConfirm(e.target.value);
  };

  const handleReceiveBTCheckBoxChange = (e) => {
    if (!e.target.checked) setReceiveBT("");
    else setReceiveBT("checked");
  };

  const valTag = (tag) => {
    const tagRegex = /^[A-Za-z0-9]*$/;
    let tagvalidation = tagRegex.test(tag);
    console.log("valtag<<<", tagvalidation);
    if (tag.match(tagRegex) && tag.length > 3) {
      return true;
    } else {
      return false;
    }
  };

  const valDate = (month, day, year) => {
    const date = month + "/" + day + "/" + year;
    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    // const currentMonth = currentDate.getUTCMonth() + 1;
    // const currentDay = currentDate.getUTCDate();

    setBirth(date);
    let dateformat =
      /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

    // Matching the date through regular expression
    if (date.match(dateformat) && year < currentYear) {
      let operator = date.split("/");

      // Extract the string into month, date and year
      let datepart = [];
      if (operator.length > 1) {
        datepart = date.split("/");
      }
      let month = parseInt(datepart[0]);
      let day = parseInt(datepart[1]);
      let year = parseInt(datepart[2]);

      // Create a list of days of a month
      let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month == 1 || month > 2) {
        if (day > ListofDays[month - 1]) {
          //to check if the date is out of range
          return false;
        }
      } else if (month == 2) {
        let leapYear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
        if (leapYear == false && day >= 29) return false;
        else if (leapYear == true && day > 29) {
          console.log("Invalid date format!");
          return false;
        }
      }
    } else {
      console.log("Invalid date format!");
      return false;
    }
    return true;
  };

  const handleNextBtnClicked = useCallback(async () => {
    if (currentStep === 3) {
      if (!pass || pass !== passConfirm) return;
      if (passValidations.indexOf(false) > -1) return;

      setIsProcessing(true);
      const registerRes = await dispatchRegister(email, tag, birth, true, pass);

      const get = localStorage.setItem("storeEmail", email);

      setIsProcessing(false);
      navigator.push("/verify-account");

      if (typeof registerRes !== "string") {
        successAlertBottom(
          `Successfully registered. Your gamerTag is ${registerRes.gamerTag}`
        );
        setEmail("");
        setBirth("");
        setTag("");
        setPass("");
        setPassConfirm("");
        setPassLevelMsg("");
        setPassLevelStatus("");
        setPassValidations([false, false, false]);
        setCurrentStep(0);
      } else {
        errorAlertBottom(registerRes);
        setCurrentStep(0);
      }
      return;
    }
    if (currentStep === 0) {
      if (!email) return;
      setIsProcessing(true);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
      const isValidEmail = emailRegex.test(email);

      if (!isValidEmail) {
        setPassLevelMsg("Invalid email address");
        setPassLevelStatus("error");
        return;
      }
      const isEnableEmail = await checkEmail(email);
      if (isEnableEmail == "OK") {
        console.log("ok");
      } else {
        errorAlertBottom("Email already exists");
        setPassLevelStatus("error");
        return;
      }
      setIsProcessing(false);
      setValidation(false);
    }
    if (currentStep === 1) {
      if (!birth) return;
      setIsProcessing(true);
      if (!valDate(month, day, year)) {
        return;
      }
      setIsProcessing(false);
    }
    if (currentStep === 2) {
      if (!tag) return;
      setIsProcessing(true);
      const tagRegex = /^[A-Za-z0-9]*$/;
      let tagvalidation = tagRegex.test(tag);
      console.log("tag>>>", tagvalidation);
      if (!valTag(tag)) {
        return;
      }
      setIsProcessing(false);
    }
    setPassLevelMsg("");
    setPassLevelStatus("success");
    setCurrentStep(currentStep + 1);
  }, [currentStep, pass, email, tag, birth, passConfirm, passValidations]);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (valTag(tag)) {
      setTagValidation(true);
      setTagLevelStatus("success");
    } else {
      setTagValidation(false);
      setTagLevelStatus("error");
    }
  }, [tag]);

  useEffect(() => {
    if (valDate(month, day, year)) {
      setDateValidation(true);
    } else {
      setDateValidation(false);
    }
  }, [month, day, year]);
  return (
    <>
      <main className="h-[calc(100%-100px)]">
        <div className="container w-full h-full mx-auto flex justify-center items-center">
          <div className="main-content text-3xl sm:bg-white max-w-full w-[380px] sm:h-[460px] h-auto p-12 font-semibold -translate-y-[50px]">
            <div className="text-2xl tracking-wider uppercase text-center">
              Create an Account
            </div>
            <div className="mx-auto w-[92%] h-0.5 flex">
              {new Array(4).fill(0).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1/4 h-full ${
                    currentStep === idx ? "bg-green-400" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="text-xs tracking-wider text-center text-gray-500 mt-4">
              {subTitleArray[currentStep]}
            </div>
            <div className="w-full mt-8">
              {currentStep === 0 && (
                <Input
                  className="border-0"
                  value={email}
                  placeholder={labelArray[currentStep]}
                  error={passLevelMsg}
                  status={passLevelStatus}
                  title={labelArray[currentStep]}
                  onChange={handleEmailInputChange}
                />
              )}
              {currentStep === 1 && (
                <>
                  {!focused && (
                    <Input
                      className="border-2"
                      value=""
                      placeholder={labelArray[currentStep]}
                      title={labelArray[currentStep]}
                      error={passLevelMsg}
                      status={passLevelStatus}
                      onChange={handleMonthInputChange}
                      onClick={() => setFocused(true)}
                    />
                  )}
                  {focused && (
                    <>
                      <div className="flex relative">
                        <div
                          className={`absolute w-full h-12 -z-20   ${
                            dateValidation && birth
                              ? "bg-stone-100"
                              : "bg-red-100 border-[1px] border-red-500"
                          }`}
                        ></div>
                        <DateInput
                          className=""
                          value={month}
                          placeholder="MM"
                          title="MONTH"
                          onChange={handleMonthInputChange}
                        />
                        <DateInput
                          className="border-x-2"
                          value={day}
                          placeholder="DD"
                          title="DAY"
                          onChange={handleDayInputChange}
                        />
                        <DateInput
                          className="border-0"
                          value={year}
                          placeholder="YYYY"
                          title="YEAR"
                          onChange={handleYearInputChange}
                        />
                      </div>
                      {!dateValidation && birth && (
                        <div className="text-xs text-red-500 mt-4 flex space-x-1">
                          <div className="w-[10%]">
                            <Image src={Warning} />
                          </div>
                          <p>You must enter a valid birthdate.</p>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Input
                    className="border-0"
                    value={tag}
                    placeholder={labelArray[currentStep]}
                    title={labelArray[currentStep]}
                    status={tagLevelStatus}
                    onChange={handleTagInputChange}
                  />
                  {tagValidation === false && tag && (
                    <div className="text-xs text-red-500 mt-4 flex space-x-1">
                      <div className="w-[10%]">
                        <Image src={Warning} />
                      </div>
                      <p>Only letters and numbers are allowed.</p>
                    </div>
                  )}
                </>
              )}
              {currentStep === 3 && (
                <Input
                  className="border-0"
                  value={pass}
                  placeholder={labelArray[currentStep]}
                  title={labelArray[currentStep]}
                  type="password"
                  error={passLevelMsg}
                  status={passLevelStatus}
                  onChange={handlePassInputChange}
                />
              )}
            </div>
            {currentStep === 0 && (
              <div className="text-xs text-black mt-4 flex space-x-2">
                <Input
                  type="checkbox"
                  // className="appearance-none bg-black rounded-full"
                  value={receiveBT}
                  onChange={handleReceiveBTCheckBoxChange}
                />
                <p>
                  Receive news, special offers, and playtest invitatinos from
                  Block Tackle Inc.
                </p>
              </div>
            )}
            {currentStep === 3 && (
              <>
                <div className="text-xs text-black ml-6 mt-4 flex space-x-2">
                  <span
                    className={`${
                      passValidations[0] ? "bg-green-400" : "bg-gray-400"
                    } rounded-full w-3.5 h-3.5 text-white flex justify-center items-center text-[8px]`}
                  >
                    {passValidations[0] ? "✔" : "X"}
                  </span>
                  <p>Must be Okay strength or better.</p>
                </div>
                <div className="text-xs text-black ml-6 mt-1 flex space-x-2">
                  <span
                    className={`${
                      passValidations[1] ? "bg-green-400" : "bg-gray-400"
                    } rounded-full w-3.5 h-3.5 text-white flex justify-center items-center text-[8px]`}
                  >
                    {passValidations[1] ? "✔" : "X"}
                  </span>
                  <p> Password is at least 8 characters long.</p>
                </div>
                <div className="text-xs text-black ml-6 mt-1 flex space-x-2">
                  <span
                    className={`${
                      passValidations[2] ? "bg-green-400" : "bg-gray-400"
                    } rounded-full w-3.5 h-3.5 text-white flex justify-center items-center text-[8px]`}
                  >
                    {passValidations[2] ? "✔" : "X"}
                  </span>
                  <p> Password contains at least one letter or number.</p>
                </div>
                <div className="w-full mt-4">
                  <Input
                    className="border-0"
                    value={passConfirm}
                    placeholder={"Confirm password"}
                    title={"Confirm password"}
                    type="password"
                    status={pass === passConfirm ? "success" : "error"}
                    onChange={handlePassConfirmInputChange}
                  />
                </div>
              </>
            )}
            <div className="control-box flex flex-col items-center">
              {currentStep === 0 && (
                <Button
                  label="Next"
                  isLoading={isProcessing}
                  className={` ${
                    currentStep === 0 && validation === true
                      ? "pl-2 text-xl uppercase tracking-widest w-[144px] bg-[#5EF388]  text-black mt-20"
                      : "pl-2 border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-20"
                  }`}
                  onClick={handleNextBtnClicked}
                />
              )}
              {currentStep === 1 && (
                <Button
                  label="Next"
                  className={` ${
                    currentStep === 1 && dateValidation
                      ? "pl-2 text-xl uppercase tracking-widest w-[144px] bg-[#5EF388]  text-black mt-20"
                      : "pl-2 border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-20"
                  }`}
                  onClick={handleNextBtnClicked}
                />
              )}
              {currentStep === 2 && (
                <Button
                  label="Next"
                  className={` ${
                    currentStep === 2 && tagValidation === true
                      ? "pl-2 text-xl uppercase tracking-widest w-[144px] bg-[#5EF388]  text-black mt-20"
                      : "pl-2 border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-20"
                  }`}
                  onClick={handleNextBtnClicked}
                />
              )}
              {currentStep === 3 && (
                <Button
                  label="Let's go"
                  className={` ${
                    currentStep === 3 && pass && pass === passConfirm
                      ? "pl-2 text-xl uppercase tracking-widest w-[144px] bg-[#5EF388]  text-black mt-10"
                      : "pl-2 border-2 border-stone-300 text-stone-400 text-xl uppercase tracking-widest w-[144px] mt-10"
                  }`}
                  onClick={handleNextBtnClicked}
                />
              )}

              {currentStep === 0 && (
                <div className="text-sm uppercase text-center mt-4">
                  <Link href="/signin">
                    <p className="hover:underline cursor-pointer select-none">
                      Already have an account?
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

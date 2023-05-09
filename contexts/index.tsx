import { dispatchLogin } from "actions";
import { errorAlertBottom } from "components/ToastGroup";
import { createContext, useContext, useEffect, useState } from "react";
import { log } from "util";

interface MainContext {
  authToken: string;
  gamerTag: string;
  status: string;
  onetimeCode: string;
  email: string;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
}

//Context and Provider
const MainContext = createContext<MainContext>({
  authToken: "",
  gamerTag: "",
  status: "",
  onetimeCode: "",
  email: "",
  login: async (_identifier: string, _password: string) => {},
  logout: () => {}
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState<string>("");
  const [gamerTag, setGamerTag] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [onetimeCode, setOnetimeCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const localAuthToken = localStorage.getItem("authToken");
    if (localAuthToken) setAuthToken(localAuthToken);
    const localGamerTag = localStorage.getItem("gamerTag");
    if (localGamerTag) setGamerTag(localGamerTag);
    const localStatus = localStorage.getItem("status");
    if (localStatus) setStatus(localStatus);
    const localOnetimeCode = localStorage.getItem("onetimeCode");
    if (localOnetimeCode) setOnetimeCode(localOnetimeCode);
    const localEmail = localStorage.getItem("email");
    if (localEmail) setEmail(localEmail);
  }, []);

  const value = {
    authToken: authToken,
    gamerTag: gamerTag,
    status: status,
    onetimeCode: onetimeCode,
    email: email,
    login: async (identifier: string, password: string) => {
      const loginRes = await dispatchLogin(identifier, password);
      console.log(loginRes);
      if (loginRes?.token) {
        setAuthToken(loginRes.token);
        localStorage.setItem("authToken", loginRes.token);
        setGamerTag(loginRes.gamerTag);
        localStorage.setItem("gamerTag", loginRes.gamerTag);
        setStatus(loginRes.status);
        localStorage.setItem("status", loginRes.status);
        setOnetimeCode(loginRes.onetimeCode);
        localStorage.setItem("onetimeCode", loginRes.onetimeCode);
        setEmail(loginRes.email);
        localStorage.setItem("email", loginRes.email);
      } else {
        const alertMsg = loginRes.data.response;
        errorAlertBottom(alertMsg);
        // errorAlertBottom("Invalid email or password.");
      }
    },
    logout: () => {
      setAuthToken("");
      setGamerTag("");
      setStatus("");
      setOnetimeCode("");
      setEmail("");
      localStorage.removeItem("authToken");
      localStorage.removeItem("gamerTag");
      localStorage.removeItem("status");
      localStorage.removeItem("onetimeCode");
      localStorage.removeItem("email");
    }
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

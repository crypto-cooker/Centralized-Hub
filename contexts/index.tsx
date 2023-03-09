import { dispatchLogin } from "actions";
import { errorAlertBottom } from "components/ToastGroup";
import { createContext, useContext, useEffect, useState } from "react";

interface MainContext {
  authToken: string;
  gamerTag: string;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
}

//Context and Provider
const MainContext = createContext<MainContext>({
  authToken: "",
  gamerTag: "",
  login: async (_identifier: string, _password: string) => {},
  logout: () => {},
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState<string>("");
  const [gamerTag, setGamerTag] = useState<string>("");

  useEffect(() => {
    const localAuthToken = localStorage.getItem("authToken");
    if (localAuthToken) setAuthToken(localAuthToken);
    const localGamerTag = localStorage.getItem("gamerTag");
    if (localGamerTag) setGamerTag(localGamerTag);
  }, []);

  const value = {
    authToken: authToken,
    gamerTag: gamerTag,
    login: async (identifier: string, password: string) => {
      const loginRes = await dispatchLogin(identifier, password);
      if (loginRes?.token) {
        setAuthToken(loginRes.token);
        localStorage.setItem("authToken", loginRes.token);
        setGamerTag(loginRes.gamerTag);
        localStorage.setItem("gamerTag", loginRes.gamerTag);
      } else {
        const alertMsg = loginRes.data.response;
        errorAlertBottom(alertMsg);
        // errorAlertBottom("Invalid email or password.");
      }
    },
    logout: () => {
      setAuthToken("");
      setGamerTag("");
      localStorage.removeItem("authToken");
      localStorage.removeItem("gamerTag");
    },
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

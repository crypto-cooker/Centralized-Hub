import { dispatchLogin } from "actions";
import { errorAlertBottom } from "components/ToastGroup";
import { createContext, useContext, useEffect, useState } from "react";

interface MainContext {
  authToken: string;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
}

//Context and Provider
const MainContext = createContext<MainContext>({
  authToken: "",
  login: async (_identifier: string, _password: string) => {},
  logout: () => {},
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState<string>("");

  useEffect(() => {
    const localAuthToken = localStorage.getItem("authToken");
    if (localAuthToken) setAuthToken(localAuthToken);
  }, []);

  const value = {
    authToken: authToken,
    login: async (identifier: string, password: string) => {
      const loginRes = await dispatchLogin(identifier, password);
      if (loginRes?.token) {
        setAuthToken(loginRes.token);
        localStorage.setItem("authToken", loginRes.token);
      } else {
        errorAlertBottom(loginRes);
        // errorAlertBottom("Invalid email or password.");
      }
    },
    logout: () => {
      setAuthToken("");
    },
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

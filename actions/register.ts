import axios from "axios";
import { BACKEND_BASE_URL } from "config";

export const dispatchRegister = async (
  email: string,
  gamertag: string,
  dob: string,
  promotionalOptIn: boolean,
  password: string
): Promise<{ email: string; dob: string; gamerTag: string } | string> => {
  try {
    const res = await axios
      .post(BACKEND_BASE_URL + "/auth/register/", {
        email,
        password,
        gamertag,
        dob,
        promotionalOptIn,
      })
      .then((res) => res.data);
    return res?.response;
  } catch (e) {
    console.error(e);
    return JSON.stringify(e?.message ?? e);
  }
};


export const checkEmail = async (email: string) => {
  try {
    const res = await axios.post(BACKEND_BASE_URL + "/auth/is-email-available/", {
      email
    }).then((res) => res.data);
    return res?.response
  } catch (e) {
    console.error(e);
    return JSON.stringify(e?.message ?? e);
  }
};
import axios from "axios";
import { BACKEND_BASE_URL } from "config";

export const dispatchLogin = async (identifier: string, password: string) => {
  try {
    const res = await axios
      .post(BACKEND_BASE_URL + "/auth/login/", {
        identifier,
        password,
      })
      .then((res) => res.data);

    return res?.response;
  } catch (e) {
    console.error(e);
    return JSON.stringify(e?.message ?? e);
  }
};

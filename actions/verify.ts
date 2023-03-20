import axios from "axios"
import { BACKEND_BASE_URL } from '../config';

export const verifyEmail = async (email:string, verificationCode:string) => {
    try {
        const res = await axios.post(BACKEND_BASE_URL + "/auth/verify-email/", { email, verificationCode }).then((res) => res.data)
        return res?.response
    } catch (e) {
        console.error(e)
        return JSON.stringify(e?.message ?? e)
    }
}
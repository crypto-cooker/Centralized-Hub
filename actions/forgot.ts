import axios from "axios"
import { BACKEND_BASE_URL } from "config"

export const forgotPass = async(
    email: string
): Promise<{ email: string } | string> => {
    try {
        const res = await axios.post(BACKEND_BASE_URL + "/auth/forgot-password/", {
            email
        }).then((res) => res.data)
        return res?.response
    } catch (e) {
        console.error(e)
        return JSON.stringify(e?.message ?? e);
    }
}

export const resetPass = async (email: string, password: string, passwordCode: string) => {
    try {
        const res = await axios.post(BACKEND_BASE_URL + "/auth/set-new-password/", { email, password, passwordCode }).then((res) => res.data)
        return res?.response
        
    } catch (e) {
        console.error(e)
        return JSON.stringify(e?.message ?? e)
    }
}

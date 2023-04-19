import axios from "axios"
import { BACKEND_BASE_URL } from "config"

export const getEvents = async() => {
    try { 
        const res = await axios.get(BACKEND_BASE_URL + "/events").then((res) => res.data)
        return res?.response
    } catch (e) {
        console.error(e)
        return JSON.stringify(e?.message ?? e);
    }
}
import { fetchUser } from "../utils/localStorageData"

const userInfo = fetchUser()

export const initialState = {
    user: userInfo,


}
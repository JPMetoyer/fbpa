import { fetchUser } from "../utils/FetchLocalStorageData"

const userInfo = fetchUser()

export const initalState = {
    user :userInfo,
    
}


import { createContext } from "react";
import { UserInfoContextInterface, UserInfoInterface } from '../interfaces/UserInfoInterface';

export const UserContext = createContext<UserInfoContextInterface>({
    userInfo: <UserInfoInterface>{},
    setUserInfo: () => {},
});
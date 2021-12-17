import { UserModel } from "@/models/UserModel";
import axios, { AxiosResponse } from "axios";

export function useUserService() {
  return {
    register(userModel: UserModel): Promise<UserModel> {
      return axios.post("https://ponyracer.ninja-squad.com/api/users", {
        login: userModel.login,
        password: userModel.password,
        birthYear: userModel.birthYear,
      });
    },
  };
}

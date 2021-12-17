import { RaceModel } from "@/models/RaceModel";
import axios, { AxiosResponse } from "axios";

export function useRaceService() {
  return {
    list(): Promise<AxiosResponse<RaceModel[], any>> {
      return axios.get<Array<RaceModel>>(
        "https://ponyracer.ninja-squad.com/api/races",
        {
          params: {
            status: "PENDING",
          },
        }
      );
    },
  };
}

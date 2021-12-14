import { PonyModel } from "@/models/PonyModel.ts";

export interface RaceModel {
  id: number;
  name: string;
  ponies: Array<PonyModel>;
  startInstant: string;
}

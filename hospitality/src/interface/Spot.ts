import { ReactElement } from "react";

export interface Spot {
  row: number;
  spot: number;
}

export interface Spots extends Array<Spot> {}

export type SpotStatus = "default" | "default busy" | "default selected";

export default interface SpotProps {
  title: string;
  onSelect: () => void;
  id: string;
  status: SpotStatus;
  icon?: ReactElement;
}

export type UnavailableSpots = Array<`${string}-${string}`>;

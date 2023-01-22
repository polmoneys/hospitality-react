import { ReactElement } from "react";
import { Spots } from "./Spot";

export default interface RowProps {
  onSelect: (payload: string) => void;
  wishlist: Spots;
  rowId: number;
  spots: Array<number>;
  rowShape?: any;
  slot?: ReactElement;
  unavailable?: Array<string>;
}

export interface RowMapProps {
  onSelect: (payload: string) => void;
  wishlist: Spots;
  rowId: number;
  columns: Array<number>;
  slot?: ReactElement;
  unavailable?: Array<string>;
}

import { ReactElement } from "react";
import { Spots, UnavailableSpots } from "./Spot";

interface RenderProp<TChildrenProps, TElement = any> {
  (props: TChildrenProps): ReactElement<TElement>;
}

export type MapPropRow = Array<0 | 1>;
export type MapProp = Array<MapPropRow>;

type VisualProps =
  | {
      rows: number;
      columns: number;
      shape?: Array<number>;
      map?: never;
      slot?: ReactElement;
      initialRowIndex?: number;
    }
  | {
      rows?: never;
      columns?: never;
      shape?: never;
      map: MapProp;
      slot?: ReactElement;
      initialRowIndex?: number;
    };

export interface HospitalityProps {
  id: string;
  unavailable?: UnavailableSpots;
  visual: VisualProps;
  children?: RenderProp<{
    selected: Spots;
    onSelect: (payload: string) => void;
  }>;
  onSelect?: (selection: Spots) => void;
  onSelectByRows?: (selection: Record<number, Spots>) => void;
}

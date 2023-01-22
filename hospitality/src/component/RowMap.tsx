import { cloneElement, useMemo } from "react";
import { RowMapProps } from "../interface/Row";
import { SpotStatus } from "../interface/Spot";
import Spot from "./Spot";

function RowMap(props: RowMapProps) {
  const { onSelect, wishlist, rowId, columns, slot, unavailable } = props;

  const rowStyles: Record<string, string> = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${columns.length},1fr)`,
    }),
    [columns]
  );

  const matchCurrentState = (spotId: string | number) => {
    const matches = wishlist?.filter(m => `${m.row}-${m.spot}` === spotId);
    return matches && matches.length > 0 ? true : false;
  };

  let tempSpotId = 0;
  return (
    <div style={rowStyles} hospitality-row="map">
      {columns.map((spot, spotIndex: number) => {
        if (spot === 0)
          return <div occupy-spot="empty" key={`${spotIndex}-dummy`}></div>;

        const spotId = `${rowId}-${++tempSpotId}`;
        const status = unavailable?.includes(spotId)
          ? "busy"
          : matchCurrentState(spotId)
          ? "selected"
          : "default";
        const spotProps = {
          title: `Select spot ${spotId}`,
          onSelect: () => onSelect(spotId),
          id: spotId,
          status: `default ${status}` as SpotStatus,
          key: spotId,
        };
        return !slot ? <Spot {...spotProps} /> : cloneElement(slot, spotProps);
      })}
    </div>
  );
}

export default RowMap;

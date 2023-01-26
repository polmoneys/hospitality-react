import { useEffect, useReducer, useRef } from "react";
import { FocusScope } from "react-aria";
import reducer, { ActionTypes } from "../reducer";
import { groupBy, makeBlueprint } from "../reducer/utils";
import { HospitalityProps } from "../interface/Hospitality";
import Row from "./Row";
import RowMap from "./RowMap";

function Hospitality(props: HospitalityProps) {
  const {
    visual: { shape, slot, map, initialRowIndex = 1, rows, columns },
    unavailable,
    onSelect,
    onSelectByRows,
    children,
    id,
  } = props;

  const [{ blueprint, wishlist }, dispatch] = useReducer(reducer, {
    blueprint: [],
    wishlist: [],
  });

  const hasMap = map !== undefined;

  useEffect(() => {
    if (hasMap) {
      dispatch({
        type: ActionTypes.SET_BLUEPRINT,
        payload: map,
      });
      return;
    }
    makeBlueprint(columns as number, rows as number, 1).then(seed =>
      dispatch({
        type: ActionTypes.SET_BLUEPRINT,
        payload: seed,
      })
    );
  }, [columns, rows, map]);

  useEffect(() => {
    if (onSelectByRows === undefined && onSelect === undefined) {
      console.warn("No callback provided, are we sure ?");
      return;
    }

    if (wishlist.length > 0) {
      if (onSelectByRows !== undefined) {
        const byRows = groupBy(wishlist, "row");
        onSelectByRows?.(byRows);
      }
      if (onSelect !== undefined) {
        onSelect?.(wishlist);
      }
    }
  }, [wishlist]);

  const onSelectRow = (spotId: string) => {
    const splitAt = spotId.indexOf("-");
    const row = spotId.slice(0, splitAt);
    const spot = spotId.replace(`${row}-`, "");
    const point = { spot: Number(spot), row: Number(row) };
    const matches = wishlist?.filter(c => `${c.row}-${c.spot}` === spotId);

    if (matches.length > 0) {
      dispatch?.({
        type: ActionTypes.REMOVE,
        payload: point,
      });
      return;
    }
    dispatch?.({
      type: ActionTypes.ADD,
      payload: point,
    });
  };

  return (
    <div hospitality-root="">
      <FocusScope>
        {hasMap &&
          blueprint?.map((row, rowIndex: number) => (
            <RowMap
              key={`${id}-${rowIndex}-${initialRowIndex}`}
              onSelect={(spotId: string) => onSelectRow(spotId)}
              rowId={rowIndex + 1}
              columns={row}
              unavailable={unavailable}
              wishlist={wishlist}
              slot={slot}
            />
          ))}

        {!hasMap &&
          blueprint?.map((row, rowIndex: number) => (
            <Row
              key={`${id}-${rowIndex}-${initialRowIndex}`}
              onSelect={spotId => onSelectRow(spotId)}
              rowId={rowIndex + initialRowIndex}
              spots={row}
              wishlist={wishlist}
              shape={shape}
              unavailable={unavailable}
              slot={slot}
            />
          ))}
      </FocusScope>

      {children &&
        children({
          onSelect: onSelectRow,
          selected: wishlist,
        })}
    </div>
  );
}

export default Hospitality;

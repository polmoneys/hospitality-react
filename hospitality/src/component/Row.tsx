import { useState, useEffect, useMemo, cloneElement, Fragment } from "react";
import { Blueprint } from "../reducer";
import { makeRowShapeId } from "../reducer/utils";
import RowProps from "../interface/Row";
import { SpotStatus } from "../interface/Spot";
import Spot from "./Spot";

function Row(props: RowProps) {
  const { onSelect, wishlist, rowId, spots, rowShape, slot, unavailable } =
    props;

  const [blueprint, setBlueprint] = useState<Blueprint>([]);

  useEffect(() => {
    if (!rowShape) return;

    const shapeCount = rowShape.reduce((a: number, b: number) => a + b, 0);

    if (shapeCount !== spots.length) {
      console.error("Check *shape* prop as makes no sense to me, bailing out");
      return;
    }

    const shaped = rowShape.map((val: number, position: number) => {
      const start =
        position === 0
          ? 0
          : position === 1
          ? rowShape[position - 1]
          : shapeCount - val;
      const end =
        position === 0
          ? Number(val)
          : position === 1
          ? rowShape[position - 1] + Number(val)
          : shapeCount;
      return spots.slice(start, end);
    });

    setBlueprint(shaped);
  }, [rowShape]);

  const rowStyles: Record<string, string> = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${spots.length},1fr)`,
      placeItems: "center",
    }),
    [spots]
  );

  const matchCurrentState = (spotId: string | number) => {
    const matches = wishlist?.filter(m => `${m.row}-${m.spot}` === spotId);
    return matches && matches.length > 0 ? true : false;
  };

  if (!rowShape)
    return (
      <div style={rowStyles} hospitality-row="">
        {spots.map((_, spotIndex: number) => {
          const spotId = `${rowId}-${spotIndex + 1}`;
          const status = unavailable?.includes(spotId)
            ? "busy"
            : matchCurrentState(spotId)
            ? "selected"
            : "default";

          const spotProps = {
            title: `Select row ${rowId} seat ${spotIndex}`,
            onSelect: () => onSelect(spotId),
            id: spotId,
            status: `default ${status}` as SpotStatus,
            key: spotId,
          };
          return !slot ? (
            <Spot {...spotProps} />
          ) : (
            cloneElement(slot, spotProps)
          );
        })}
      </div>
    );

  const shapedStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${spots.length + (blueprint.length + 1)},1fr)`,
    placeItems: "center",
  };
  return (
    <div style={shapedStyles} hospitality-row="">
      {Array.isArray(blueprint) &&
        blueprint?.map((subRow, subRowIndex: number) =>
          subRow.map((_: any, spotIndex: number) => {
            const spotId = `${rowId}-${makeRowShapeId(
              rowShape,
              subRowIndex,
              spotIndex + 1
            )}`;

            const isFirst = spotIndex === 0;
            const isLast = blueprint.length === subRowIndex;
            const status = unavailable?.includes(spotId)
              ? "busy"
              : matchCurrentState(spotId)
              ? "selected"
              : "default";

            const spotProps = {
              title: `Select row and seat ${spotId}`,
              id: spotId,
              onSelect: () => onSelect(spotId),
              status: `default ${status}` as SpotStatus,
              key: spotId,
            };
            return !slot ? (
              <Fragment>
                {isFirst && (
                  <div occupy-spot="empty" key={`${spotId}-empty`}></div>
                )}
                <Spot {...spotProps} />
                {isLast && (
                  <div occupy-spot="empty" key={`${spotId}-empty-last`}></div>
                )}
              </Fragment>
            ) : (
              <Fragment>
                {isFirst && (
                  <div occupy-spot="empty" key={`${spotId}-empty`}></div>
                )}
                {cloneElement(slot, spotProps)}
                {isLast && (
                  <div occupy-spot="empty" key={`${spotId}-empty-last`}></div>
                )}
              </Fragment>
            );
          })
        )}
    </div>
  );
}

export default Row;

import { MapProp } from "hospitality-react";

const mapPlatea: MapProp = [
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
];

const mapPyramid: MapProp = [
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
];

const mapTable: MapProp = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const emptyGap: Array<0 | 1> = [0, 0, 0, 0];

const emptyRow: Array<0 | 1> = [
  ...emptyGap,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  ...emptyGap,
];

const mapWedding: MapProp = [
  [...emptyGap, 0, 0, 0, 1, 0, 1, 0, 0, 0, ...emptyGap],
  emptyRow,
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  emptyRow,
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
];

const maps = {
  workshop: mapPlatea,
  pyramid: mapPyramid,
  table: mapTable,
  wedding: mapWedding,
};

export function getMap(
  mapKey: "workshop" | "wedding" | "pyramid" | "table"
): MapProp {
  return maps[mapKey];
}
export default maps;

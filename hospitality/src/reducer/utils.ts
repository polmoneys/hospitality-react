export function makeBlueprint(width: number, height: number, val: number) {
  const calculation = Array.from({ length: height }).map(() =>
    Array.from({ length: width }).fill(val)
  );
  return new Promise(resolve => resolve(calculation));
}

export function makeRowShapeId(
  rowShape: Array<number>,
  subRowIndex: number,
  spotIndex: number
) {
  switch (subRowIndex) {
    case 0:
      return spotIndex;
    // break;
    case 1:
      return `${rowShape[0] + spotIndex}`;
    // break;
    case 2:
      return `${rowShape[0] + rowShape[1] + spotIndex}`;
    // break;
    case 3:
      return `${rowShape[0] + rowShape[1] + rowShape[2] + spotIndex}`;
    // break;
    case 4:
      return `${
        rowShape[0] + rowShape[1] + rowShape[2] + rowShape[3] + spotIndex
      }`;

    // break;
    default:
      return `${
        rowShape[0] +
        rowShape[1] +
        rowShape[2] +
        rowShape[3] +
        rowShape[4] +
        spotIndex
      }`;
  }
}

export type MapFunc<T = any> = (val: T, index?: number, arr?: T[]) => T;

const isString = <T = any>(str: string | T): str is string => {
  return typeof str === "string";
};

export const groupBy = <T = any>(
  arr: T[],
  fn: MapFunc<T> | string,
  sortKey?: string
) => {
  if (sortKey === undefined) {
    return arr
      .map(isString(fn) ? (val: any) => val[fn] : fn)
      .reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
      }, {});
  }

  return arr
    .map(isString(fn) ? (val: any) => val[fn] : fn)
    ?.sort((a, b) => a[sortKey] - b[sortKey])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
};

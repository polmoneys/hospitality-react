export function makeBlueprint(width: number, height: number, val: number) {
  const calculation = Array.from({ length: height }).map(() =>
    Array.from({ length: width }).fill(val)
  );
  return new Promise(resolve => resolve(calculation));
}

export function makeRowShapeId(
  shape: Array<number>,
  subRowIndex: number,
  spotIndex: number
) {
  if (subRowIndex === 0) return spotIndex;
  return (
    shape.slice(0, subRowIndex).reduce((prev, curr) => {
      return prev + curr;
    }, 0) + spotIndex
  );
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

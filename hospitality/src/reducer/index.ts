import { Spots } from "../interface/Spot";

export type Blueprint = Array<Array<number>>;
export interface State {
  blueprint: Blueprint;
  wishlist: Spots;
}

export const ActionTypes = {
  SET_BLUEPRINT: "SET_BLUEPRINT",
  ADD: "ADD",
  REMOVE: "REMOVE",
  RESET: "RESET",
} as const;

export interface Action {
  type: keyof typeof ActionTypes;
  payload?: any;
}

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_BLUEPRINT: {
      return {
        ...state,
        blueprint: action.payload as Array<Array<number>>,
      };
    }
    case ActionTypes.ADD: {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }
    case ActionTypes.REMOVE: {
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter(
            point =>
              !(
                action.payload.row === point.row &&
                action.payload.spot === point.spot
              )
          ),
        ],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

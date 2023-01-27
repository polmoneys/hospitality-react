import { Dispatch, SetStateAction } from "react";
import { Hospitality, UnavailableSpots } from "hospitality-react";
import { useControls, folder, button } from "leva";
import { Variants } from "../App";
// import Cam from "./camera";
import Mapped from "./mapped";
import Spot from "./spot";

export const busySpots: UnavailableSpots = ["2-3"];

interface Props {
  setter: Dispatch<SetStateAction<Variants>>;
}

function Stories(props: Props) {
  const { setter } = props;

  const { columns, rows, show, shape, unavailable } = useControls({
    basic: folder(
      {
        rows: {
          label: "Rows (Y)",
          min: 1,
          max: 9,
          step: 1,
          value: 8,
        },
        columns: {
          label: "Columns (X)",
          min: 1,
          max: 9,
          step: 1,
          value: 8,
        },
      },
      { color: "yellow" }
    ),
    show: { value: false, label: "customize shape" },

    shape: folder(
      {
        shape: {
          label: "sum of array must be === to columns",
          min: 1,
          max: 9,
          step: 1,
          render: get => get("show"),
          value: [2, 4, 2],
        },
      },
      {
        color: "yellow",
        render: get => get("show"),
      }
    ),
    unavailable: folder(
      {
        unavailable: {
          label: "Disable spot on row 1",
          min: 1,
          max: 8,
          value: 4,
          step: 1,
          optional: true,
          // suffix: "seat",
        },
      },
      { color: "magenta" }
    ),
    demos: folder(
      {
        default: button(get => setter("basic")),
        diy: button(get => setter("diy")),
        spot: button(get => setter("spot")),
      },
      { color: "#007bff" }
    ),
  });
  const busySpots: UnavailableSpots = [`1-${unavailable}`];

  return (
    <article>
      <Hospitality
        id="default"
        visual={{
          columns,
          rows,
          ...(show && { shape }),
        }}
        onSelect={spot => console.log({ spot })}
        unavailable={busySpots}
      />
    </article>
  );
}

Stories.Map = Mapped;
// Stories.Camera = Cam;
Stories.Spot = Spot;

export default Stories;

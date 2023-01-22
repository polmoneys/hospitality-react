import { Dispatch, SetStateAction } from "react";
import { Hospitality } from "hospitality-react";
import { button, buttonGroup, folder, useControls } from "leva";
import { SpotA } from "./components/spots";
import { Variants } from "../App";
import Shape from "./components/shape";
import { busySpots } from ".";

interface Props {
  setter: Dispatch<SetStateAction<Variants>>;
}
function Spot(props: Props) {
  const { setter } = props;

  // @ts-ignore
  const [{ sides }, set] = useControls(() => ({
    customize: folder(
      {
        sides: {
          value: 22,
          label: "Set shape sides",
        },
        " ": buttonGroup({
          triangle: () => set({ sides: 3 }),
          square: () => set({ sides: 4 }),
          pentagon: () => set({ sides: 5 }),
          circle: () => set({ sides: 22 }),
        }),
      },
      { color: "magenta" }
    ),
    demos: folder(
      {
        default: button(() => setter("basic")),
        diy: button(() => setter("diy")),
        spot: button(() => setter("spot")),
      },
      { color: "#007bff" }
    ),
  }));
  return (
    <article>
      <Hospitality
        id="alpha"
        visual={{
          rows: 4,
          columns: 8,
          slot: (
            <SpotA
              icon={
                <Shape
                  sides={sides}
                  size={44}
                  transforms="translate(-1px,-1px)"
                />
              }
            />
          ),
        }}
        onSelect={spot => console.log({ spot })}
        unavailable={busySpots}
      />
    </article>
  );
}

export default Spot;

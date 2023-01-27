import { Hospitality, MapProp } from "hospitality-react";
import { useControls, buttonGroup, folder, button } from "leva";
import { Dispatch, SetStateAction } from "react";
import { busySpots } from ".";
import { Variants } from "../App";
import { getMap } from "../maps";

interface Props {
  setter: Dispatch<SetStateAction<Variants>>;
}

function Mapped(props: Props) {
  const { setter } = props;

  // @ts-ignore
  const [{ map }, set] = useControls(() => ({
    examples: folder(
      {
        map: "pyramid",
        " ": buttonGroup({
          pyramid: () => set({ map: "pyramid" }),
          workshop: () => set({ map: "workshop" }),
          table: () => set({ map: "table" }),
          wedding: () => set({ map: "wedding" }),
        }),
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
  }));

  return (
    <article>
      <Hospitality
        id="alpha"
        visual={{
          map: getMap(map),
        }}
        unavailable={busySpots}
        onSelect={spot => console.log({ spot })}
      />
    </article>
  );
}

export default Mapped;

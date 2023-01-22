import { Hospitality } from "hospitality-react";
import { useControls, buttonGroup, folder, button } from "leva";
import { Dispatch, SetStateAction } from "react";
import { busySpots } from ".";
import { Variants } from "../App";
import { mapPlatea, mapPyramid, mapTable } from "../maps";

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

  const blueprint =
    map === "workshop" ? mapPlatea : map === "table" ? mapTable : mapPyramid;
  return (
    <article>
      <Hospitality
        id="alpha"
        visual={{
          map: blueprint,
        }}
        unavailable={busySpots}
        onSelect={spot => console.log({ spot })}
      />
      {/* {({ selected }) => (
          <div
            className="row-around align-center flex-stretch"
            style={{ padding: "10vh 10vw" }}
          >
            {selected?.map(it => (
              <p key={`${it.row}-${it.spot}`}>
                {it.row}-{it.spot}
              </p>
            ))}
          </div>
        )} 
      </Hospitality>
        
        */}
    </article>
  );
}

export default Mapped;

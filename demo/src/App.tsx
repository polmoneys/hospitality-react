import { useState } from "react";
import { Leva } from "leva";
import "../../hospitality/src/component/styles.css";
import Stories from "./stories";

const VariantOptions = [
  "basic",
  "diy",
  "spot",
  // "wild"
] as const;
export type Variants = typeof VariantOptions[number];

function App() {
  const [demo, setDemo] = useState<Variants>("basic");

  return (
    <main>
      <Leva
        oneLineLabels={demo !== "diy"}
        hideCopyButton
        titleBar={{ title: "<Hospitality/>", filter: false }}
        // hidden={demo === "wild"}
      />
      {
        {
          basic: <Stories setter={setDemo} />,
          diy: <Stories.Map setter={setDemo} />,
          // wild: <Stories.Camera />,
          spot: <Stories.Spot setter={setDemo} />,
        }[demo]
      }
    </main>
  );
}

export default App;

import { useFocusManager } from "react-aria";
import SpotProps from "../interface/Spot";

function Spot({ title, onSelect, id, status = "default" }: SpotProps) {
  const focusManager = useFocusManager();
  const onKeyDown = (e: any) => {
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusNext({ wrap: true });
        break;
      case "ArrowLeft":
        focusManager.focusPrevious({ wrap: true });
        break;
    }
  };
  return (
    <button
      disabled={status === "default busy"}
      onClick={onSelect}
      hospitality-spot-id={`spot-${id}`}
      hospitality-spot={status}
      onKeyDown={onKeyDown}
      hospitality-tooltip={title}
    >
      <span hospitality-spot-label="hidden">{title}</span>
    </button>
  );
}

export default Spot;

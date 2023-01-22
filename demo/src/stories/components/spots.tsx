import { useFocusManager } from "react-aria";
import { Spot } from "hospitality-react";

export function SpotA({ title, onSelect, id, status, icon }: Partial<Spot>) {
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

  const classNames = [
    status === "default busy" && "busy",
    status === "default selected" && "selected",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      disabled={status === "default busy"}
      className={classNames}
      id={`spot-${id}`}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      hospitality-spot-a=""
    >
      {icon && icon}
      <span hospitality-spot-label="hidden">{title}</span>
    </button>
  );
}

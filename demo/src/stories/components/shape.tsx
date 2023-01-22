import { useMemo, memo } from "react";

function polygon(
  centerX: number,
  centerY: number,
  points: number,
  radius: number
) {
  const degreeIncrement = 360 / points;
  const d = new Array(points).fill("#").map((p, i) => {
    const point = polarToCartesian(
      centerX,
      centerY,
      radius,
      degreeIncrement * i
    );
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}
export { polygon };

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

interface Props {
  sides?: number;
  size?: number;
  fill?: string;
  transforms?: string;
}

function Shape(props: Props) {
  const { sides = 3, size = 69, fill = "currentColor", transforms } = props;

  const polyPath = useMemo(() => {
    const clampedSides = sides < 3 ? 3 : sides > 30 ? 30 : sides;
    const center = size / 2;
    return polygon(center, center, clampedSides, size / 2);
  }, [sides, size]);

  const viewbox = `0 0 ${size} ${size}`;
  return (
    <svg
      aria-hidden="true"
      viewBox={viewbox}
      width={size}
      height={size}
      fill={fill}
      {...(transforms && { style: { transform: transforms } })}
    >
      <path d={polyPath} />
    </svg>
  );
}

Shape.Triangle = (props: Props) => <Shape {...props} sides={3} />;
Shape.Square = (props: Props) => <Shape {...props} sides={4} />;
Shape.Circle = (props: Props) => <Shape {...props} sides={25} />;

const avoidRerenderIf = (prevProps: Props, nextProps: Props) => {
  return prevProps.sides === nextProps.sides;
};

Shape.Freeze = memo((props: Props) => <Shape {...props} />, avoidRerenderIf);

export default Shape;

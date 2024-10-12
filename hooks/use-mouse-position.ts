import * as React from "react";

interface MousePositionProps {
  x: number;
  y: number;
}

export default function useMousePosition(): MousePositionProps {
  const [mousePosition, setMousePosition] = React.useState<MousePositionProps>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

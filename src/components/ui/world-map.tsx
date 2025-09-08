"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map";

export function WorldMap() {
  // Memoize the map creation to avoid recreating on every render
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "hsl(0 0% 90%)",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
    </div>
  );
}
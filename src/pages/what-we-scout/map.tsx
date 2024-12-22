import "leaflet/dist/leaflet.css";

import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { CircleMarker, MapContainer, ImageOverlay } from "react-leaflet";
import DottedMap from "dotted-map/without-countries";

import mapJson from "./map.json";
import { colivings } from "./locations";
import React from "react";
import { LatLngBoundsExpression } from "leaflet";

const dotMap = new DottedMap({ map: mapJson });

// const dotMap = new DottedMap({
//   height: 100,
//   grid: "diagonal",
//   region: {
//     lat: { min: -56, max: 72 },
//     lng: { min: -179, max: -30 },
//   },
// });

const svgMap = dotMap.getSVG({
  radius: 0.22,
  color: "#858585",
  shape: "circle",
  backgroundColor: "white",
});
const { region } = dotMap.image;

const bounds: LatLngBoundsExpression = [
  [region.lat.min, region.lng.min],
  [region.lat.max, region.lng.max],
];

const Map = styled(MapContainer)`
  height: 700px;
  width: 100%;
  background: white;
  // overflow: hidden;
`;
const Tooltip = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  z-index: 100000;
  color: black;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left + 12}px;
  padding-left: 4px;
  border-left: 2px solid black;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  ${({ $visible }) => ($visible ? "" : "transition: opacity 0.2s;")}
`;

const MapComponent = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [displayedColiving, setDisplayedColiving] = useState<null | {
    country: string;
    city: string;
    location: number[];
  }>(null);
  const [tooltipCoords, setTooltipCoords] = useState({ top: 0, left: 0 });
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.setMaxBounds(bounds);
      map.on("drag", function () {
        map.panInsideBounds(bounds, { animate: false });
      });
    }
  }, [map]);

  return (
    <div>
      <Map
        center={[9.787141, -84.518303]}
        zoom={1}
        maxZoom={6}
        minZoom={3}
        attributionControl={false}
        zoomControl={false}
        ref={setMap}
      >
        <ImageOverlay
          url={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          bounds={bounds}
        />
        {colivings.map((coliving) => {
          const isColivingDisplayed =
            coliving === displayedColiving && isTooltipVisible;
          const isAnotherColivingDisplayed =
            !isColivingDisplayed && isTooltipVisible;
          const [lat, lng] = coliving.location;
          const pin = dotMap.getPin({ lat, lng });

          return (
            <CircleMarker
              center={[pin.lat, pin.lng]}
              radius={4}
              pathOptions={{
                fillColor: isColivingDisplayed ? "#F0F600" : "#0a4b51",
                color: "transparent",
                fillOpacity: isAnotherColivingDisplayed ? 0.6 : 1,
              }}
              key={coliving.city}
              eventHandlers={{
                mouseover: (e) => {
                  setTooltipCoords({
                    top: e.originalEvent.clientY,
                    left: e.originalEvent.clientX,
                  });
                  setDisplayedColiving(coliving);
                  setIsTooltipVisible(true);
                },
                mouseout: () => {
                  setIsTooltipVisible(false);
                },
                // click: () => window.open(coliving.website, "_blank"),
              }}
            />
          );
        })}
      </Map>
      <Tooltip
        $top={tooltipCoords.top}
        $left={tooltipCoords.left}
        $visible={isTooltipVisible}
      >
        <div>
          <b>{displayedColiving?.country}</b>
        </div>
        {displayedColiving?.city}
      </Tooltip>
    </div>
  );
};

export default MapComponent;
